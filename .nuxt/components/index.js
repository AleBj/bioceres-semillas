export { default as Button } from '../../components/Button.vue'
export { default as ButtonAccess } from '../../components/ButtonAccess.vue'
export { default as ButtonArrow } from '../../components/ButtonArrow.vue'
export { default as LazyPicture } from '../../components/LazyPicture.vue'
export { default as MediaItem } from '../../components/MediaItem.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as SiteFoot } from '../../components/SiteFoot.vue'
export { default as SiteHead } from '../../components/SiteHead.vue'
export { default as TheGrid } from '../../components/TheGrid.vue'
export { default as TitleText } from '../../components/TitleText.vue'
export { default as Video } from '../../components/Video.vue'
export { default as AboutHero } from '../../components/about/Hero.vue'
export { default as AboutInfo } from '../../components/about/Info.vue'
export { default as AboutLetsDoIt } from '../../components/about/LetsDoIt.vue'
export { default as AsesorContent } from '../../components/asesor/Content.vue'
export { default as AsesorHero } from '../../components/asesor/Hero.vue'
export { default as AsesorValueSeed } from '../../components/asesor/ValueSeed.vue'
export { default as EntrenaHero } from '../../components/entrena/Hero.vue'
export { default as EntrenaHistory } from '../../components/entrena/History.vue'
export { default as EntrenaProfile } from '../../components/entrena/Profile.vue'
export { default as EntrenaRecommendations } from '../../components/entrena/Recommendations.vue'
export { default as EntrenaValueSeed } from '../../components/entrena/ValueSeed.vue'
export { default as EntrenaWhy } from '../../components/entrena/Why.vue'
export { default as DetailHistory } from '../../components/detail/History.vue'
export { default as DetailInfo } from '../../components/detail/Info.vue'
export { default as DetailIntro } from '../../components/detail/Intro.vue'
export { default as DetailValueSeed } from '../../components/detail/ValueSeed.vue'
export { default as ProductsHero } from '../../components/products/Hero.vue'
export { default as ProductsListProducts } from '../../components/products/ListProducts.vue'
export { default as ProductsValueSeed } from '../../components/products/ValueSeed.vue'
export { default as HomeDiscover } from '../../components/home/Discover.vue'
export { default as HomeHero } from '../../components/home/Hero.vue'
export { default as HomeValue } from '../../components/home/Value.vue'
export { default as SemillasHero } from '../../components/semillas/Hero.vue'
export { default as SemillasValueSeed } from '../../components/semillas/ValueSeed.vue'
export { default as TecDiscover } from '../../components/tec/Discover.vue'
export { default as TecHero } from '../../components/tec/Hero.vue'
export { default as TecInfo } from '../../components/tec/Info.vue'
export { default as TecMap } from '../../components/tec/Map.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
