<template>
    <div class="relative">
        <div class="relative py-100 s:py-130">
            <div class="relative pb-100 s:pb-120">
                <div class="relative pb-30">
                    <h2 class="mont font-semibold text-40 s:text-45 leading-none tracking-[-1.8px] text-center js-s-fade">
                        Fecha de siembra <br>
                        <span class="mont font-bold text-[#A0C344]">
                            por zona
                        </span>
                    </h2>
                </div>
                
                <div class="relative pl-20 s:pl-150 pr-20 s:pr-190">
                    <div class="grid grid-cols-1 s:grid-cols-2 s:gap-x-90 js-s-fade">
                        <div class="relative w-full mb-50 s:mb-0">
                            <figure class="relative w-full">
                                <div class="pt-[105%]"></div>
                                <img class="absolute inset-0 object-contain" :src="product.data.imagen_siembra_1.url" :alt="product.data.imagen_siembra_1.alt">
                            </figure>
                        </div>

                        <div class="relative w-full">
                            <figure class="relative w-full">
                                <div class="pt-[105%]"></div>
                                <img class="absolute inset-0 object-contain" :src="product.data.imagen_siembra_2.url" :alt="product.data.imagen_siembra_2alt">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative flex flex-col items-center justify-center">
                <div class="relative w-full s:w-[inherit] pb-50 s:pb-60 px-20 s:px-0">
                    <div class="relative pb-30">
                        <h2 class="mont font-semibold text-40 s:text-45 leading-none tracking-[-1.8px] text-center js-s-fade">
                            Perfil <br>
                            <span class="mont font-bold text-[#A0C344]">
                                Sanitario
                            </span>
                        </h2>
                    </div>

                    <div class="relative w-full s:w-[53rem] mx-auto js-s-fade">
                        <div v-if="perfilSanitario" class="flex flex-row items-center justify-center gap-20">
                            <div class="relative flex flex-col items-end gap-y-20">
                                <div v-for="(item,i) in perfilSanitario.items" :key="i" class="text-[#25284A] inter font-medium text-20 leading-1 tracking-[-0.84px]">{{item.titulo}}</div>
                            </div>

                            <div class="relative flex flex-col items-start gap-y-20">
                                <div v-for="(ite,index) in perfilSanitario.items" :key="index" :class="`relative rounded-[2rem] w-[32rem] h-[3rem] text-white inter font-medium text-20 leading-1 tracking-[-0.84px] text-center`" :style="`background-color:${ite.color}`">{{ite.caracteristica}}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative js-s-fade">
                    <ButtonArrow color="lightblue" label="Ver ficha técnica" :tipo="`external`" :href="perfilSanitario.primary.ficha_tecnica.url" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    props: {
        product:{
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
        perfilSanitario() {            
            return Array.from(this.product.data.slices).filter(s => s.slice_type == "perfil_sanitario")[0]
        }
    }
}
</script>