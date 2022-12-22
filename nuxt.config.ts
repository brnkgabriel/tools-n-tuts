// https://nuxt.com/docs/api/configuration/nuxt-config
// // export default defineNuxtConfig({

// })

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dt-space',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3694921149586901",
        async: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [
  //   // https://go.nuxtjs.dev/typescript
  //   '@nuxt/typescript-build',
  //   // https://go.nuxtjs.dev/tailwindcss
  //   '@nuxtjs/tailwindcss'
  // ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //   // https://go.nuxtjs.dev/pwa
  //   '@nuxtjs/pwa'
  // ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@kevinmarrec/nuxt-pwa',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/supabase'
  ],
  pwa: {
    workbox: {
      // the way to enable pwa is to remove "enabled: false" from below
      // enabled: false
    },
    manifest: {
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      scope: "/",
      start_url: "/",
      name: "Tools n Tuts",
      short_name: "Tools n Tuts",
      description: "The best of the open source tools and tutorials you need for work",
      icons: [
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "/icon-256x256.png",
          sizes: "256x256",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    },
  },
}