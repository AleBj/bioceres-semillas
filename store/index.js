export const actions = {
    async nuxtServerInit({ state, dispatch, commit }, { req }) {
        try {
            const { global, site } = await this.$dato.getSettings()
            if (global) {
                await commit('app/SET_GLOBAL', global)
            }
            if (site) {
                //await commit('app/SET_SEO', site)
            }
        }
        catch (e) {
            console.log(e)
            return
        }
    }
}
