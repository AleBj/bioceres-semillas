<template>
    <div class="relative z-10">
        <div class="relative w-full h-[50rem]">
            <div class="relative w-full h-full flex items-center">
                <div class="absolute inset-0">
                    <figure class="block s:hidden relative w-full h-full">
                        <img class="relative w-full h-full object-cover" src="/hero-home.jpg" alt="Discover">
                    </figure>
                    <video class="hidden s:block relative w-full h-full object-cover"             
                        :src="videoHero.url" 
                        alt="Hero Cultivos"
                        autoplay
                        playsinline
                        muted
                        loop
                    >
                    </video>
                </div>

                <div class="relative px-20 s:px-240">
                    <h1 class="relative mont flex flex-col items-start text-white js-t-fades">
                        <span class="font-semibold inline-flex text-30 s:text-45 leading-none tracking-[-2.4px]">Soluciones para tus</span>
                        <span class="font-bold inline-flex text-40 s:text-60 leading-none tracking-[-2.4px]">Cultivos de {{type}}</span>
                    </h1>
                </div>

                <div class="px-20 s:px-240 w-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div class="relative w-full gap-x-10 flex flex-col s:flex-row items-center justify-center py-50 text-white bg-[#3FADE1] rounded-[2.5rem] s:rounded-[5rem] overflow-hidden js-t-fades">
                        <div class="relative pb-10 s:pb-0">
                            <p v-if="type == 'Trigo'" class="mont font-medium text-20 leading-none tracking-[-0.8px]">Seleccioná un ciclo</p>
                            <p v-else class="mont font-medium text-20 leading-none tracking-[-0.8px]">Seleccioná madurez</p>
                        </div>

                        <div class="relative text-20 leading-none tracking-[-0.8px]">
                            <div class="relative">
                                <select                           
                                    v-model="selectedCategory"
                                    @change="filterProducts"
                                    class="select-input text-center mont font-medium relative py-4 px-50 bg-transparent appearance-none cursor-pointer"
                                >
                                    <option value="all">Ver todos</option>
                                    <option v-for="(op,i) in options" :key="i" :value="op">{{ op }}</option>
                                </select>
                                <div class="select-line"></div>
                            </div>
                            <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-white">
                                    <path d="m6 9 6 6 6-6"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        options:{
            type: Array
        },
        type:{
            type: String
        },
        videoHero:{
            type: Object
        }
    },
    data() {
        return {
            selectedCategory: 'all'
        }
    },
    created() {
        this.filterProducts()
    },
    methods: {
        filterProducts() {
            this.$emit('category-changed', this.selectedCategory)
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
</style>