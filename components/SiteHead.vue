<template>
    <header class="sh fixed top-0 left-0 w-full z-[999] js-sh" :class="!showFullNav && `hide`">
        <div class="relative flex items-center justify-between py-20 s:py-35 px-20 s:px-140 bg-white">
            <div class="relative z-[999] w-[13.5rem] s:w-[16rem] h-auto">
                <nuxt-link class="relative w-full h-full" to="/">
                    <img class="relative w-full h-full object-contain" src="/logo.png" alt="Bioceres Logo">
                </nuxt-link>
            </div>

            <div class="relative hidden s:block">
                <ul class="flex items-center gap-x-50 text-[#25284A]">
                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-16 leading-none tracking-[-0.64px] w-full h-full" to="/nuestras-raices">Nuestras Raíces</nuxt-link>
                    </li>

                    <li class="relative">
                        <div class="cultivos-dropdown z-2 cursor-pointer flex items-center relative mont font-medium text-16 leading-none tracking-[-0.64px] w-full h-full">
                            
                            <button class="relative z-4 uline flex items-center mont font-medium text-16 leading-none tracking-[-0.64px] w-full h-full">
                                <span class="inline-block mr-8">
                                    Cultivos
                                </span>
                                <span class="inline-block">
                                    <svg class="cultivos-dropdown-arrow w-[1rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                        <g transform="translate(8) rotate(90)">
                                            <path fill="#3FADE1" id="Shape" class="cls-2" d="M10,1A1,1,0,0,0,8.293.293L5,3.586,1.707.293A1,1,0,1,0,.293,1.707l4,4a1,1,0,0,0,1.415,0l4-4A1,1,0,0,0,10,1Z" transform="translate(2 8) rotate(-90)"/>
                                        </g>
                                    </svg>
                                </span>
                            </button>

                            <div class="w-[20rem] pt-30 absolute top-0 left-1/2 -translate-x-1/2 cultivos-drop-general">
                                <div class=" w-full gap-15 flex flex-col items-center justify-center bg-[#3FADE1] z-1 rounded-[2.5rem] px-15 py-20">
                                    <nuxt-link class="uline w-[fit-content] text-center flex items-center justify-center relative mont font-medium text-16 leading-none tracking-[-0.64px] text-white h-full" to="/cultivos-trigo">Trigo</nuxt-link>
                                    <nuxt-link class="uline w-[fit-content] text-center flex items-center justify-center relative mont font-medium text-16 leading-none tracking-[-0.64px] text-white h-full" to="/cultivos-soja">Soja</nuxt-link>
                                    <nuxt-link class="uline w-[fit-content] text-center flex items-center justify-center relative mont font-medium text-16 leading-none tracking-[-0.64px] text-white h-full" to="/vicia-villosa">Vicia Villosa</nuxt-link>
                                </div>
                            </div>
                            
                        </div>
                    </li>

                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-16 leading-none tracking-[-0.64px] w-full h-full" to="/tecnologia">Tecnología</nuxt-link>
                    </li>

                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-16 leading-none tracking-[-0.64px] w-full h-full" to="/como-comprar">Cómo comprar</nuxt-link>
                    </li>

                    <li class="relative">
                        <ButtonAccess color="lightblue" label="Acceso Generación HB4" />
                    </li>
                </ul>
            </div>

            <div class="hamburger flex s:!hidden" :class="{ 'is-active': isOpen }" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div ref="maskMenu" class="block s:hidden fixed inset-0 bg-white z-[998] invisible">
                <ul class="w-full h-full flex flex-col items-center justify-center gap-y-50 text-[#25284A]">
                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-26 leading-none tracking-[-0.64px] w-full h-full" to="/nuestras-raices">Nuestras Raíces</nuxt-link>
                    </li>

                    <li class="relative w-[80%]">
                        <div class="uline relative mont font-medium text-26 leading-none tracking-[-0.64px] w-full justify-center">Cultivos</div>
                        <div class=" w-full gap-15 flex flex-col items-center justify-center bg-[#3FADE1] z-1 rounded-[1.5rem] px-15 py-20 mt-10">
                            <nuxt-link class="uline w-[fit-content] text-center flex items-center justify-center relative mont font-medium text-20 py-6 leading-none tracking-[-0.64px] text-white h-full" to="/cultivos-trigo">Trigo</nuxt-link>
                            <nuxt-link class="uline w-[fit-content] text-center flex items-center justify-center relative mont font-medium text-20 py-6 leading-none tracking-[-0.64px] text-white h-full" to="/cultivos-soja">Soja</nuxt-link>
                            <nuxt-link class="uline w-[fit-content] text-center flex items-center justify-center relative mont font-medium text-20 py-6 leading-none tracking-[-0.64px] text-white h-full" to="/vicia-villosa">Vicia Villosa</nuxt-link>
                        </div>
                    </li>

                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-26 leading-none tracking-[-0.64px] w-full h-full" to="/tecnologia">Tecnología</nuxt-link>
                    </li>

                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-26 leading-none tracking-[-0.64px] w-full h-full" to="/como-comprar">Cómo comprar</nuxt-link>
                    </li>

                    <li class="relative">
                        <ButtonAccess color="lightblue" label="Acceso Generación HB4" />
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import gsap from 'gsap'

