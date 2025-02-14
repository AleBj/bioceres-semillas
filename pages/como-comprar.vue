<template>
    <div class="relative">
        <SemillasHero 
            :csv="compras.multiplicadores"
            :image="compras.imagen_hero"
            :videoHero="compras.video_hero"
        />
        <div class="relative pt-100">
            <SemillasValueSeed 
                :video="compras.video_asesor_inteligente"
            />
        </div>
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    async asyncData({$prismic, params, store}){
        const compras = await $prismic.api.getSingle('como_comprar')
        return {
            compras: compras.data,
            
        }
    }
}
</script>

<style lang="scss" scoped></style>