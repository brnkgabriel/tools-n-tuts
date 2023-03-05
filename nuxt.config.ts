// https://nuxt.com/docs/api/configuration/nuxt-config
// // export default defineNuxtConfig({

// })

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  srcDir: "src",

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@kevinmarrec/nuxt-pwa',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/supabase',
  ],
  pwa: {
    workbox: {
      // the way to enable pwa is to remove "enabled: false" from below
      // enabled: false
    },
  },
}