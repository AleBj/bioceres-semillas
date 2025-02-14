<template>
    <div class="relative overflow-hidden">
        <div class="relative py-100 s:py-200">
            <div class="relative px-20 s:px-240">

                <div class="relative flex flex-col-reverse s:flex-row items-start justify-between js-trigger-map">

                    <div class="js-map-container relative w-full s:w-[30rem]">
                        <div class="js-map relative w-full h-[50rem] s:h-[60rem] pt-50 s:pt-0 js-s-fade">
                            <figure class="relative w-full h-full z-1 js-s-fade-map">
                                <img class="w-full h-full object-contain" src="/map.png" alt="Bioceres Tec">
                            </figure>

                            <div class="absolute top-[12.5rem] left-[18.8rem] z-2 select-none pointer-events-none js-s-fade-map">
                                <svg class="w-[4.5rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.588 60.627">
                                    <g id="Group_699" data-name="Group 699" transform="translate(-402.706 -4358.277)">
                                        <path id="Icon_fa-solid-location-pin" data-name="Icon fa-solid-location-pin" d="M45.588,22.794c0,10.376-13.89,28.849-19.98,36.47a3.587,3.587,0,0,1-5.627,0C13.89,51.643,0,33.17,0,22.794a22.794,22.794,0,0,1,45.588,0Z" transform="translate(402.706 4358.277)" fill="#a0c344"/>
                                        <path id="sprout_4293447" d="M15.583,25.012a4.7,4.7,0,0,0-1.35-2.968,4.08,4.08,0,0,0-2.691-1.207,4.163,4.163,0,0,0-3.105-1.665V15.289a4.82,4.82,0,0,0,1.472.228,4.969,4.969,0,0,0,3.5-1.47,5.733,5.733,0,0,0,1.656-3.6.532.532,0,0,0-.282-.524,4.834,4.834,0,0,0-2.163-.508,4.969,4.969,0,0,0-3.5,1.47,5.579,5.579,0,0,0-1.171,1.7,5.579,5.579,0,0,0-1.171-1.7,4.969,4.969,0,0,0-3.5-1.47,4.834,4.834,0,0,0-2.163.508.532.532,0,0,0-.282.524,5.733,5.733,0,0,0,1.656,3.6,4.969,4.969,0,0,0,3.5,1.47,4.819,4.819,0,0,0,1.472-.228v3.961A4.2,4.2,0,0,0,4.939,20.9a3.972,3.972,0,0,0-.712-.064A4.069,4.069,0,0,0,1.35,22.045,4.7,4.7,0,0,0,0,25.012a.55.55,0,0,0,.127.4.472.472,0,0,0,.359.17H15.1a.472.472,0,0,0,.359-.17.55.55,0,0,0,.127-.4ZM12.626,10.461a3.912,3.912,0,0,1,1.428.267,4.284,4.284,0,0,1-4.144,3.74A3.912,3.912,0,0,1,8.481,14.2,4.283,4.283,0,0,1,12.626,10.461ZM5.991,14.469a4.284,4.284,0,0,1-4.144-3.74,3.912,3.912,0,0,1,1.428-.267A4.284,4.284,0,0,1,7.418,14.2,3.911,3.911,0,0,1,5.991,14.469ZM1.06,24.532a3.348,3.348,0,0,1,3.168-2.65,3.063,3.063,0,0,1,.8.106.471.471,0,0,0,.523-.215,3.14,3.14,0,0,1,5.357-.106.477.477,0,0,0,.4.216h.047a3.348,3.348,0,0,1,3.168,2.65Z" transform="translate(418.002 4361.543)" fill="#fff"/>
                                    </g>
                                </svg>
                            </div>

                            <div class="absolute top-[16rem] left-[14rem] z-2 select-none pointer-events-none js-s-fade-map">
                                <svg class="w-[4.5rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.588 60.627">
                                    <g id="Group_699" data-name="Group 699" transform="translate(-402.706 -4358.277)">
                                        <path id="Icon_fa-solid-location-pin" data-name="Icon fa-solid-location-pin" d="M45.588,22.794c0,10.376-13.89,28.849-19.98,36.47a3.587,3.587,0,0,1-5.627,0C13.89,51.643,0,33.17,0,22.794a22.794,22.794,0,0,1,45.588,0Z" transform="translate(402.706 4358.277)" fill="#a0c344"/>
                                        <path id="sprout_4293447" d="M15.583,25.012a4.7,4.7,0,0,0-1.35-2.968,4.08,4.08,0,0,0-2.691-1.207,4.163,4.163,0,0,0-3.105-1.665V15.289a4.82,4.82,0,0,0,1.472.228,4.969,4.969,0,0,0,3.5-1.47,5.733,5.733,0,0,0,1.656-3.6.532.532,0,0,0-.282-.524,4.834,4.834,0,0,0-2.163-.508,4.969,4.969,0,0,0-3.5,1.47,5.579,5.579,0,0,0-1.171,1.7,5.579,5.579,0,0,0-1.171-1.7,4.969,4.969,0,0,0-3.5-1.47,4.834,4.834,0,0,0-2.163.508.532.532,0,0,0-.282.524,5.733,5.733,0,0,0,1.656,3.6,4.969,4.969,0,0,0,3.5,1.47,4.819,4.819,0,0,0,1.472-.228v3.961A4.2,4.2,0,0,0,4.939,20.9a3.972,3.972,0,0,0-.712-.064A4.069,4.069,0,0,0,1.35,22.045,4.7,4.7,0,0,0,0,25.012a.55.55,0,0,0,.127.4.472.472,0,0,0,.359.17H15.1a.472.472,0,0,0,.359-.17.55.55,0,0,0,.127-.4ZM12.626,10.461a3.912,3.912,0,0,1,1.428.267,4.284,4.284,0,0,1-4.144,3.74A3.912,3.912,0,0,1,8.481,14.2,4.283,4.283,0,0,1,12.626,10.461ZM5.991,14.469a4.284,4.284,0,0,1-4.144-3.74,3.912,3.912,0,0,1,1.428-.267A4.284,4.284,0,0,1,7.418,14.2,3.911,3.911,0,0,1,5.991,14.469ZM1.06,24.532a3.348,3.348,0,0,1,3.168-2.65,3.063,3.063,0,0,1,.8.106.471.471,0,0,0,.523-.215,3.14,3.14,0,0,1,5.357-.106.477.477,0,0,0,.4.216h.047a3.348,3.348,0,0,1,3.168,2.65Z" transform="translate(418.002 4361.543)" fill="#fff"/>
                                    </g>
                                </svg>
                            </div>

                            <div class="absolute top-[13rem] left-[10rem] z-2 select-none pointer-events-none js-s-fade-map">
                                <svg class="w-[4.5rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.588 60.627">
                                    <g id="Group_699" data-name="Group 699" transform="translate(-402.706 -4358.277)">
                                        <path id="Icon_fa-solid-location-pin" data-name="Icon fa-solid-location-pin" d="M45.588,22.794c0,10.376-13.89,28.849-19.98,36.47a3.587,3.587,0,0,1-5.627,0C13.89,51.643,0,33.17,0,22.794a22.794,22.794,0,0,1,45.588,0Z" transform="translate(402.706 4358.277)" fill="#a0c344"/>
                                        <path id="sprout_4293447" d="M15.583,25.012a4.7,4.7,0,0,0-1.35-2.968,4.08,4.08,0,0,0-2.691-1.207,4.163,4.163,0,0,0-3.105-1.665V15.289a4.82,4.82,0,0,0,1.472.228,4.969,4.969,0,0,0,3.5-1.47,5.733,5.733,0,0,0,1.656-3.6.532.532,0,0,0-.282-.524,4.834,4.834,0,0,0-2.163-.508,4.969,4.969,0,0,0-3.5,1.47,5.579,5.579,0,0,0-1.171,1.7,5.579,5.579,0,0,0-1.171-1.7,4.969,4.969,0,0,0-3.5-1.47,4.834,4.834,0,0,0-2.163.508.532.532,0,0,0-.282.524,5.733,5.733,0,0,0,1.656,3.6,4.969,4.969,0,0,0,3.5,1.47,4.819,4.819,0,0,0,1.472-.228v3.961A4.2,4.2,0,0,0,4.939,20.9a3.972,3.972,0,0,0-.712-.064A4.069,4.069,0,0,0,1.35,22.045,4.7,4.7,0,0,0,0,25.012a.55.55,0,0,0,.127.4.472.472,0,0,0,.359.17H15.1a.472.472,0,0,0,.359-.17.55.55,0,0,0,.127-.4ZM12.626,10.461a3.912,3.912,0,0,1,1.428.267,4.284,4.284,0,0,1-4.144,3.74A3.912,3.912,0,0,1,8.481,14.2,4.283,4.283,0,0,1,12.626,10.461ZM5.991,14.469a4.284,4.284,0,0,1-4.144-3.74,3.912,3.912,0,0,1,1.428-.267A4.284,4.284,0,0,1,7.418,14.2,3.911,3.911,0,0,1,5.991,14.469ZM1.06,24.532a3.348,3.348,0,0,1,3.168-2.65,3.063,3.063,0,0,1,.8.106.471.471,0,0,0,.523-.215,3.14,3.14,0,0,1,5.357-.106.477.477,0,0,0,.4.216h.047a3.348,3.348,0,0,1,3.168,2.65Z" transform="translate(418.002 4361.543)" fill="#fff"/>
                                    </g>
                                </svg>
                            </div>

                            <div class="absolute top-[21.5rem] left-[9rem] z-2 select-none pointer-events-none js-s-fade-map">
                                <svg class="w-[4.5rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.588 60.627">
                                    <g id="Group_699" data-name="Group 699" transform="translate(-402.706 -4358.277)">
                                        <path id="Icon_fa-solid-location-pin" data-name="Icon fa-solid-location-pin" d="M45.588,22.794c0,10.376-13.89,28.849-19.98,36.47a3.587,3.587,0,0,1-5.627,0C13.89,51.643,0,33.17,0,22.794a22.794,22.794,0,0,1,45.588,0Z" transform="translate(402.706 4358.277)" fill="#a0c344"/>
                                        <path id="sprout_4293447" d="M15.583,25.012a4.7,4.7,0,0,0-1.35-2.968,4.08,4.08,0,0,0-2.691-1.207,4.163,4.163,0,0,0-3.105-1.665V15.289a4.82,4.82,0,0,0,1.472.228,4.969,4.969,0,0,0,3.5-1.47,5.733,5.733,0,0,0,1.656-3.6.532.532,0,0,0-.282-.524,4.834,4.834,0,0,0-2.163-.508,4.969,4.969,0,0,0-3.5,1.47,5.579,5.579,0,0,0-1.171,1.7,5.579,5.579,0,0,0-1.171-1.7,4.969,4.969,0,0,0-3.5-1.47,4.834,4.834,0,0,0-2.163.508.532.532,0,0,0-.282.524,5.733,5.733,0,0,0,1.656,3.6,4.969,4.969,0,0,0,3.5,1.47,4.819,4.819,0,0,0,1.472-.228v3.961A4.2,4.2,0,0,0,4.939,20.9a3.972,3.972,0,0,0-.712-.064A4.069,4.069,0,0,0,1.35,22.045,4.7,4.7,0,0,0,0,25.012a.55.55,0,0,0,.127.4.472.472,0,0,0,.359.17H15.1a.472.472,0,0,0,.359-.17.55.55,0,0,0,.127-.4ZM12.626,10.461a3.912,3.912,0,0,1,1.428.267,4.284,4.284,0,0,1-4.144,3.74A3.912,3.912,0,0,1,8.481,14.2,4.283,4.283,0,0,1,12.626,10.461ZM5.991,14.469a4.284,4.284,0,0,1-4.144-3.74,3.912,3.912,0,0,1,1.428-.267A4.284,4.284,0,0,1,7.418,14.2,3.911,3.911,0,0,1,5.991,14.469ZM1.06,24.532a3.348,3.348,0,0,1,3.168-2.65,3.063,3.063,0,0,1,.8.106.471.471,0,0,0,.523-.215,3.14,3.14,0,0,1,5.357-.106.477.477,0,0,0,.4.216h.047a3.348,3.348,0,0,1,3.168,2.65Z" transform="translate(418.002 4361.543)" fill="#fff"/>
                                    </g>
                                </svg>
                            </div>

                            <div class="absolute top-[21rem] left-[17rem] z-2 select-none pointer-events-none js-s-fade-map">
                                <svg class="w-[4.5rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.588 60.627">
                                    <g id="Group_699" data-name="Group 699" transform="translate(-402.706 -4358.277)">
                                        <path id="Icon_fa-solid-location-pin" data-name="Icon fa-solid-location-pin" d="M45.588,22.794c0,10.376-13.89,28.849-19.98,36.47a3.587,3.587,0,0,1-5.627,0C13.89,51.643,0,33.17,0,22.794a22.794,22.794,0,0,1,45.588,0Z" transform="translate(402.706 4358.277)" fill="#a0c344"/>
                                        <path id="sprout_4293447" d="M15.583,25.012a4.7,4.7,0,0,0-1.35-2.968,4.08,4.08,0,0,0-2.691-1.207,4.163,4.163,0,0,0-3.105-1.665V15.289a4.82,4.82,0,0,0,1.472.228,4.969,4.969,0,0,0,3.5-1.47,5.733,5.733,0,0,0,1.656-3.6.532.532,0,0,0-.282-.524,4.834,4.834,0,0,0-2.163-.508,4.969,4.969,0,0,0-3.5,1.47,5.579,5.579,0,0,0-1.171,1.7,5.579,5.579,0,0,0-1.171-1.7,4.969,4.969,0,0,0-3.5-1.47,4.834,4.834,0,0,0-2.163.508.532.532,0,0,0-.282.524,5.733,5.733,0,0,0,1.656,3.6,4.969,4.969,0,0,0,3.5,1.47,4.819,4.819,0,0,0,1.472-.228v3.961A4.2,4.2,0,0,0,4.939,20.9a3.972,3.972,0,0,0-.712-.064A4.069,4.069,0,0,0,1.35,22.045,4.7,4.7,0,0,0,0,25.012a.55.55,0,0,0,.127.4.472.472,0,0,0,.359.17H15.1a.472.472,0,0,0,.359-.17.55.55,0,0,0,.127-.4ZM12.626,10.461a3.912,3.912,0,0,1,1.428.267,4.284,4.284,0,0,1-4.144,3.74A3.912,3.912,0,0,1,8.481,14.2,4.283,4.283,0,0,1,12.626,10.461ZM5.991,14.469a4.284,4.284,0,0,1-4.144-3.74,3.912,3.912,0,0,1,1.428-.267A4.284,4.284,0,0,1,7.418,14.2,3.911,3.911,0,0,1,5.991,14.469ZM1.06,24.532a3.348,3.348,0,0,1,3.168-2.65,3.063,3.063,0,0,1,.8.106.471.471,0,0,0,.523-.215,3.14,3.14,0,0,1,5.357-.106.477.477,0,0,0,.4.216h.047a3.348,3.348,0,0,1,3.168,2.65Z" transform="translate(418.002 4361.543)" fill="#fff"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="relative w-full s:w-[55rem] flex flex-col items-start gap-y-50 s:gap-y-100 s:pt-100 s:pr-100 js-s-fade">
                        
                        <div v-for="(m, i) in map" :key="i" class="relative flex flex-col items-start gap-y-10 s:gap-y-20">
                            <h2 class="inter font-medium text-[#A0C344] text-60 s:text-100 leading-none tracking-[-4px]">
                                +<span class="js-count" :data-value="m.numero_mapa">0</span>
                            </h2>
                            <p class="inter font-medium text-[#3FADE1] text-30 s:text-40 leading-none tracking-[-1.6px]">{{m.titulo_mapa}}</p>
                            <p class="inter font-normal text-[#25284A] text-20 leading-[1.35] tracking-[-0.96px]">{{ strip_tags($prismic.asHtml( m.texto_mapa),'strong br')  }}</p>
                        </div>

                        <!-- <div class="relative flex flex-col items-start gap-y-10 s:gap-y-20">
                            <h2 class="inter font-medium text-[#A0C344] text-60 s:text-100 leading-none tracking-[-4px]">
                                +<span class="js-count" data-value="1200">0</span>
                            </h2>
                            <p class="inter font-medium text-[#3FADE1] text-30 s:text-40 leading-none tracking-[-1.6px]">plots por año</p>
                            <p class="inter font-normal text-[#25284A] text-20 leading-[1.35] tracking-[-0.96px]">de evaluación en ensayos de Soja y Trigo</p>
                        </div>

                        <div class="relative flex flex-col items-start gap-y-10 s:gap-y-20">
                            <h2 class="inter font-medium text-[#A0C344] text-60 s:text-100 leading-none tracking-[-4px]">
                                +<span class="js-count" data-value="40">0</span>
                            </h2>
                            <p class="inter font-medium text-[#3FADE1] text-30 s:text-40 leading-none tracking-[-1.6px]">localidades</p>
                            <p class="inter font-normal text-[#25284A] text-20 leading-[1.35] tracking-[-0.96px]">de evaluación en ensayos de Soja y Trigo</p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
    props:{
        map:{
            type: Array
        }
    },
    mounted() {
        this.$nextTick(() => {
            // Map pins animation
            gsap.fromTo('.js-s-fade-map', {
                alpha: 0,
                y: '6rem'
            }, {
                alpha: 1,
                y: 0,
                duration: 1,
                ease: 'expo',
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.js-trigger-map',
                    start: 'top bottom-=20%',
                }
            })

            ScrollTrigger.create({
                trigger: '.js-map-container',
                start: 'top top+=200',
                endTrigger: '.js-map-container',
                end: 'bottom top+=300',
                pin: '.js-map',
                pinSpacing: false,
            })

            // Counter animations
            const countElements = document.querySelectorAll('.js-count')
            
            countElements.forEach(el => {
                const value = Number(el.dataset.value)
                
                ScrollTrigger.create({
                    trigger: el,
                    start: 'top bottom-=20%',
                    onEnter: () => {
                        gsap.to(el, {
                            duration: 0.75,
                            innerText: value,
                            snap: 1,
                            ease: 'power1.out',
                            modifiers: {
                                innerText: value => {
                                    // Format 1200 as 1.200
                                    if (value === '1200') {
                                        return parseInt(value).toLocaleString('es-ES')
                                    }
                                    return parseInt(value).toString()
                                }
                            }
                        })
                    }
                })
            })
        })
    },
    methods:{
        strip_tags(html, allowed_tags){
            allowed_tags = allowed_tags.trim()
            
            if (allowed_tags) {
                allowed_tags = allowed_tags.split(/\s+/).map(function(tag){ return "/?" + tag });
                allowed_tags = "(?!" + allowed_tags.join("|") + ")";
            }

            return html.replace(new RegExp("(<" + allowed_tags + ".*?>)", "gi"), "");
        }
    }
}
</script>