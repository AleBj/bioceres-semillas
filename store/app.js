import _uniq from 'lodash.uniq'

/**
  State are datas
  State is a factory fonction for SSR (Server Side Rendering)
  @ref : https://vuex.vuejs.org/guide/state.html
  @example : func({state, getters, commit, rootGetters}, {argument})
*/

export const state = () => ({
    bounds: {},

    flags: {
        locked: false,
        loaded: false,
        dark: false,
        menu: false,
    },

    page: {
        to: null,
        from: null,
        id: null,
    },

    device: {},

    features: {},

    projects: {},

    global: {},

    site: {},
})


export const actions = {
    setBounds({ commit }, data) {
        commit('SET_BOUNDS', data)
    },
    async setProjects({ commit }) {
        const data = await request({
            query: AllProjects,
        })

        commit('SET_PROJECTS', { ...data.projects })
    },
    async setSettings({ commit }) {
        const data = await request({
            query: SettingsQuery,
        })

        commit('SET_SITE', { ...data.site })
        commit('SET_GLOBAL', { ...data.global })
    },
}
/**
  Mutations are always responsible for state changing
  Mutations name's must be explicit and use UPPER_CASE_SNAKE_CASE
  @params : {State}
  @ref : https://vuex.vuejs.org/guide/mutations.html
  @example : MUTATION_EXAMPLE(state, {argument}){ state.data = argument }
*/
export const mutations = {
    SET_GENERALDATA(state, value) {
        state.general_data = value
    },
    SET_GLOBAL(state, data) {
        state.global = data
    },

    SET_BOUNDS(state, data) {
        state.bounds = data
    },

    SET_LOCKED(state, bool = false) {
        state.flags.locked = bool
    },

    SET_LOADED(state, bool = false) {
        state.flags.loaded = bool
    },

    SET_MENU(state, bool = false) {
        state.flags.menu = bool
    },

    SET_PAGE(state, params) {
        state.page = params
    },

    SET_PROJECTS(state, params) {
        state.projects = params
    },

    SET_GLOBAL(state, params) {
        state.global = params
    },

    SET_SITE(state, params) {
        state.site = params
    },

    SET_THEME(state, bool = false) {
        state.flags.dark = bool
    },

    SET_DEVICE(state) {
        if (process.client) {
            state.device = {
                isWindows: navigator.platform.indexOf('Win') > -1,
                isFirefox: navigator.userAgent.indexOf('Firefox') > -1,
                isMobile: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ||
                    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1),
                isWindows: (["Win32", "Win64", "Windows", "WinCE"].indexOf(window.navigator.platform) !== -1),
            }
        }
    },

    SET_FEATURES(state) {
        if (process.client) {
            state.features = {
                hasWheelEvent: 'onwheel' in document,
                hasMouseWheelEvent: 'onmousewheel' in document,
                hasTouch: 'ontouchstart' in document,
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: 'onkeydown' in document,
                hasMouse: window.matchMedia('(hover: hover) and (pointer: fine)').matches,
                hasMouseL: window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 650px)').matches,
            }
        }
    },
}
