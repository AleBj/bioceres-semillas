<template>
    <div class="relative">
        <TecHero 
            :video="tech.video_hero"
            :titulo="tech.titulo"
        />
        <TecInfo 
            :stepss="tech.slices[0].items"
        />
        <TecMap 
            :map="tech.mapa"
        />
        <TecDiscover
            :bloque1="bloque1"
            :bloque2="bloque2"
        />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    async asyncData({$prismic, params, store}){
        // const homepage = await $prismic.api.getByUID('page', 'home')
        let bloque1 = {}
        let bloque2 = {}
        const tech = await $prismic.api.getSingle('tecnologia')
        console.log(tech.data)
        bloque1.image = tech.data.imagen_bloque_1
        bloque1.texto = tech.data.texto_bloque_1
        bloque1.cta = tech.data.cta_boton_bloque_1
        bloque1.link = tech.data.link_bloque_1
        bloque2.image = tech.data.imagen_bloque_2
        bloque2.texto = tech.data.texto_bloque_2
        bloque2.cta = tech.data.cta_boton_bloque_2
        bloque2.link = tech.data.link_bloque_2
        return {
            tech: tech.data,
            bloque1,
            bloque2
        }
    }
}
</script>

<style lang="scss" scoped></style>