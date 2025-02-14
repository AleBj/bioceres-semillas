<template>
    <div class="relative">
        <div class="relative pb-100 px-20 s:px-140 flex flex-col items-center justify-center text-[#25284A]">
            <div class="relative s:pb-60 flex flex-col items-center justify-center js-s-fade">
                <div class="relative top-[4.5rem] s:top-[2.2rem] z-4">
                    <h2 class="inter font-bold text-50 s:text-60 leading-none tracking-[-2.4px]">El valor de</h2>
                </div>
                <div class="hidden s:block relative w-[110rem] h-[14rem]">
                    <div class="text-clip-mix bg-white absolute w-full h-full z-3 mont font-black text-[16rem] leading-none">una semilla.</div>
                    <video muted playsinline autoplay loop class="absolute top-0 left-0 w-full h-full object-cover" src="/clouds.mp4"></video>
                </div>
                <figure class="block s:hidden relative w-full h-[14rem]">
                    <img class="relative w-full h-full object-contain" src="/seed.png" alt="El valor de una semilla">
                </figure>
            </div>

            <div class="relative px-20 s:px-280">
                <p class="inter font-normal text-center text-26 leading-[1.5] tracking-[-1.04px] js-s-fade">
                    Nacimos para dar vida a cultivos capaces de lograr lo que parecía imposible.
                    <strong class="font-bold">
                        Cultivos más eficientes, tolerantes a los embates del clima y más rentables.
                    </strong>
                </p>
            </div>

            <div class="relative mt-50 s:mt-75 js-s-fade">
                <ButtonArrow color="lightblue" label="Descubrí quienes somos" href="/nuestras-raices" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .text-clip-mix {
        mix-blend-mode: screen;
    }
</style>