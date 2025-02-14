<template>
    <div class="relative bg-[#fafaf3]">
        <div class="relative px-20 s:px-140 pt-100 s:pt-0 pb-100 s:pb-80">
            <div class="relative js-s-fade">
                <div class="relative w-full h-[45rem] rounded-[5rem] overflow-hidden">
                    <div class="absolute inset-0 z-1">
                        <figure class="relative w-full h-full">
                            <div class="absolute inset-0 bg-black opacity-10 z-2"></div>
                            <!-- <img class="relative w-full h-full object-cover" src="/hero-home.jpg" alt="Discover"> -->
                            <video class="hidden s:block relative w-full h-full object-cover"             
                                :src="video.url" 
                                alt="Hero Cultivos"
                                autoplay
                                playsinline
                                muted
                                loop
                            >
                            </video>                        
                        </figure>
                    </div>

                    <div class="relative z-5 mx-auto max-w-[30rem] s:max-w-[70rem] w-full h-full flex flex-col items-center justify-center text-white">
                        <h3 class="relative pb-10 text-center mont font-semibold text-30 s:text-45 leading-none tracking-[-1.8px]">Compra tus Semillas, cerca.</h3>
                        <p class="relative text-center mont font-normal text-20 s:text-26 leading-[1.1] tracking-[-1.04px]">Conocé nuestra red de multiplicadores y descubrí al asesor más cercano a tu campo.</p>

                        <div class="relative mt-45">
                            <ButtonArrow color="white" label="Encontrá al tuyo" href="/como-comprar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        video: {
            type: Object
        },
    }
}
</script>