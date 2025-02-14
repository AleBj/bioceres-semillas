<template>
    <button class="btn flex items-center inter font-medium text-16 leading-none tracking-[-0.64px]" :class="color ? `is-${color}` : null">
        <span class="btn-text flex py-13 px-40 rounded-[2.4rem] border-[0.2rem] border-solid border-[##FFFFFF]">{{ label }}</span>
    </button>
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
    }
}
</script>

<style lang="scss" scoped>
.is-lightblue {
    .btn-text {
        border-color: #3FADE1;
        background-color: #fff;
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        color: #3FADE1;
    }

    &:hover {
        .btn-text {
            padding-left: 4.5rem;
            padding-right: 4.5rem;
            background-color: #3FADE1;
            color: #fff;
        }
    }
}
</style>