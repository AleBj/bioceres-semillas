<template>
    <div v-if="active" class="fixed inset-0 z-[9999] site-grid pointer-events-none opacity-10">
        <div v-for="i in 12" :key="i" class="col-span-1 grid-col"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: false,
        }
    },

    mounted() {
        window.addEventListener('keydown', e => {
            if (e.code == 'KeyG') {
                this.active = !this.active
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.grid-col {
    background-color: red;
}
</style>