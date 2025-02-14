<template>
    <div class="btn flex flex-col items-center font-medium text-16 leading-none tracking-[-0.64px] overflow-hidden cursor-pointer" :class="color ? `is-${color}` : null">
        <div class="btn-text flex py-13 px-40 relative z-2">{{ label }}</div>

        <div class="btn-border absolute top-0 left-0 w-full h-full z-10 rounded-[2.4rem] border-[#3FADE1] border-[0.2rem] border-solid"></div>

        <div class="btn-extralinks absolute top-full left-0 w-full z-2 mt-5 opacity-0">
            <div class="relative flex flex-col items-center justify-center gap-y-20 text-white" v-for="(link, ind) in linkList" :key="ind">
                <a class="uline w-[fit-content] text-center items-center justify-center relative font-normal text-16 leading-none tracking-[-0.64px] w-full h-full my-6" target="_blank" :href="link.link.url">{{link.label_link}}</a>
            </div>
        </div>

        <div class="btn-bg absolute top-0 left-0 w-full bg-[#3FADE1] z-1 rounded-[2.4rem]"></div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'Ver Variedades'
        },
        color: {
            type: String,
            default: 'green'
        }
    },
    data(){
        return {
            linkList:{}
        }
    },
    async fetch () {
       
	    const general_data = await this.$prismic.api.getSingle('general_data')
        console.log('aca',general_data.data.link_list_hb4)
        this.linkList = general_data.data.link_list_hb4
     
    }
}
</script>

<style lang="scss" scoped>
.is-lightblue {
    .btn-text {
        border-color: #3FADE1;
        background-color: transparent;
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        color: #3FADE1;
    }

    .btn-bg {
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        clip-path: inset(0 0 100% 0);
        height: 12.5rem;
    }

    .btn-extralinks {
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        opacity: 0;
        transform: translateY(2rem);
    }
    
    .btn-border {
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
    }

    &:hover {
        .btn-text {
            color: #fff;
        }

        .btn-border {
            transform: scaleX(1.1);
        }

        .btn-bg {
            clip-path: inset(0 0 0 0);
            transform: scaleX(1.1);
        }

        .btn-extralinks {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>