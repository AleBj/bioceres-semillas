import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7052966f = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _2803565b = () => interopDefault(import('../pages/asesor-inteligente.vue' /* webpackChunkName: "pages/asesor-inteligente" */))
const _ac11fd68 = () => interopDefault(import('../pages/como-comprar.vue' /* webpackChunkName: "pages/como-comprar" */))
const _d7fc32e4 = () => interopDefault(import('../pages/cultivos-soja.vue' /* webpackChunkName: "pages/cultivos-soja" */))
const _de260730 = () => interopDefault(import('../pages/cultivos-trigo.vue' /* webpackChunkName: "pages/cultivos-trigo" */))
const _17044050 = () => interopDefault(import('../pages/nuestras-raices.vue' /* webpackChunkName: "pages/nuestras-raices" */))
const _41746a61 = () => interopDefault(import('../pages/producto-detalle.vue' /* webpackChunkName: "pages/producto-detalle" */))
const _01e6f400 = () => interopDefault(import('../pages/tecnologia.vue' /* webpackChunkName: "pages/tecnologia" */))
const _91953684 = () => interopDefault(import('../pages/vicia-villosa.vue' /* webpackChunkName: "pages/vicia-villosa" */))
const _4566e90b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4ca9e5c6 = () => interopDefault(import('../pages/soja/_uid.vue' /* webpackChunkName: "pages/soja/_uid" */))
const _49fd1a64 = () => interopDefault(import('../pages/trigo/_uid.vue' /* webpackChunkName: "pages/trigo/_uid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _7052966f,
    name: "prismic-preview"
  }, {
    path: "/asesor-inteligente",
    component: _2803565b,
    name: "asesor-inteligente"
  }, {
    path: "/como-comprar",
    component: _ac11fd68,
    name: "como-comprar"
  }, {
    path: "/cultivos-soja",
    component: _d7fc32e4,
    name: "cultivos-soja"
  }, {
    path: "/cultivos-trigo",
    component: _de260730,
    name: "cultivos-trigo"
  }, {
    path: "/nuestras-raices",
    component: _17044050,
    name: "nuestras-raices"
  }, {
    path: "/producto-detalle",
    component: _41746a61,
    name: "producto-detalle"
  }, {
    path: "/tecnologia",
    component: _01e6f400,
    name: "tecnologia"
  }, {
    path: "/vicia-villosa",
    component: _91953684,
    name: "vicia-villosa"
  }, {
    path: "/",
    component: _4566e90b,
    name: "index"
  }, {
    path: "/soja/:uid?",
    component: _4ca9e5c6,
    name: "soja-uid"
  }, {
    path: "/trigo/:uid?",
    component: _49fd1a64,
    name: "trigo-uid"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
