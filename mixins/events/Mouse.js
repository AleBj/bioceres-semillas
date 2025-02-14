export default {
    data() {
        return {
            mouse_events: {},
            mouse_x: 0,
            mouse_y: 0,
            mouse_on: 0,
            mouse_target: null
        }
    },

    mounted() {
        this.$nextTick().then(() => {
            const { isMobile } = this.$store.state.app.device

            this.passive = { passive: isMobile ? false : true }

            this.mouse_events.move = isMobile ? 'touchmove' : 'mousemove'
            this.mouse_events.down = isMobile ? 'touchstart' : 'mousedown'
            this.mouse_events.up = isMobile ? 'touchend' : 'mouseup' 
            
            this.$_mouse_bind()
        })
    },

    beforeDestroy() {
        this.$_mouse_unbind()
    },

    methods: {
        $_mouse_bind() {
            const { move, down, up } = this.mouse_events

            window.addEventListener(move, this.$_mouse_move, this.passive)
            window.addEventListener(down, this.$_mouse_down)
            window.addEventListener(up, this.$_mouse_up)
        },

        $_mouse_pos(e) {
            this.mouse_x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
            this.mouse_y = e.changedTouches ? e.changedTouches[0].clientY : e.clientY
    
            this.mouse_target = e.target
        },

        $_mouse_move(e) {
            this.$_mouse_pos(e)

            this.$nuxt.$emit('mousemove', { 
                x: this.mouse_x, y: this.mouse_y, e
            })
        },

        $_mouse_down(e) {
            this.$_mouse_pos(e)

            this.mouse_on = this.mouse_x

            this.$nuxt.$emit('mousedown', { 
                x: this.mouse_x, y: this.mouse_y, 
                target: this.mouse_target, e 
            })
        },

        $_mouse_up(e) {
            this.$_mouse_pos(e)

            this.$nuxt.$emit('mouseup', { 
                x: this.mouse_x, y: this.mouse_y, 
                target: this.mouse_target, e,
                click: Math.abs(this.mouse_x - this.mouse_on) < 10 
            })
        },

        $_mouse_unbind() {
            const { move, down, up } = this.mouse_events

            window.removeEventListener(move, this.$_mouse_move, this.passive)
            window.removeEventListener(down, this.$_mouse_down)
            window.removeEventListener(up, this.$_mouse_up)
        }
    }
}