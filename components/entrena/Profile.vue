<template>
    <div class="relative">
        <section class="relative">
            <div class="absolute inset-0 z-1">
                <figure class="relative w-full h-full">
                    <div class="overlay absolute inset-0 z-2 select-none pointer-events-none"></div>
                    <img v-if="caracVicia.primary.imagen_background.url" class="relative w-full h-full object-cover" :src="caracVicia.primary.imagen_background.url" alt="Product Detail">
                    <video v-else class="relative w-full h-full object-cover"            
                        :src="caracVicia.primary.video_background.url" 
                        alt="Hero Cultivos"
                        autoplay
                        playsinline
                        muted
                        loop
                    >
                    </video>
                </figure>
            </div>

            <div class="relative py-100 s:py-150 px-20 s:px-240 z-3">
                <div class="relative pb-50">
                    <h2 class="relative mont font-semibold text-white text-40 s:text-50 leading-none tracking-[-2px] ">
                        Perfil <br> Agronómico
                    </h2>
                </div>

                <div class="relative s:pl-30">
                    <ul class="relative grid grid-cols-1 s:grid-cols-2 s:gap-x-80 gap-y-35 text-white js-s-fade">
                        
                        <li v-for="(item, id) in caracVicia.items" :key="id" class="relative flex items-center gap-x-40">
                            <div class="relative w-[3.2rem] h-[3.2rem] flex-shrink-0">
                                <img class="relative w-full h-full object-contain flex-shrink-0" :src="item.icono.url" alt="">
                            </div>

                            <div class="relative">
                                <p class="inter font-bold text-22 leading-none tracking-[-0.88px] flex-shrink-0">{{$prismic.asText(item.texto)}}</p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    props: {
        page:{
            type: Object,            
        }
    },
    data() {
        return {
        }
    },
    methods: {
        
    },
    computed: {
        caracVicia() {            
            return Array.from(this.page.slices).filter(s => s.slice_type == "caracteristicas")[0]
        }
    }
}
</script>

<style lang="scss" scoped>
.overlay {
    background: #636363;
    mix-blend-mode: multiply;
    opacity: 0.73;
}
</style>