import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import lerp from '@14islands/lerp'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default class {
    constructor(app) {
        this.app = app

        this.ease = .125
        this.t = 0
        this.tc = 0
        this.dy = 0
        this.diff = 0
        this.max = 0

        this.still = true

        this.rects = [{}]
    }

    mount(ctx) {
        this.ctx = ctx
        this.bindEvents()
    }

    bindEvents() {
        const { device, features } = this.ctx.$store.state.app

        if (features.hasMouse) {
            gsap.ticker.add(this.tick)

            const bounds = this.ctx.$r?.bounds

            this.isFirefox = device.isFirefox
            this.mm = device.isWindows ? .9 : .375
            this.mff = 20

            ScrollTrigger.defaults({
                scroller: document.body
            })
            ScrollTrigger.scrollerProxy(document.body, {
                scrollTop: () => { return this.tc },
                scrollLeft: () => { return this.tc },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: bounds.ww, height: bounds.wh }
                }
            })

            window.addEventListener('wheel', this.wheel, { passive: false })
            window.addEventListener('scroll', this.scroll, false)

            this.ctx?.$nuxt?.$on('resize', this.resize)
        } else {
            gsap.ticker.add(this.mobileTick)

            window.addEventListener('scroll', this.mobileScroll, false)
        }

        this.ctx?.$nuxt?.$on('scroll-reset', this.reset)
    }

    tick = (time) => {
        this.diff = this.t - this.tc
        this.still = Math.abs(this.diff) < 0.05
        this.ratio = gsap.ticker.deltaRatio(60)

        if (!this.still || this.resizing) {
            this.tc = lerp(this.tc, this.t, this.ease * this.ratio)
            window.scrollTo(0, this.tc)
        }

        this.ctx?.$nuxt?.$emit('tick', { y: this.tc, time, ratio: this.ratio, diff: this.diff })
    }

    wheel = (e) => {
        e.preventDefault()

        this.max = this.app.$r?.max || 0

        this.dy = e.wheelDeltaY || e.deltaY
        this.dy *= this.mm

        this.t -= this.dy
        this.t = gsap.utils.clamp(0, this.max, this.t)

        this.ctx?.$nuxt?.$emit('scroll', { y: this.t, dy: this.dy, oe: e })
    }

    scroll = () => {
        if (this.still) {
            this.tc = this.t = window.scrollY
        }
    }

    mobileScroll = () => {
        this.ms = window.scrollY
        this.ctx?.$nuxt?.$emit('scroll', { y: this.ms, dy: this.ms })
    }

    mobileTick = (time) => {
        this.ratio = gsap.ticker.deltaRatio(60)
        this.ctx?.$nuxt?.$emit('tick', { y: this.ms, time, ratio: this.ratio })
    }

    resize = () => {
        this.resizing = true

        const last = this.t

        this.t = this.tc = 0
        window.scrollTo(0, 0)

        this.ctx?.$nuxt?.$emit('resize-reset')

        requestAnimationFrame(() => {
            ScrollTrigger.refresh()

            this.t = this.tc = last
            window.scrollTo(0, this.t)

            this.resizing = false
        })
    }

    reset = () => {
        this.t = this.tc = 0
        window.scrollTo(0, 0)
        ScrollTrigger.refresh()
    }

    get active() {
        return !this.still
    }

    get current() {
        return this.tc
    }

    get target() {
        return this.t
    }
}
