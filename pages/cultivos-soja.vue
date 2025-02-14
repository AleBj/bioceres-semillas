<template>
    <div class="relative">
        <ProductsHero @category-changed="updateCategory" :options="madurez" :type="`Soja`" :videoHero="videoHero" />
        <ProductsListProducts :category="currentCategory" :posts="soja" :type="`soja`" />
        <ProductsValueSeed />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    async asyncData({$prismic, store}){
        const posts = await $prismic.api.query(
        $prismic.predicates.at(
          "document.type",
          "soja",
        )
      );

	const general_data = await $prismic.api.getSingle('general_data')
    
        return {
            soja: posts.results.sort((a,b) => (a.data.posicion < b.data.posicion) ? 1 : ((b.data.posicion < a.data.posicion) ? -1 : 0)),
            videoHero: general_data.data.video_hero_soja
        }
    },
    data() {
        return {
            currentCategory: 'all',
            madurez:[
                '3 corto',
                '3 medio',
                '3 largo',
                '4 corto',
                '4 medio',
                '4 largo',
                '5 corto',
                '5 medio',
                '5 largo'
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