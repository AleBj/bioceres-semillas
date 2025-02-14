<template>
    <div class="relative">
        <div class="relative py-100 s:py-115 bg-[#fafaf3]">
            <div class="relative px-20 s:px-360">
                <div class="relative pb-50 s:pb-60">
                    <div class="relative pb-20 s:pb-30">
                        <h2 class="mont font-semibold text-40 s:text-45 leading-none tracking-[-1.8px] text-center js-s-fade">
                            Historias reales, <br>
                            <span class="mont font-bold text-[#A0C344]">
                                de clientes reales.
                            </span>
                        </h2>
                    </div>

                    <div class="relative max-w-[30rem] s:max-w-[70rem] mx-auto js-s-fade">
                        <p class="inter font-normal text-center text-20 s:text-26 leading-[1.35] tracking-[-1.04px]">
                            Testimonios y casos de éxito de <span class="inter font-semibold">Trigo TRAFUL HB4</span> en suelos 
                            donde cada semilla importa. <span class="inter font-semibold">Descubrí las experiencias en 
                            primera persona, de nuestros clientes:</span>
                        </p>
                    </div>
                </div>

                <div class="relative grid grid-cols-1 s:grid-cols-3 s:gap-x-30 gap-y-50 s:gap-y-0 px-50 s:px-70 js-s-fade">
                    <div 
                        v-for="(video, index) in videos" 
                        :key="index"
                        class="card-video relative w-full h-[30rem] rounded-[5rem] overflow-hidden bg-white"
                        @click="openModal(index)"
                    >
                        <div 
                            class="card-video-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5"
                        >
                            <img class="w-full h-full object-contain" src="/icon-play-circle.png" alt="Icon Play">
                        </div>
                        
                        <figure class="relative w-full h-full">
                            <img 
                                class="w-full h-full object-cover" 
                                :src="video.thumbnail"
                                :alt="video.title"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <div ref="modalIframe" class="fixed top-0 left-0 w-full h-full bg-black-always bg-opacity-50 z-[9999]" :class="{ 'invisible': !isModalOpen }">
            <div class="relative w-full h-full flex items-center justify-center">
                <div class="relative w-[80%] s:w-[60%] h-[25rem] s:h-[60rem]">
                    <iframe 
                        class="w-full h-full" 
                        :src="currentVideoUrl" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    ></iframe>
                </div>
            </div>

            <div class="absolute top-[15rem] s:top-80 right-[4rem] s:right-120">
                <button @click="closeModal" class="btn-close-frame cursor-pointer w-[6rem] h-[6rem] relative flex items-center justify-center bg-[#3FADE1] rounded-full overflow-hidden" type="button">
                    <svg class="btn-close-frame-svg w-[1.65rem] s:w-[1.4rem] h-auto" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L12.9602 12.9602" stroke="#F9F7F5" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M1 12.9602L12.9602 1" stroke="#F9F7F5" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videos: [
                { 
                    youtubeId: '383__4ZoNVc',
                    thumbnail: '/detial-intro-opts.png',
                    title: 'Video Testimonio 1'
                },
                { 
                    youtubeId: '383__4ZoNVc',
                    thumbnail: '/detial-intro-opts.png',
                    title: 'Video Testimonio 2'
                },
                { 
                    youtubeId: '383__4ZoNVc',
                    thumbnail: '/detial-intro-opts.png',
                    title: 'Video Testimonio 3'
                }
            ],
            isModalOpen: false,
            currentVideoId: null
        }
    },
    computed: {
        currentVideoUrl() {
            if (!this.currentVideoId) return '';
            return `https://www.youtube.com/embed/${this.currentVideoId}?autoplay=1`;
        }
    },
    methods: {
        openModal(index) {
            this.currentVideoId = this.videos[index].youtubeId;
            this.isModalOpen = true;
            document.body.style.overflow = 'hidden'; 
        },
        closeModal() {
            this.isModalOpen = false;
            this.currentVideoId = null;
            document.body.style.overflow = '';
        }
    }
}
</script>

<style lang="scss" scoped>
.card-video {
    cursor: pointer;
    transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
    
    .card-video-icon {
        transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
    }

    &:hover {
        margin-top: -1.5rem;

        .card-video-icon {
            transform: translate(-50%, -50%) scale(1.1);
        }
    }
}
</style>