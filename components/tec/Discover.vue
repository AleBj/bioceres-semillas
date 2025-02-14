<template>
    <div class="relative bg-[#faf9f3] overflow-hidden">
        <div class="relative pt-100 pb-100 s:pb-200 px-20 s:px-115">
            <div class="relative flex flex-col s:flex-row items-start gap-50 s:gap-100">

                <div class="relative w-full s:w-[54rem] flex flex-col items-start js-s-fade">
                    <div class="relative pb-20">
                        <figure class="w-auto h-[10rem]">
                            <img class="w-full h-full object-contain" :src="bloque1.image.url" alt="">
                        </figure>
                    </div>
                    
                    <div class="relative">
                        <h3 class="relative pb-50 text-[#D0C787] inter font-medium text-30 s:text-40 leading-[1.05] tracking-[]" >{{bloque1.texto}}</h3>
                        <a :href="bloque1.link.url" target="_blank" class="uline relative flex items-center text-[#25284A] font-regular inter text-18 leading-[1.2] tracking-[-0.72px]" type="button">
                            <span class="inline-block">
                                {{bloque1.cta}}
                            </span>
                            <span class="inline-block ml-5">
                                <svg class="w-[1.8rem] h-auto rotate-[135deg]" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.49967 6.76172L16.0243 6.76243M1.49967 6.76172L6.36173 11.6238M1.49967 6.76172L6.36173 1.90107" stroke="#B5DC4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </a>
                    </div>

                </div>

                <div class="relative w-full s:w-[54rem] flex flex-col items-start js-s-fade">
                    <div class="relative pb-20">
                        <figure class="w-auto h-[10rem]">
                            <img class="w-full h-full object-contain" :src="bloque2.image.url" alt="">
                        </figure>
                    </div>
                    
                    <div class="relative">
                        <h3 class="relative pb-50 text-[#D0C787] inter font-medium text-30 s:text-40 leading-[1.05] tracking-[]">{{bloque2.texto}}</h3>
                        <a :href="bloque2.link.url" target="_blank" class="uline relative flex items-center text-[#25284A] font-regular inter text-18 leading-[1.2] tracking-[-0.72px]" type="button">
                            <span class="inline-block">
                                {{bloque2.cta}}
                            </span>
                            <span class="inline-block ml-5">
                                <svg class="w-[1.8rem] h-auto rotate-[135deg]" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.49967 6.76172L16.0243 6.76243M1.49967 6.76172L6.36173 11.6238M1.49967 6.76172L6.36173 1.90107" stroke="#B5DC4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        bloque1:{
            type: Object
        },
        bloque2:{
            type: Object
        }
    },
}
</script>