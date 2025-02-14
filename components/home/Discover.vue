<template>
    <div class="relative">
        
        <div class="relative px-20 s:px-140 pt-100 s:pt-140 pb-50 s:pb-200">
            <div class="relative">
                <div class="relative mb-40 w-full flex items-center justify-center">
                    <h2 class="text-center mont font-medium text-[#25284A] text-30 leading-none tracking-[-1.2px] js-s-lines">Descubrí nuestras soluciones <br> <strong class="mont font-bold">para que tu negocio crezca:</strong></h2>
                </div>
                <div class="relative grid grid-cols-1 s:grid-cols-3 items-center justify-center s:gap-x-16 gap-y-30 s:gap-y-0 pb-100 s:pb-65 js-s-fade">
                    
                    <nuxt-link to="/cultivos-trigo" class="discover-card relative w-full h-[30rem] text-white flex items-center justify-center">
                        <div class="discover-card-bgs absolute inset-0 rounded-[5.7rem] overflow-hidden">
                            <figure class="relative w-full h-full discover-card-figure">
                                <!-- <img class="relative w-full h-full object-cover" src="/hero-home.jpg" alt="Discover"> -->
                                
                                <video class="relative w-full h-full object-cover"             
                                    :src="VideoTrigo.url" 
                                    :alt="VideoTrigo.name"
                                    autoplay
                                    playsinline
                                    muted
                                    loop
                                >
                                </video>
                            </figure>
                        </div>

                        <div class="relative flex flex-col items-center justify-center">
                            <div class="relative pb-10">
                                <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Group_472" data-name="Group 472" viewBox="0 0 26.405 67.072">
                                    <defs>
                                        <clipPath id="clip-path">
                                        <rect id="Rectangle_571" data-name="Rectangle 571" width="26.405" height="67.072" fill="#fff"/>
                                        </clipPath>
                                    </defs>
                                    <g id="Group_472-2" data-name="Group 472" clip-path="url(#clip-path)">
                                        <path id="Path_515" data-name="Path 515" d="M1.31,38.686c-.1-.236-.2-.449-.291-.666A10.533,10.533,0,0,1,.2,33.685c.023-1.052.059-2.1.055-3.157a2.127,2.127,0,0,1,1.173-2.11,19.834,19.834,0,0,1-.76-2.62,23.165,23.165,0,0,1-.245-3.569c.014-2.695.107-5.388.16-8.082a1.253,1.253,0,0,1,.712-1.2,1.161,1.161,0,0,1,1.225.111,1.274,1.274,0,0,1,.513,1.17c-.022,1.1-.032,2.2-.066,3.3a.513.513,0,0,0,.326.537c1.448.833,2.876,1.7,4.312,2.555.143.085.291.164.543.3-.177-.392-.315-.668-.428-.955A10.108,10.108,0,0,1,9.615,8.888c.838-.96,1.756-1.85,2.619-2.789a.9.9,0,0,0,.2-.541c.044-1.418.059-2.837.1-4.256a1.224,1.224,0,1,1,2.446-.027c-.013,1.419-.045,2.838-.089,4.257a1.037,1.037,0,0,0,.293.757,35.433,35.433,0,0,1,3.394,4.185A9.963,9.963,0,0,1,18.861,20.6c-.068.135-.129.274-.251.532,1.107-.621,2.094-1.185,3.091-1.731.642-.351,1.307-.662,1.944-1.021a.592.592,0,0,0,.235-.428c.042-1.147.05-2.3.085-3.443a1.174,1.174,0,0,1,1.217-1.247A1.148,1.148,0,0,1,26.405,14.5c0,.957-.03,1.913-.051,2.869-.048,2.216-.068,4.433-.16,6.647a9.825,9.825,0,0,1-1.285,4.769c.223.167.5.282.632.491a2.52,2.52,0,0,1,.52,1.188c-.015,1.736-.081,3.473-.217,5.2a7.853,7.853,0,0,1-1.116,3.417,3.823,3.823,0,0,1,.731.692,2.266,2.266,0,0,1,.4,1.1,39.8,39.8,0,0,1-.153,4.823,10.062,10.062,0,0,1-5.36,7.857c-2.083,1.166-4.193,2.283-6.279,3.443-.115.064-.178.31-.183.472-.065,2.758-.114,5.516-.172,8.274-.018.81-.392,1.258-1.086,1.327a1.172,1.172,0,0,1-1.364-1.281c.015-1.434.054-2.869.082-4.3.027-1.355.044-2.711.087-4.065a.565.565,0,0,0-.343-.582C8.657,55.352,6.129,54,3.846,52.314A9.583,9.583,0,0,1,.013,44.571C-.03,43.251.044,41.926.068,40.6A2.061,2.061,0,0,1,1.31,38.686M13.672,8.145c-.817.862-1.547,1.613-2.254,2.384A7.8,7.8,0,0,0,9.62,13.7a8.466,8.466,0,0,0,3.434,9.1.44.44,0,0,0,.631-.054,21.681,21.681,0,0,0,2.258-2.178,7.664,7.664,0,0,0,.585-8.779,40.288,40.288,0,0,0-2.857-3.646M11.59,43.938l.151-.061c.007-.92.039-1.84.018-2.759A8.022,8.022,0,0,0,7.837,34.1c-1.468-.922-2.954-1.816-4.432-2.721-.21-.129-.423-.251-.616-.366-.044,1.141-.164,2.242-.113,3.334A7.39,7.39,0,0,0,5.826,40.3c1.854,1.308,3.837,2.433,5.764,3.639m-.2,10.311.187-.047c-.032-1.235,0-2.476-.109-3.706a7.01,7.01,0,0,0-2.733-5.221c-1.241-.937-2.578-1.75-3.888-2.594-.744-.48-1.52-.91-2.258-1.347-.044,1.139-.171,2.257-.113,3.365a7.447,7.447,0,0,0,3.253,6c1.83,1.267,3.77,2.374,5.661,3.55m-8.4-33.661c-.045,1.224-.16,2.325-.109,3.417A7.432,7.432,0,0,0,5.758,29.75a40.442,40.442,0,0,0,3.437,2.23c.871.548,1.758,1.071,2.776,1.69-.021-1.282.011-2.442-.068-3.594A7.311,7.311,0,0,0,8.736,24.29c-1.865-1.292-3.814-2.463-5.75-3.7M13.929,54.334c1.431-.8,2.784-1.543,4.124-2.307a19.908,19.908,0,0,0,2.2-1.339c3-2.278,3.342-5.509,3.108-9-1.775,1-3.529,1.972-5.256,2.985a8.332,8.332,0,0,0-2.659,2.368c-1.535,2.185-1.569,4.679-1.517,7.295M23.564,31.39c-1.873,1.052-3.721,2.049-5.528,3.117a7.121,7.121,0,0,0-3.552,4.82,34.731,34.731,0,0,0-.322,4.558c0,.019.041.042.1.094,1.746-.991,3.531-1.94,5.252-2.995a9.063,9.063,0,0,0,4.055-9.593m.276-10.372c-1.751.978-3.41,1.925-5.089,2.836a8.184,8.184,0,0,0-3.762,4.109c-.772,1.823-.559,3.737-.643,5.742,1.857-1.054,3.623-2.033,5.365-3.055a8.281,8.281,0,0,0,2.562-2.268c1.589-2.2,1.627-4.724,1.568-7.364" transform="translate(0 0)" fill="#fff"/>
                                    </g>
                                </svg>
                            </div>
                            <p class="relative pb-10 mont font-medium text-15 leading-none tracking-[-0.6px]">Soluciones para</p>
                            <h4 class="relative mont font-semibold text-40 leading-none tracking-[-1.6px]">TRIGO</h4>

                            <div class="relative mt-25">
                                <Button />
                            </div>
                        </div>
                    </nuxt-link>

                    <nuxt-link to="/cultivos-soja" class="discover-card relative w-full h-[30rem] text-white flex items-center justify-center">
                        <div class="discover-card-bgs absolute inset-0 rounded-[5.7rem] overflow-hidden">
                            <figure class="relative w-full h-full discover-card-figure">
                                <!-- <img class="relative w-full h-full object-cover" src="/hero-home.jpg" alt="Discover"> -->
                                <video class="relative w-full h-full object-cover"             
                                    :src="VideoSoja.url" 
                                    :alt="VideoSoja.name"
                                    autoplay
                                    playsinline
                                    muted
                                    loop
                                >
                                </video>
                            </figure>
                        </div>

                        <div class="relative flex flex-col items-center justify-center">
                            <div class="relative pb-10">
                                <img class="w-[5rem] h-auto object-contain" src="/svg-icon-home.png" alt="">
                            </div>

                            <p class="relative pb-10 mont font-medium text-15 leading-none tracking-[-0.6px]">Soluciones para</p>
                            <h4 class="relative mont font-semibold text-40 leading-none tracking-[-1.6px]">SOJA</h4>

                            <div class="relative mt-25">
                                <Button />
                            </div>
                        </div>
                    </nuxt-link>

                    <nuxt-link to="/vicia-villosa" class="discover-card relative w-full h-[30rem] text-white flex items-center justify-center">
                        <div class="discover-card-bgs absolute inset-0 rounded-[5.7rem] overflow-hidden">
                            <figure class="relative w-full h-full discover-card-figure">
                                <!-- <img class="relative w-full h-full object-cover" src="/hero-home.jpg" alt="Discover"> -->
                                <video class="relative w-full h-full object-cover"             
                                    :src="VideoVicia.url" 
                                    :alt="VideoVicia.name"
                                    autoplay
                                    playsinline
                                    muted
                                    loop
                                >
                                </video>
                            </figure>
                        </div>

                        <div class="relative flex flex-col items-center justify-center">
                            <div class="relative pb-10">
                                <svg class="w-[3.8rem] h-auto" xmlns="http://www.w3.org/2000/svg" width="38.004" height="48.755" viewBox="0 0 38.004 48.755">
                                    <g id="outline" transform="translate(-64.001 -7.042)">
                                        <path id="Path_577" data-name="Path 577" d="M101.061,7.056l-1.383.268a19.066,19.066,0,0,0-14.989,14.55q-.563.742-1.1,1.5a20.525,20.525,0,0,0-9.876-14.2l-.585-.341a.794.794,0,0,0-1.185.8l.188,1.316a20.513,20.513,0,0,0,9.9,14.78,50.741,50.741,0,0,0-2.474,4.449,20.525,20.525,0,0,0-9.812-13.86l-.585-.341a.794.794,0,0,0-1.185.8l.188,1.316a20.513,20.513,0,0,0,10.114,14.9q-.692,1.652-1.271,3.356-.372,1.1-.691,2.211a20.525,20.525,0,0,0-9.743-13.512l-.585-.341a.794.794,0,0,0-1.185.8l.188,1.316A20.521,20.521,0,0,0,75.467,41.923q-.514,2.376-.8,4.791A20.523,20.523,0,0,0,65.78,36.152l-.585-.341a.794.794,0,0,0-1.185.8l.188,1.316A20.512,20.512,0,0,0,74.317,52.83v1.917a.794.794,0,0,0,1.461.428A20.513,20.513,0,0,0,93.613,51.3l1.038-.831a.794.794,0,0,0-.318-1.393l-.66-.152A20.522,20.522,0,0,0,75.9,53.19v-.506a48.789,48.789,0,0,1,.362-5.916A20.538,20.538,0,0,0,93.9,43.848l1.084-.765a.794.794,0,0,0-.234-1.41l-.65-.191a20.524,20.524,0,0,0-17.466,2.81,49.788,49.788,0,0,1,1.556-6.406,20.653,20.653,0,0,0,6.229.962,20.4,20.4,0,0,0,2.637-.171,20.628,20.628,0,0,0,8.836-3.346l1.1-.744a.794.794,0,0,0-.2-1.414l-.646-.2a20.524,20.524,0,0,0-16.975,2.106,49.747,49.747,0,0,1,2.511-5.541,20.652,20.652,0,0,0,6.511,1.053,20.381,20.381,0,0,0,2.444-.147A20.623,20.623,0,0,0,99.5,27.177l1.108-.734a.794.794,0,0,0-.191-1.416l-.644-.211a20.525,20.525,0,0,0-16.239,1.51q1.1-1.743,2.342-3.392l1.047-.2A19.091,19.091,0,0,0,101.678,9.119l.3-1.071a.794.794,0,0,0-.915-.992ZM73.756,11.065a18.94,18.94,0,0,1,8.312,12.814,19.038,19.038,0,0,1-8.312-12.814Zm-3.968,7.142A18.94,18.94,0,0,1,78.1,31.02a19.038,19.038,0,0,1-8.312-12.814Zm-3.174,8.729a18.94,18.94,0,0,1,8.312,12.814A19.038,19.038,0,0,1,66.614,26.935ZM92.7,42.75A19.04,19.04,0,0,1,77.672,45.5,18.94,18.94,0,0,1,92.7,42.75ZM65.82,38.044a18.94,18.94,0,0,1,8.312,12.814A19.038,19.038,0,0,1,65.82,38.044ZM92.348,50.27a19.038,19.038,0,0,1-14.83,3.655,18.936,18.936,0,0,1,14.83-3.655Zm2.367-16.062a19.038,19.038,0,0,1-15.077,2.445,18.94,18.94,0,0,1,15.077-2.445Zm3.62-8.166a19.038,19.038,0,0,1-15.1,2.3,18.94,18.94,0,0,1,15.1-2.3ZM86.622,21.173,86.5,21.2A17.48,17.48,0,0,1,99.98,8.882l.122-.024A17.407,17.407,0,0,1,86.622,21.173Z" transform="translate(0 0)" fill="#fff"/>
                                    </g>
                                </svg>
                            </div>

                            <p class="relative pb-10 mont font-medium text-15 leading-none tracking-[-0.6px]">Soluciones para</p>
                            <h4 class="relative mont font-semibold text-40 leading-none tracking-[-1.6px]">VICIA VILLOSA</h4>

                            <div class="relative mt-25">
                                <Button />
                            </div>
                        </div>
                    </nuxt-link>
                </div>

                <div class="relative w-full h-[45rem] rounded-[5rem] overflow-hidden js-s-fade">
                    <div class="absolute inset-0 z-1 overflow-hidden">
                        <figure class="relative w-full h-full">
                            <div class="absolute inset-0 bg-black opacity-10 z-2"></div>
                            <!-- <img class="relative w-full h-full object-cover" src="/hero-home.jpg" alt="Discover"> -->
                            <video class="relative w-full h-full object-cover"             
                                :src="VideoAsesor.url" 
                                :alt="VideoAsesor.name"
                                autoplay
                                playsinline
                                muted
                                loop
                            >
                            </video>
                        </figure>
                    </div>

                    <div class="relative z-5 mx-auto max-w-[30rem] s:max-w-[70rem] w-full h-full flex flex-col items-center justify-center text-white">
                        <h3 class="relative pb-10 text-center mont font-semibold text-30 s:text-45 leading-none tracking-[-1.8px]">Asesor Inteligente <br> de Semillas Bioceres</h3>
                        <p class="relative text-center font-normal inter text-20 s:text-26 leading-[1.1] tracking-[-1.04px]">Ingresá los datos de tu campo y descargá una recomendación personalizada de variedad y manejo agronómico para tu lote</p>

                        <div class="relative mt-45">
                            <ButtonArrow color="white" label="¡Probalo Gratis ahora!" href="/asesor-inteligente" />
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
        VideoSoja: {
            type: Object
        },
        VideoTrigo: {
            type: Object
        },
        VideoVicia:{
            type: Object
        },
        VideoAsesor:{
            type: Object
        }
    }
}
</script>