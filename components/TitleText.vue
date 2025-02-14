<template>
    <section class="site-grid">
        <div class="col-span-6 s:col-span-3 mb-30 s:mb-0">
            <div class="relative hidden s:inline-flex h3 overflow-hidden">
                <div ref="arr1" class="absolute top-0 left-0 w-full h-full">→</div>
                <div ref="arr2">→</div>
            </div>
            <span class="inline-flex s:hidden">({{ label }})</span>
        </div>
        <div class="col-span-6 s:col-span-9">
            <h2 class="h3 s:pr-100 js-s-lines" v-text="title"></h2>
            <div class="grid grid-cols-6 s:grid-cols-9 gap-x-5 s:gap-x-24 mt-60 s:mt-150">
                <h3 class="col-span-6 s:col-span-3 hidden s:block js-s-fade">({{ label }})</h3>
                <div class="col-span-6 s:col-span-6 js-s-fade">
                    <div class="txt w-full max-w-[50rem]" v-html="text"></div>
                    <nuxt-link v-if="link && linkText" :to="link" class="uline-double mt-80">{{ linkText }}</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import gsap from 'gsap'

export default {
    props: {
        title: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: false
        },
        label: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: false
        },
        linkText: {
            type: String,
            required: false
        }
    },

    async mounted() {
        await this.$nextTick()

        this.st = gsap.fromTo([this.$refs.arr1, this.$refs.arr2], {
            xPercent: gsap.utils.wrap([-150, 0])
        }, {
            xPercent: gsap.utils.wrap([0, 100]),
            duration: 1,
            stagger: -.25,
            delay: .5,
            ease: 'snappy',
            scrollTrigger: {
                trigger: this.$el,
                start: 'top bottom-=15%',
            }
        })
    },

    destroyed() {
        this.st?.kill()
    }
}
</script>
