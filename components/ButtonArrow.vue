<template>    
    <button v-if="href == ''" class="btn relative h-[4.8rem] flex items-center inter font-medium text-16 leading-none tracking-[-0.64px]" :class="`is-${color}`">
        <span class="btn-text flex items-center justify-center h-full px-40 rounded-[2.4rem] border-[0.2rem] border-solid">{{ label }}</span>
        <span class="btn-arrow flex items-center justify-center w-[4.8rem] h-full bg-transparent rounded-full border-[0.2rem] border-solid border-[#B5DC4D]">
            <svg class="w-[1.8rem] h-auto" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.49967 6.76172L16.0243 6.76243M1.49967 6.76172L6.36173 11.6238M1.49967 6.76172L6.36173 1.90107" stroke="#B5DC4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </button>
    <a v-else-if="tipo == 'external'" :href="href" target="_blank" class="btn relative h-[4.8rem] flex items-center inter font-medium text-16 leading-none tracking-[-0.64px]" :class="`is-${color}`">
        <span class="btn-text flex items-center justify-center h-full px-40 rounded-[2.4rem] border-[0.2rem] border-solid">{{ label }}</span>
        <span class="btn-arrow flex items-center justify-center w-[4.8rem] h-full bg-transparent rounded-full border-[0.2rem] border-solid border-[#B5DC4D]">
            <svg class="w-[1.8rem] h-auto" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.49967 6.76172L16.0243 6.76243M1.49967 6.76172L6.36173 11.6238M1.49967 6.76172L6.36173 1.90107" stroke="#B5DC4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </a>
    <nuxt-link v-else :to="href" class="btn relative h-[4.8rem] flex items-center inter font-medium text-16 leading-none tracking-[-0.64px]" :class="`is-${color}`">
        <span class="btn-text flex items-center justify-center h-full px-40 rounded-[2.4rem] border-[0.2rem] border-solid">{{ label }}</span>
        <span class="btn-arrow flex items-center justify-center w-[4.8rem] h-full bg-transparent rounded-full border-[0.2rem] border-solid border-[#B5DC4D]">
            <svg class="w-[1.8rem] h-auto" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.49967 6.76172L16.0243 6.76243M1.49967 6.76172L6.36173 11.6238M1.49967 6.76172L6.36173 1.90107" stroke="#B5DC4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'Descubrí cómo acá'
        },
        color: {
            type: String,
            default: 'green'
        },
        href: {
            type: String,
            default: ''
        },
        tipo:{
            type: String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>
.is-green {
    .btn-text {
        border-color: #B5DC4D;
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
    }

    .btn-arrow {
        transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
    }

    &:hover {
        .btn-text {
            background-color: #B5DC4D;
            padding: 0rem 5.2rem;
        }

        .btn-arrow {
            border-color: #fff;
            background-color: #fff;
            transform: rotate(180deg);
        }
    }
}

.is-white {
    .btn-text {
        border-color: #fff;
        background-color: #fff;
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        color: #B5DC4D;
    }

    .btn-arrow {
        border-color: #fff;
        background-color: #fff;
        transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);

        svg {
            path {
                transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
            }
        }
    }

    &:hover {
        .btn-text {
            padding: 0rem 5.2rem;
        }

        .btn-arrow {
            border-color: #3FADE1;
            background-color: #3FADE1;
            transform: rotate(180deg);

            svg {
                path {
                    stroke: #fff
                }
            }
        }
    }
}

.is-lightblue {
    .btn-text {
        border-color: #3FADE1;
        background-color: #fff;
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

.is-transparent {
    .btn-text {
        border-color: #fff;
        background-color: transparent;
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        color: white;
    }

    .btn-arrow {
        border-color: #fff;
        background-color: transparent;
        transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);

        svg {
            path {
                transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
                stroke: #fff;
            }
        }
    }

    &:hover {
        .btn-text {
            padding: 0rem 5.2rem;
            border-color: #3FADE1;
            background-color: #3FADE1;
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
</style>