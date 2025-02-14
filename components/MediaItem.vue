<template>
    <div>
        <slot></slot>
        <Video v-if="video?.url" :url="video.url" class="media absolute object-cover" />
        <LazyPicture v-else-if="image" :image="image" :aspect="false" class="!absolute inset-0" />
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            required: false
        },
        video: {
            type: Object,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
.media {
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    max-width: calc(100% + 2px);
}
</style>