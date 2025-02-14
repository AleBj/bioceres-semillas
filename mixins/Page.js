import gsap from 'gsap'

import { qsa, qs } from '~/assets/js/utils/common'
import SplitText from '~/assets/js/vendors/SplitText'

import St from '~/mixins/St'

let tl
let mask

export default {
    mixins: [St],

    async mounted() {
        await this.$nextTick()

        this.st_init()
    },

    destroyed() {
        this.st_kill()
    },

    transition: {
        name: 'page',
        appear: false,
        mode: 'out-in',

        enter(el, done) {
            this.$nuxt.$emit('scroll-reset')
            window.scrollTo(0, 0)
            
            done()

            const title = qs('.js-t-title', el)
            const fades = qsa('.js-t-fades', el)

            if(this.$nuxt.$route.name === 'nuestras-raices') {
                document.body.classList.add('is-about')
            }

            tl?.kill()
            tl = gsap.timeline({ paused: true })
                .to(mask, {
                    autoAlpha: 0,
                    duration: .35,
                    ease: 'linear'
                })
                .add(() => document.body.classList.remove('is-instant'))

            if (title) {
                const split = new SplitText(title, { type: 'lines, words', linesClass: 'overflow-hidden' })

                tl.fromTo(split.words, {
                    yPercent: 105
                }, {
                    yPercent: 0,
                    duration: 1.25,
                    ease: 'unmask',
                    stagger: .1
                }, .125)
            }

            if (fades) {
                tl.fromTo(fades, {
                    autoAlpha: 0,
                    y: '6rem'
                }, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: 'expo',
                }, .145)
            }

            tl.play()
        },

        leave(_, done) {
            this.$nuxt.$emit('menu-close')

            document.body.classList.add('is-instant')
            document.body.classList.remove('is-about')

            !mask && (mask = qs('.js-t-mask'))

            tl?.kill()
            tl = gsap.timeline({ paused: true })
            .to(mask, {
                autoAlpha: 1,
                duration: .35,
                ease: 'linear'
            })
                .add(() => done())
                .play()

            this.$nuxt.$emit('leave')
        }
    },
}
