<template>
    <video :src="url" preload="meta" muted loop playsinline></video>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        }
    },

    mounted() {
        this.$lazy?.observe(this.$el)
    },

    destroyed() {
        this.$lazy?.unobserve(this.$el)
    },
}
</script>
