<template>
    <div class="relative">
        <div class="relative pt-200 s:pt-180 pb-100 s:pb-120 px-20 s:px-140">
            <div class="relative grid grid-cols-1 s:grid-cols-4 gap-100 s:gap-16">
                <nuxt-link 
                    v-for="product in filteredProducts" 
                    :key="product.id"
                    :to="`/${product.type}/${product.uid}/`"
                    class="card-product relative w-full h-[40rem] text-[#25284A] js-t-fades mb-60"
                >
                    <div class="absolute top-[-4rem] left-1/2 -translate-x-1/2 w-[14.5rem] h-[30rem]">
                        <figure class="relative w-full h-full">
                            <img class="relative w-full h-full object-contain" :src="product.data.imagen.url" :alt="product.data.imagen.alt">
                        </figure>
                    </div>

                    <div class="relative py-35 px-20 w-full h-full flex flex-col items-center justify-end">
                        <h4 class="mont relative pb-15 font-semibold text-20 leading-none tracking-[-0.48px]">{{ product.data.nombre }}</h4>
                        <div class="relative">
                            <Button color="lightblue" label="Ver Más" />
                        </div>
                    </div>

                    <div v-if="product.data.nuevo" class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-[2.5rem] py-10 s:py-5 px-15 s:px-15 text-white text-11 leading-none tracking-[0.24px] uppercase bg-[#A0C344] pointer-events-none">
                        Nuevo
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type: String,
            default: 'all'
        },
        posts:{
            type: Array,
        },
        type:{
            type: String,
        }
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Traful HB4®',
                    image: 'bags.png',
                    link: '/producto-detalle',
                    category: 'Trigo',
                    isNew: false
                },
                {
                    id: 2,
                    name: 'Traful HB4®',
                    image: 'bags.png',
                    link: '/producto-detalle',
                    category: 'Trigo',
                    isNew: true
                },
                {
                    id: 3,
                    name: 'SOJA ®',
                    image: 'Bolsa-soja.png',
                    link: '/producto-detalle',
                    category: 'Soja',
                    isNew: false
                },
                {
                    id: 4,
                    name: 'VICIA ®',
                    image: 'bolsas-VICIA.png',
                    link: '/vicia-villosa',
                    category: 'Vicia',
                    isNew: false
                }
            ]
        }
    },
    computed: {
        filteredProducts() {
            if (this.category === 'all') {
                return this.posts
            }
            if(this.type == 'trigo'){
                return this.posts.filter(product => product.data.ciclo === this.category)
            }else{
                return this.posts.filter(product => product.data.grupo_madurez === this.category)
            }
        }
    }
}
</script>

<style lang="scss">
.card-product {
    cursor: pointer;
    background: #FFFFFF;
    box-shadow: 0px 3.3rem 6.6rem #00000012;
    border-radius: 5rem;
    transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
    
    .btn-text {
        transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
    }

    &:hover {
        margin-top: -2.5rem;

        .btn-text {
            padding-left: 5.2rem;
            padding-right: 5.2rem;
            background-color: #3FADE1;
            color: #fff;
        }
    }
}
</style>