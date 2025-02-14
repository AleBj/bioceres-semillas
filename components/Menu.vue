<template>
    <aside class="mmenu fixed inset-0 bg-black text-white overflow-hidden z-[998]">
        <div class="absolute inset-0 flex items-center w-full js-menu-mask">
            <ul class="flex flex-col items-center w-full">
                <li v-for="(item, i) in items" :key="i" class="flex my-6 w-full">
                    <nuxt-link :to="item.link" class="mmenu-link flex justify-center h2 text-center w-full">
                        <div class="relative leading-[1.05]">
                            <div class="overflow-hidden">
                                <div class="js-menu-slide">
                                    {{ item.title }}
                                </div>
                            </div>
                            <div v-if="item.link === '/projects'"
                                class="absolute top-[-.4em] left-full text-18 font-normal pl-4 overflow-hidden">
                                <div class="js-menu-total">{{ total }}</div>
                            </div>
                        </div>
                    </nuxt-link>
                </li>
            </ul>
            <ul class="absolute bottom-0 left-0 w-full flex gap-x-25 justify-center pb-35 z-2">
                <li v-for="(item, i) in socials" :key="i" class="">
                    <a :href="item.to" target="_blank" rel="noreferrer" class="inline-flex overflow-hidden">
                        <div class="js-menu-social">{{ item.label }}</div>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'Home',
                    link: '/'
                },
                {
                    title: 'Projects',
                    link: '/projects'
                },
                {
                    title: 'Approach',
                    link: '/approach'
                },
                {
                    title: 'About',
                    link: '/about'
                },
                {
                    title: 'Contact',
                    link: '/contact'
                },
            ],
        }
    },

    computed: {

        total() {
            return Object.values(this.$store.state.app.projects).length
        },

        socials() {
            return this.$store.state.app.global.socialLinks
        }
    }
}
</script>

<style lang="scss">
.mmenu {

    &-link {
        opacity: .5;
        transition: opacity .3s ease-out;

        &.nuxt-link-exact-active {
            opacity: 1;
        }
    }
}
</style>