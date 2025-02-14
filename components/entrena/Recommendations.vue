<template>
    <div class="relative overflow-hidden">
        <div class="relative py-100 s:py-135 px-20 s:px-240 z-2">
            <div class="relative pb-50 s:pb-60">
                <h2 class="mont font-semibold text-40 s:text-45 leading-none tracking-[-1.8px] text-left js-s-fade">
                    Recomendaciones <br>
                    <span class="mont font-bold text-[#A0C344]">
                        <strong class="font-bold">de siembra</strong>
                    </span>
                </h2>
            </div>

            <div class="relative pr-20 s:pr-300">
                <div class="grid grid-cols-1 s:grid-cols-2 s:gap-x-50 gap-y-30 s:gap-y-0 js-s-fade">

                    <div class="relative">
                        <div class="relative pb-20">
                            <h5 class="inter font-semibold text-23 leading-none tracking-[-0.92px] text-[#25284A]">Fecha de siembra por zona</h5>
                        </div>

                        <ul class="flex flex-col items-start">
                            <li class="relative pb-30 s:pb-60">
                                <p class="inter font-medium relative pb-10 text-20 leading-[1.1] tracking-[-0.8px] text-[#25284A]">Tempranas</p>
                                <p class="inter font-semibold text-25 leading-[1.1] tracking-[-1px] text-[#3FADE1]">{{ page.recomendaciones[0].fecha_tempranas }}</p>
                            </li>

                            <li class="relative pb-30 s:pb-60">
                                <p class="inter font-medium relative pb-10 text-20 leading-[1.1] tracking-[-0.8px] text-[#25284A]">Intermedias</p>
                                <p class="inter font-semibold text-25 leading-[1.1] tracking-[-1px] text-[#3FADE1]">{{ page.recomendaciones[0].fecha_intermedias }}</p>
                            </li>

                            <li class="relative pb-30 s:pb-60">
                                <p class="inter font-medium relative pb-10 text-20 leading-[1.1] tracking-[-0.8px] text-[#25284A]">Tardías</p>
                                <p class="inter font-semibold text-25 leading-[1.1] tracking-[-1px] text-[#3FADE1]">{{ page.recomendaciones[0].fecha_tardias }}</p>
                            </li>
                        </ul>
                    </div>

                    <div class="relative">
                        <div class="relative pb-20">
                            <h5 class="inter font-semibold text-23 leading-none tracking-[-0.92px] text-[#25284A]">Densidad de siembra</h5>
                        </div>

                        <ul class="flex flex-col items-start">
                            <li class="relative pb-30 s:pb-60">
                                <p class="inter font-medium relative pb-10 text-20 leading-[1.1] tracking-[-0.8px] text-[#25284A]">Fechas tempranas y ambientes de alto potencial de producción</p>
                                <p class="inter font-semibold text-25 leading-[1.1] tracking-[-1px] text-[#3FADE1]">{{ page.recomendaciones[0].densidad_alto }}</p>
                            </li>

                            <li class="relative pb-30 s:pb-60">
                                <p class="inter font-medium relative pb-10 text-20 leading-[1.1] tracking-[-0.8px] text-[#25284A]">Fechas medias - tardías y ambientes de potencial medio de producción</p>
                                <p class="inter font-semibold text-25 leading-[1.1] tracking-[-1px] text-[#3FADE1]">{{ page.recomendaciones[0].densidad_medio }}</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="relative">
                <ButtonArrow color="lightblue" :href="page.ficha_tecnica.url" :tipo="`external`" label="Ver ficha técnica" />
            </div>
        </div>

        <div class="hidden s:block absolute top-[5rem] right-[-35rem] z-1 js-s-fade">
            <figure class="relative w-[100rem] h-[111rem]">
                <img class="w-full h-full object-contain select-none pointer-events-none" src="/entrenar-flower.png" alt="Entrenar">
            </figure>
        </div>
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
        
    }
}
</script>