<template>
    <div class="relative">
        <EntrenaHero :page="vicia" />
        <EntrenaWhy  :page="vicia" />
        <EntrenaProfile  :page="vicia" />
        <EntrenaRecommendations  :page="vicia" />
        <EntrenaHistory  :page="vicia" />
        <EntrenaValueSeed  :page="vicia" />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    async asyncData({$prismic, params, store}){
        
		const vicia = await $prismic.api.getSingle('vicia_villosa')
        console.log(vicia)
        return {
            vicia: vicia.data
        }
    }
}
</script>

<style lang="scss" scoped></style>