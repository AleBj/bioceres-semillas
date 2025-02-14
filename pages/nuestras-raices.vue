<template>
    <div class="relative">
        <AboutHero :field="about" />        
        <AboutInfo :field="about" />
        <AboutLetsDoIt :field="about" />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],

    async asyncData({$prismic, params, store}){
		// const homepage = await $prismic.api.getByUID('page', 'home')
		const about = await $prismic.api.getSingle('nuestras_raices')
        console.log(about.data)
        return {
            about: about.data
        }
    }
}
</script>

<style lang="scss" scoped></style>