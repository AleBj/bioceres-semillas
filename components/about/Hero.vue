<template>
    <div class="relative">
        <div class="relative overflow-hidden">
            <div class="relative overflow-hidden">
                <section class="relative h-screen s:h-[150dvh]">
                    <div class="absolute inset-0 z-1">
                        <figure class="relative w-full h-full">
                            <img class="block s:hidden relative w-full h-full object-cover" src="/detail-hero-mask.jpg" alt="Product Detail">
                            <video class="hidden s:block relative w-full h-full object-cover" src="/fondo_about.mp4" autoplay muted playsinline></video>
                        </figure>
                    </div>
                    
                    <div class="relative w-full h-full s:h-screen flex items-center">
                        <div class="relative mt-[-12rem] s:mt-0 pl-20 s:pl-240 z-3">
                            <div class="relative pb-50 js-t-fades">
                                <h1 v-html=" strip_tags($prismic.asHtml(field.titulo),'strong br') " 
                                class="mont font-medium relative text-[#3FADE1] text-50 leading-[1.1] tracking-[-2px] strong-bolder">
                                </h1>
                                <!-- <span class="block">Todo empieza</span>
                                    <span class="block">con <strong class="mont font-extrabold">una semilla</strong></span> -->
                            </div>

                            <div class="relative js-t-fades">
                                <button @click="openModalIframe" class="btn is-lightblueTransparent relative h-[4.8rem] flex items-center inter font-medium text-16 leading-none tracking-[-0.64px]" type="button">
                                    <span class="btn-text flex items-center justify-center h-full px-40 rounded-[2.4rem] border-[0.2rem] border-solid">Mirá nuestro video</span>
                                    <span class="btn-arrow flex items-center justify-center w-[4.8rem] h-full bg-transparent rounded-full border-[0.2rem] border-solid border-[#B5DC4D]">
                                        <svg class="w-[1.8rem] h-auto" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.49967 6.76172L16.0243 6.76243M1.49967 6.76172L6.36173 11.6238M1.49967 6.76172L6.36173 1.90107" stroke="#B5DC4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="block s:hidden absolute top-[58rem] s:top-180 -right-60 z-10 pointer-events-none">
                        <figure class="w-[40rem] s:w-[83rem] h-[25rem] s:h-[66rem] js-t-fades">
                            <img class="w-full h-full object-contain select-none pointer-events-none" src="/about-hand.png" alt="Bioceres Nosotros">
                        </figure>

                        <figure class="go-down-up absolute top-[-5rem] s:top-[0rem] left-[10rem] s:left-[25rem] w-[3.5rem] s:w-[4.5rem] h-[3.5rem] s:h-[4.5rem]">
                            <img class="w-full h-full object-contain select-none pointer-events-none" src="/bean.png" alt="Bioceres Nosotros">
                        </figure>
                    </div>
                </section>

                <section class="relative px-20 s:px-240 pb-100">
                    <div class="relative pt-100 s:pt-170 pb-50 s:pb-100 flex flex-col s:flex-row items-center justify-between">
                        <div class="relative pb-30 s:pb-0 max-w-full s:max-w-[50rem] w-full">
                            <h2 class="mont font-semibold text-[#A0C344] text-45 leading-none tracking-[-1.8px] pb-20 js-s-lines strong-bolder" v-html="strip_tags($prismic.asHtml(field.intro_titulo),'strong br')"></h2>
                            <div class="inter font-normal text-[#25284A] text-18 leading-[1.35] tracking-[-0.72px] js-s-fade strong-bolder">
                                <prismic-rich-text
                                    :field="field.intro_texto"
                                />
                            </div>
                        </div>

                        <div class="relative block s:hidden js-s-fade">
                            <svg class="w-full s:w-[37rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373.529 441.332">
                                <path d="M128.4,131.366c43.511-17.167,96.437-20.743,179.291-60.795l-2.388,173.8c.954,44.345-21.456,83.921-55.668,107.165C218.4,368.11,116.477,389.331,117.19,292.653c.479-73.314,110.624-111.816,110.624-111.816S77.855,171.418,69.866,309.224C35.532,248.667,49.482,162.479,128.4,131.366M357.392,0l-.355.238C274.784,38.264,188.12,53.526,110.518,82.371-70.2,149.484-16.556,422.352,179.181,425.332c112.649.355,185.005-97.87,177.616-194.19.479,5.243.717,10.49.717,15.975V0Z" transform="translate(8.016 8)" fill="#f9f9f9" stroke="#fff" stroke-width="16"/>
                            </svg>
                        </div>
                    </div>
                </section>
            </div>

            <div ref="modalIframe" class="fixed top-0 left-0 w-full h-full bg-black-always bg-opacity-50 z-[9999] invisible">
                <div class="relative w-full h-full flex items-center justify-center">
                    <div class="relative w-[80%] s:w-[60%] h-[25rem] s:h-[60rem]">
                      
                      <prismic-embed class="iframe-video w-full h-full" :field="field.nuestro_video" />

                    </div>
                </div>

                <div class="absolute top-[15rem] s:top-80 right-[4rem] s:right-120">
                    <button @click="closeModalIframe" class="btn-close-frame cursor-pointer w-[6rem] h-[6rem] relative flex items-center justify-center bg-[#3FADE1] rounded-full overflow-hidden" type="button">
                        <svg class="btn-close-frame-svg w-[1.65rem] s:w-[1.4rem] h-auto" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L12.9602 12.9602" stroke="#F9F7F5" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M1 12.9602L12.9602 1" stroke="#F9F7F5" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Pinned product bag overlay -->
            <div ref="pinnedOverlay" class="hidden s:block absolute top-0 s:right-[-7rem] h-full z-10">
                <div ref="pinnedContent" class="relative flex items-center justify-center">
                    <figure class="relative top-150 w-[40rem] s:w-[83rem] h-[25rem] s:h-[66rem] js-t-fades">
                        <img class="w-full h-full object-contain select-none pointer-events-none" src="/about-hand.png" alt="Bioceres Nosotros">
                    </figure>

                    <figure 
                        ref="seed"
                        class="absolute top-[-5rem] s:top-[20rem] left-[10rem] s:left-[24rem] w-[3.5rem] s:w-[3.8rem] h-[3.5rem] s:h-[3.8rem]">
                        <img class="go-down-up w-full h-full object-contain select-none pointer-events-none" 
                             src="/bean.png" 
                             alt="Bioceres Nosotros">
                    </figure>
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
        field:{
            type: Object
        }
    },
    data() {
        return {
            windowWidth: 0,
            scrollTrigger: null,
            seedAnimation: null
        }
    },

    mounted() {
        this.windowWidth = window.innerWidth
        this.initScrollTrigger()
        window.addEventListener('resize', this.handleResize)
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
        if (this.scrollTrigger) {
            this.scrollTrigger.kill()
        }
        if (this.seedAnimation) {
            this.seedAnimation.kill()
        }
    },

    methods: {
        initScrollTrigger() {
            if (window.innerWidth < 900) return

            // Pin the overlay
            this.scrollTrigger = ScrollTrigger.create({
                trigger: this.$refs.pinnedOverlay,
                start: 'top top',
                end: 'bottom bottom',
                pin: this.$refs.pinnedContent,
                pinSpacing: false
            })

            // Animate the seed
            const { translateX, translateY, scale } = this.getResponsiveValues()
            
            this.seedAnimation = gsap.to(this.$refs.seed, {
                scrollTrigger: {
                    trigger: this.$refs.pinnedOverlay,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.3,
                },
                x: translateX,
                y: translateY,
                ease: 'none'
            })
        },

        handleResize() {
            this.windowWidth = window.innerWidth
            
            // Kill existing animations
            if (this.scrollTrigger) {
                this.scrollTrigger.kill()
            }
            if (this.seedAnimation) {
                this.seedAnimation.kill()
            }

            // Reinitialize with new dimensions
            this.initScrollTrigger()
        },

        getResponsiveValues() {
            const isMobile = this.windowWidth < 768
            
            return {
                translateX: isMobile ? -15 : 10,
                translateY: isMobile ? 150 : 200,
                scale: isMobile ? 1.3 : 1.4
            }
        },

        openModalIframe() {
            gsap.fromTo(this.$refs.modalIframe, {
                autoAlpha: 0,
            }, {
                autoAlpha: 1,
                duration: 0.5,
                ease: 'power1.out'
            })
        },

        closeModalIframe() {
            gsap.fromTo(this.$refs.modalIframe, {
                autoAlpha: 1,
            }, {
                autoAlpha: 0,
                duration: 0.5,
                ease: 'power1.out'
            })
        },

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
<style lang="scss">
.iframe-video{
    position: relative;
    & iframe{
        position: absolute;
        min-width: 100%;
        height: auto;
        aspect-ratio: 16/9;
    }
}
</style>
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

// .go-down-up { 
//     animation: go-down-up 1.85s infinite;
// }

// @keyframes go-down-up {
//     0%, 100% {
//         transform: translateY(0);
//     }
//     50% {
//         transform: translateY(1rem);
//     }
// }

.is-lightblueTransparent {
    .btn-text {
        border-color: #3FADE1;
        background-color: transparent;
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        color: #3FADE1;
    }

    .btn-arrow {
        border-color: #3FADE1;
        transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);

        svg {
            path {
                transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
                stroke: #3FADE1;
            }
        }
    }

    &:hover {
        .btn-text {
            padding: 0rem 5.2rem;
            background-color: #3FADE1;
            color: #fff;
        }

        .btn-arrow {
            border-color: #B5DC4D;
            background-color: #B5DC4D;
            transform: rotate(180deg);

            svg {
                path {
                    stroke: #fff
                }
            }
        }
    }
}

.btn-close-frame {
    .btn-close-frame-svg {
        transition: all .3s;
    }
}

.btn-close-frame:hover {
    .btn-close-frame-svg {
        transform: scale(1.15) rotate(180deg); 
    }
}
</style>