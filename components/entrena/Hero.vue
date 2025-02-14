<template>
    <div class="relative">
        <div class="relative">

            <section class="relative py-100 s:py-0 s:h-screen">
                <div class="absolute inset-0 z-1">
                    <figure class="relative w-full h-full">
                        <video class="hidden s:block relative w-full h-full object-cover" src="/fondo_about.mp4" autoplay muted playsinline></video>
                    </figure>
                </div>
                
                <div class="relative w-full flex items-start">
                    <div class="relative pt-100 s:pt-200 pl-20 s:pl-240 pr-20 s:pr-0 z-3">
                        <div class="relative pb-10 js-t-fades">
                            <svg class="w-auto h-[6.3rem]" xmlns="http://www.w3.org/2000/svg" width="49.108" height="63" viewBox="0 0 49.108 63">
                                <g transform="translate(-64.001 -7.042)">
                                    <path d="M111.889,7.06l-1.788.346a24.636,24.636,0,0,0-19.368,18.8q-.727.958-1.419,1.939A26.522,26.522,0,0,0,76.553,9.8L75.8,9.355a1.025,1.025,0,0,0-1.532,1.031l.244,1.7A26.507,26.507,0,0,0,87.3,31.184a65.565,65.565,0,0,0-3.2,5.749A26.521,26.521,0,0,0,71.426,19.024l-.756-.441a1.025,1.025,0,0,0-1.532,1.031l.244,1.7A26.506,26.506,0,0,0,82.451,40.57q-.894,2.135-1.643,4.336-.481,1.42-.893,2.857A26.521,26.521,0,0,0,67.325,30.3l-.756-.441a1.025,1.025,0,0,0-1.532,1.031l.244,1.7A26.517,26.517,0,0,0,78.817,52.114q-.664,3.07-1.033,6.19A26.519,26.519,0,0,0,66.3,44.657l-.756-.441a1.025,1.025,0,0,0-1.532,1.031l.244,1.7A26.5,26.5,0,0,0,77.33,66.208v2.477a1.025,1.025,0,0,0,1.888.554,26.507,26.507,0,0,0,23.046-5.014L103.6,63.15a1.025,1.025,0,0,0-.412-1.8l-.853-.2a26.518,26.518,0,0,0-22.959,5.519V66.02a63.041,63.041,0,0,1,.468-7.645A26.538,26.538,0,0,0,102.634,54.6l1.4-.989a1.025,1.025,0,0,0-.3-1.821l-.84-.247a26.52,26.52,0,0,0-22.568,3.631A64.333,64.333,0,0,1,82.336,46.9a26.687,26.687,0,0,0,8.049,1.243,26.363,26.363,0,0,0,3.407-.221A26.655,26.655,0,0,0,105.209,43.6l1.423-.961a1.025,1.025,0,0,0-.264-1.828l-.835-.264A26.52,26.52,0,0,0,83.6,43.265a64.284,64.284,0,0,1,3.244-7.16,26.686,26.686,0,0,0,8.414,1.361,26.335,26.335,0,0,0,3.158-.19,26.649,26.649,0,0,0,11.458-4.216l1.432-.948a1.025,1.025,0,0,0-.247-1.83l-.832-.272A26.522,26.522,0,0,0,89.243,31.96q1.418-2.252,3.026-4.383l1.352-.262A24.669,24.669,0,0,0,112.686,9.725l.386-1.383a1.025,1.025,0,0,0-1.183-1.282ZM76.605,12.24A24.474,24.474,0,0,1,87.346,28.8,24.6,24.6,0,0,1,76.605,12.24Zm-5.127,9.228a24.474,24.474,0,0,1,10.74,16.558,24.6,24.6,0,0,1-10.74-16.558Zm-4.1,11.279A24.474,24.474,0,0,1,78.118,49.3,24.6,24.6,0,0,1,67.377,32.747Zm33.7,20.437a24.6,24.6,0,0,1-19.414,3.555,24.474,24.474,0,0,1,19.414-3.555ZM66.352,47.1a24.474,24.474,0,0,1,10.74,16.558A24.6,24.6,0,0,1,66.352,47.1Zm34.277,15.8a24.6,24.6,0,0,1-19.163,4.723A24.469,24.469,0,0,1,100.629,62.9Zm3.058-20.755A24.6,24.6,0,0,1,84.206,45.3a24.473,24.473,0,0,1,19.481-3.159Zm4.678-10.551a24.6,24.6,0,0,1-19.51,2.975,24.473,24.473,0,0,1,19.511-2.975ZM93.231,25.3l-.158.031A22.587,22.587,0,0,1,110.492,9.42l.158-.031A22.493,22.493,0,0,1,93.231,25.3Z" transform="translate(0 0)" fill="#a0c344"/>
                                </g>
                            </svg>
                        </div>

                        <div class="relative pb-50">
                            <h1 class="relative pb-20 s:pb-30 text-40 s:text-50 leading-[1.1] tracking-[-2px] js-t-fades">
                                <span class="mont font-semibold flex text-[#a0c344]">{{page.titulo}}</span>
                                <span class="flex mont font-bold text-[#171F49]">con Vicia villosa</span>
                            </h1>

                            <div class="relative max-w-[30rem] s:max-w-[49rem] js-t-fades">
                                <div class="inter font-regular text-20 s:text-22 leading-[1.2] tracking-[-0.88px] text-[#25284A]">
                                    <prismic-rich-text :field="page.texto_hero"></prismic-rich-text>
                                </div>
                            </div>
                        </div>
                        
                        <div class="relative block s:hidden js-t-fades">
                            <figure class="relative w-full h-[35rem]">
                                <img class="w-full h-full object-contain" :src="page.imagen.url" alt="Producto Detalle">
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

        </div>

        <!-- Sticky product bag overlay -->
        <div class="hidden s:block absolute top-0 s:right-[20rem] w-[43rem] h-full z-10">
            <div class="sticky top-0 h-screen flex items-center justify-center js-t-fades">
                <figure class="relative w-full h-[56rem]">
                    <img class="w-full h-full object-contain blur-sm opacity-975" src="/iso-semillas-productos.svg" alt="Producto Detalle">
                    <img class="absolute h-[80%] left-[50%] top-[50%]" style="transform: translate(-50%,-50%);"  :src="page.imagen.url" alt="Producto Detalle">
                </figure>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    props: {
        page: {
            type: Object
        },
    }
}
</script>
<style lang="scss" scoped>
.overlay {
    background: rgba(0, 0, 0, 0.18);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}
</style>