export default {
    props:{
        showFullNav:{
            type: Boolean,
            default:true
        }
    },
    data() {
        return {
            isOpen: false
        }
    },

    computed: {
        hasMouse() {
            return this.$store.state.app.features.hasMouse
        },
    },

    mounted() {
        this.$nuxt.$on('menu-close', () => {
            this.closeMenu()
            this.closeMaskMenu()
        })
    },

    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
            document.body.style.overflow = this.isOpen ? 'hidden' : 'initial'

            this.isOpen ? this.openMaskMenu() : this.closeMaskMenu()
        },

        closeMenu() {
            this.isOpen = false
            document.body.style.overflow = 'initial'
        },

        openMaskMenu() {
            gsap.fromTo(this.$refs.maskMenu, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 0.5,
                ease: 'power1.out'
            })
        },

        closeMaskMenu() {
            gsap.fromTo(this.$refs.maskMenu, {
                autoAlpha: 1
            }, {
                autoAlpha: 0,
                duration: 0.5,
                ease: 'power1.out'
            })
        }
    },

    destroyed() {
        document.body.style.overflow = 'initial'
    }
}
</script>

<style lang="scss" scoped>
.sh {
    transition: ease-in .4s;
    &.hide{
        transform: translateY(-100%);
    }
    &-time {

        &__dots {
            animation: blink 1s infinite;
        }
    }

    &-link {

        &:before {
            content: '';
            position: absolute;
            bottom: -.2em;
            left: 0;
            right: 0;
            height: 0.05em;
            min-height: 1px;
            background-color: currentColor;
            transition: transform .75s $ExpoEaseOut;
            transform-origin: right;
            transform: scaleX(0);
        }

        &.nuxt-link-exact-active,
        &.is-active {

            &:before {
                transform-origin: left;
                transform: scaleX(1);
            }
        }
    }

}

@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.menu-toggle {

    &__text {
        transition: transform .75s $ExpoEaseOut;

        .is-active & {
            transform: translateY(-100%);
        }
    }
}

.dm-toggle {

    &__back {
        background-color: #222;
        clip-path: inset(.2rem .2rem .2rem 50% round 1.6rem);
        transition: clip-path 1s $ExpoEaseOut;

        .dm-toggle:hover & {
            clip-path: inset(0rem 0rem 0rem 0% round 1.6rem);
        }

        .is-dark & {
            background-color: #555;
        }
    }

    &__ball {
        transition: transform 1s $ExpoEaseOut;

        .is-dark .dm-toggle:hover & {
            transform: translateX(-100%);
        }
    }
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
}

.hamburger span {
  width: 2rem;
  height: 0.25rem;
  background-color: #3FADE1;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.hamburger.is-active span:first-child {
  transform: rotate(45deg);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
  transform: rotate(-45deg);
}

.sh {
    box-shadow: 0 0 30px rgba(0, 0, 0, .1);
}

.cultivos-drop-general {
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
}

.cultivos-dropdown-arrow {
    transition: all 0.3s;
}

.cultivos-dropdown:hover .cultivos-drop-general {
    opacity: 1;
    pointer-events: all;
}

.cultivos-dropdown:hover .cultivos-dropdown-arrow {
    transform: rotate(180deg);
}
</style>