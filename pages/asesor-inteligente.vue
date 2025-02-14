<template>
    <div class="relative">
        <div class="relative">
            <AsesorHero 
                :video="asesor.video_hero"
            />
            <AsesorContent 
                :csv="asesor.csv_asesor"
            />
            <AsesorValueSeed 
                :video="asesor.video_donde_comprar"
            />
        </div>
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    async asyncData({$prismic, params, store}){
        const asesor = await $prismic.api.getSingle('asesor_inteligente')
        return {
            asesor: asesor.data,
            
        }
    }
}
</script>

<style lang="scss" scoped></style>