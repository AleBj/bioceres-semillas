<template>
    <div class="relative">
        <ProductsHero @category-changed="updateCategory" :options="ciclos" :type="`Trigo`" :videoHero="videHero" />
     
        <ProductsListProducts :category="currentCategory" :posts="trigo" :type="`trigo`" />

        <ProductsValueSeed />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    props: {
        category: {
            type: String,
            default: 'all'
        },
        posts:{
            type: Array,
        },
        type:{
            type: String,
        }
    },
    mixins: [Page],
    async asyncData({$prismic}){
        const posts = await $prismic.api.query(
        $prismic.predicates.at(
          "document.type",
          "trigo",
        ),
      );

	    const general_data = await $prismic.api.getSingle('general_data')

        
        return {
            trigo: posts.results.sort((a,b) => (a.data.posicion < b.data.posicion) ? 1 : ((b.data.posicion < a.data.posicion) ? -1 : 0)),
            videHero:  general_data.data.video_hero_trigo
        }
    },
    data() {
        return {
            currentCategory: 'all',
            ciclos:[
                'Largo',
                'Intermedio Largo',
                'Intermedio',
                'Corto'
            ]
        }
    },
    methods: {
        updateCategory(category) {
            this.currentCategory = category
        }
    }
}
</script>

<style lang="scss" scoped></style>