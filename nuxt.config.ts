// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    meta: {
      name: "Prayer Cell",
      author: "Remnant Christian Network Lagos",
      description: "Remnant Christian Network Lagos - Oko Oba Prayer Cell",
      theme_color: "#fff",
      lang: "en"
    }
  },
})
