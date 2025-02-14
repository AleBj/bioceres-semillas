export default class {
    constructor(app) {
        this.app = app

        this.o = new IntersectionObserver(this.mount, {
            rootMargin: '50% 50% 50% 50%'
        })
    }

    mount = (elems) => {
        elems?.forEach(el => {
            const target = el.target

            el.isIntersecting
                ? target?.play?.()
                : target?.pause?.()
        })
    }

    observe = (el) => {
        this.o.observe(el)
    }

    unobserve = (el) => {
        this.o.unobserve(el)
    }
}
