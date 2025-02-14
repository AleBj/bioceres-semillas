
import Prismic from '@prismicio/client'
import sm from './sm.json'

export default async () => {
	const client = await Prismic.getApi(sm.apiEndpoint)
  
	return {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    ssr: false,

    generate: {
      fallback: true
    },

    loading: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Bioceres Semillas',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:locale', content: 'en_gb' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
      ],
      link: [
        { rel: 'preload', as: 'font', href: '/fonts/SuisseIntl-Book.woff2', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', href: '/fonts/SuisseIntl-Bold.woff2', type: 'font/woff2', crossorigin: 'anonymous' },
      ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      { src: '~/assets/css/globals.scss', lang: 'scss' }
    ],

    env: {
      dev: process.env.NODE_ENV !== 'production',
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      { src: '~/plugins/gsap.js', mode: 'client' },
      { src: '~/plugins/resize.js', mode: 'client' },
      { src: '~/plugins/scroll.js', mode: 'client' },
      { src: '~/plugins/lazy.js', mode: 'client' },
    ],

    router: {
      scrollBehavior() {
        return { x: 0, y: 0 }
      }
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/eslint-module',
    ],

    gtm: {
      id: 'G-XJGCNBRC5T',
      scriptURL: 'https://www.googletagmanager.com/gtag/js',
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxtjs/gtm',
      '@nuxt/content',
      '@nuxtjs/style-resources',
      '@nuxtjs/prismic'
    ],
    prismic: {
      endpoint: sm.apiEndpoint,
      modern: true,
      clientConfig: {
        routes: [
          {
            type: 'page',
            uid: "home",
            path: '/'
          },
          {
            type: 'page',
            uid: "soja",
            path: '/cultivos-soja/'
          },
          {
            type: 'page',
            uid: 'trigo',
            path: '/cultivos-trigo/'
          },
          {
            type: 'page',
            path: '/soja/:uid/'
          },
          {
            type: 'page',
            path: '/trigo/:uid/'
          }
        ]
      }
    },

    image: {
      domains: ['localhost']
    },

    styleResources: {
      scss: [
        '~assets/css/_variables.scss'
      ]
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      transpile: ['gsap'],
      extend(config, ctx) {
        config.module.rules.push({
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        })
      },
      terser: {
        // https://github.com/terser/terser#compress-options
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      },
      eslint: {
        fix: true
      }
    }
  }
}

