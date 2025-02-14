<template>
    <div class="relative">
        <div class="relative">

            <div class="absolute inset-0 z-1">
                <figure class="relative w-full h-full">
                    <div class="overlay absolute inset-0 z-2 select-none pointer-events-none"></div>
                    <img class="block s:hidden relative w-full h-full object-cover" src="/about-lets-do-it.png" alt="Lets Do it - Bioceres">
                    <video class="hidden s:block relative w-full h-full object-cover" :src="field.prefooter_video.url" autoplay muted loop playsinline></video>
                </figure>
            </div>

            <div class="relative flex flex-col items-center justify-center z-4 text-white py-225">
                <div class="relative pb-25 js-s-fade">
                    <svg class="svg-icon w-[3.3rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373.529 441.332">
                        <path d="M128.4,131.366c43.511-17.167,96.437-20.743,179.291-60.795l-2.388,173.8c.954,44.345-21.456,83.921-55.668,107.165C218.4,368.11,116.477,389.331,117.19,292.653c.479-73.314,110.624-111.816,110.624-111.816S77.855,171.418,69.866,309.224C35.532,248.667,49.482,162.479,128.4,131.366M357.392,0l-.355.238C274.784,38.264,188.12,53.526,110.518,82.371-70.2,149.484-16.556,422.352,179.181,425.332c112.649.355,185.005-97.87,177.616-194.19.479,5.243.717,10.49.717,15.975V0Z" transform="translate(8.016 8)" fill="#f9f9f9" stroke="#fff" stroke-width="16"/>
                    </svg>
                </div>

                <div class="relative max-w-[30rem] s:max-w-[66rem] mx-auto pb-35">
                    <div class="text-center inter font-regular text-20 s:text-26 leading-[1.35] tracking-[-1.04px] js-s-fade strong-bolder">
                        <prismic-rich-text
                            :field="field.prefooter_texto"
                        />
                    </div>
                </div>

                <div class="relative">
                    <h3 class="mont font-semibold text-center text-45 leading-none tracking-[-1.8px] js-s-lines">{{field.prefooter_title}}</h3>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    props:{
        field:{
            type: Object
        }
    }
}

</script>

<style lang="scss" scoped>
.overlay {
    background: #25284A;
    opacity: 0.63;
}

.svg-icon {
    opacity: 0.4;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
}
</style>