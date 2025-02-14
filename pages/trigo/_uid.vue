<template>
    <div class="relative">
        <DetailIntro :product="page" />
        <DetailInfo :product="page" />
        <DetailHistory :product="page" />
        <DetailValueSeed :videoAsesor="videoAsesor" />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    async asyncData ({ $prismic, params, store }) {
        console.log('hola page', params)
        const page = await $prismic.api.getByUID('trigo', params.uid)
        console.log('hola page', page)
       
	    const general_data = await $prismic.api.getSingle('general_data')
        return {
            page,
            videoAsesor:general_data.data.video_asesor_productos
        }
    },
    data () {
        return {  }
    },
    head () {
    
    }
}
</script>
  