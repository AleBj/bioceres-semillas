<template>
  <div class="relative w-full h-screen">
    <div ref="sliderContainer" class="slider-container h-full">
      <div 
        v-for="(slide, index) in sliders.items" 
        :key="index"
        class="slide absolute w-full h-full"
        :class="{ active: currentSlide === index }"
      >
        <figure class="relative w-full h-full">
          <video v-if="slide.background_video && slide.background_video.url" class="hidden s:block relative w-full h-full object-cover"             
            :src="slide.background_video.url" 
            :alt="slide.background_video.alt"
            autoplay
            playsinline
            muted
            loop
          >
          </video>
          <img 
            v-else
            :src="slide.background_image.url" 
            :alt="slide.background_image.alt"
            class="block relative w-full h-full object-cover"
          >
        </figure>

        <div class="px-20 s:px-0 w-full s:w-[inherit] flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 class="mont text-center s:text-left font-semibold text-50 leading-none tracking-[-2px] js-t-fades">
            {{ slide.title_slider }} 
            <strong class="mont font-extrabold relative overflow-hidden">
              <div class="word-container" style="max-width:200px">
                <span 
                  v-if="isFirstSlideRotation" 
                  class="word-animation"
                  :class="{ 'animate-out': wordChanged }"
                >
                  {{ rotatingWords[currentRotatingWord] }}
                </span>
                <span v-else>{{ slide.strong_text_slider }}</span>
              </div>
            </strong>
          </h1>

          <div class="relative mt-40 js-t-fades">
            <template v-if="slide.link_boton.link_type=='Web'">
              <ButtonArrow
                v-if="slide.cta_boton && slide.link_boton.url"
                :label="slide.cta_boton"
                :href="slide.link_boton.url"
                :tipo="`external`"
              />
            </template>
            <template v-if="slide.link_boton.link_type=='Document'">
              <ButtonArrow
                v-if="slide.cta_boton"
                :label="slide.cta_boton"
                :href="`/${slide.link_boton.slug}`"
              />
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-8 s:gap-4 z-20 pointer-events-none z-[11]">
      <button
        v-for="(_, index) in sliders.items"
        :key="index"
        @click="goToSlide(index)"
        class="dot-button w-[1.2rem] h-[1.2rem] rounded-full transition-all duration-500 pointer-events-auto"
        :class="currentSlide === index ? 'dot-active' : 'dot-inactive'"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    sliders: {
        type: Object
    },
  },
  data() {
    return {
      currentSlide: 0,
      currentRotatingWord: 0,
      isFirstSlideRotation: true,
      wordChanged: false,
      rotatingWords: ['negocio', 'cultivo', 'rentabilidad', 'comunidad'],
      rotatingInterval: null,
      slides: [
        {
          image: '/hero-home.jpg',
          video: '/hero-video-1.mp4',
          alt: 'Bioceres',
          title: 'Hagamos que crezca tu',
          strongText: 'negocio'
        },
        {
          image: '/hero-home.jpg',
          video: '/hero-video-3.mp4',
          alt: 'Bioceres',
          title: 'Hagamos que crezca tu',
          strongText: 'cultivo'
        },
        {
          image: '/hero-home.jpg',
          video: '/hero-video-1.mp4',
          alt: 'Bioceres',
          title: 'Hagamos que crezca tu',
          strongText: 'rentabilidad'
        },
        {
          image: '/hero-home.jpg',
          video: '/hero-video-3.mp4',
          alt: 'Bioceres',
          title: 'Hagamos que crezca tu',
          strongText: 'comunidad'
        }
      ],
      autoplayInterval: null
    }
  },

  mounted() {
    this.startFirstSlideRotation()
    console.log(this.sliders[0])
  },

  beforeDestroy() {
    this.stopAutoplay()
    if (this.rotatingInterval) clearInterval(this.rotatingInterval)
  },

  methods: {
    startFirstSlideRotation() {
      let animationInProgress = false;
      
      this.rotatingInterval = setInterval(() => {
        if (animationInProgress) return;
        
        animationInProgress = true;
        this.wordChanged = true;
        
        setTimeout(() => {
          this.currentRotatingWord = (this.currentRotatingWord + 1) % this.rotatingWords.length;
          this.wordChanged = false;
          animationInProgress = false;
        }, 500);
        
      }, 2000);

      setTimeout(() => {
        clearInterval(this.rotatingInterval);
        this.isFirstSlideRotation = false;
        this.startAutoplay();
      }, 9000);
    },

    goToSlide(index) {
      if (!this.isFirstSlideRotation) {
        this.currentSlide = index
        this.resetAutoplay()
      }
    },

    nextSlide() {

      this.currentSlide = this.currentSlide == (this.sliders.items.length - 1) ? 0  : this.currentSlide + 1
      console.log(this.currentSlide)
    },

    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide()
      }, 7000)
    },

    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval)
      }
    },

    resetAutoplay() {
      this.stopAutoplay()
      this.startAutoplay()
    }
  }
}
</script>

<style scoped>
.slide {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
  z-index: 1;
}

.slide.active {
  opacity: 1;
  pointer-events: auto !important;
  z-index: 10;
}

.dot-button {
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
}

.dot-active {
  background-color: rgb(75, 169, 255);
  transform: scale(1);
}

.dot-inactive {
  background-color: rgba(128, 128, 128, 0.6);
  transform: scale(0.85);
}

.dot-inactive:hover {
  background-color: rgba(128, 128, 128, 0.8);
}

.word-container {
  position: relative;
  display: inline-block;
  min-width: 200px;
}

.word-animation:first-child {
  position: relative !important;
}

.word-animation {
  display: inline-block;
  opacity: 1;
  transform: translateY(0);
  position: absolute;
  top: 0;
  left: 0;
  animation: slideInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.word-animation.animate-out {
  animation: slideOutUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes slideOutUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>