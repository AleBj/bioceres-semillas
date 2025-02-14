import gsap from 'gsap'
import SplitText from '~/assets/js/vendors/SplitText'
import { qs, qsa } from '~/assets/js/utils/common'

export default {

    data() {
        return {
            a: []
        }
    },

    methods: {

        async st_init() {
            await this.$nextTick()

            let elems = qsa('.js-s-lines', this.$el)
            elems.length && elems.forEach(item => {
                const l1 = new SplitText(item, { type: 'lines', linesClass: 'overflow-hidden' })
                const l2 = new SplitText(l1.lines, { type: 'lines' })

                this.a.push(gsap.fromTo(l2.lines, {
                    yPercent: 100,
                }, {
                    yPercent: 0,
                    duration: 1,
                    stagger: .1,
                    ease: 'unmask',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom-=15%',
                        once: true
                    },
                    onComplete: () => {
                        l1.revert()
                        l2.revert()
                    }
                }))
            })

            elems = qsa('.js-s-fade', this.$el)
            elems.length && elems.forEach(item => {
                this.a.push(gsap.fromTo(item, {
                    alpha: 0,
                    y: '6rem'
                }, {
                    alpha: 1,
                    y: 0,
                    duration: 1,
                    ease: 'expo',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom-=20%',
                    }
                }))
            })
        },

        st_kill() {
            this.a.forEach(st => st?.kill?.())
            this.a = null
        }
    }
}