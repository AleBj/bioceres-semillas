<template>
    <div class="relative">
        <HomeHero 
            :sliders="home.slices[0]"
        />
        <HomeDiscover
            :VideoAsesor="home.video_asesor_inteligente"
            :VideoSoja="home.video_bloque_soja"
            :VideoTrigo="home.video_bloque_trigo"
            :VideoVicia="home.video_bloque_vicia_villosa"
        />
        <HomeValue />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    
    data() {
        return {
        }
    },
    async asyncData({$prismic, params, store}){
		// const homepage = await $prismic.api.getByUID('page', 'home')
		const home = await $prismic.api.getSingle('home')
      
        return {
            home: home.data
        }
    }
}
</script>

<style lang="scss" scoped></style>