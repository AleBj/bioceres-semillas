<template>
    <div class="relative">
        <div class="relative w-full h-[50rem]">
            <div class="relative w-full h-full flex items-center">
                <div class="absolute inset-0">
                    <figure class="relative w-full h-full">
                        <!-- <img class="relative w-full h-full object-cover" src="/hero-home.jpg" alt="Discover"> -->
                        <video class="relative w-full h-full object-cover"             
                                :src="video.url" 
                                :alt="video.name"
                                autoplay
                                playsinline
                                muted
                                loop
                            >
                            </video>
                    </figure>
                </div>

                <div class="relative px-20 s:px-240">
                    <h1 class="relative flex flex-col items-start text-white js-t-fades">
                        <span class="mont font-semibold inline-flex text-35 s:text-45 leading-none tracking-[-2.4px]">Asesor Inteligente</span>
                        <span class="mont font-bold inline-flex text-40 s:text-60 leading-none tracking-[-2.4px]">Bioceres Online</span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        video:{
            type:Object
        }
    }
}
</script>
<style lang="scss" scoped>
.select-input {
    appearance: none;
    outline: none;
}

.select-line {
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    width: 100%;
    height: .2rem;
    background: #fff;
}

.card-directions {
    box-shadow: 0px 3.3rem 6.6rem #00000012;
    border-radius: 5rem;
}
</style>