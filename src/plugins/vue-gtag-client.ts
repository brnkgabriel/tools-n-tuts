import VueGtag from "vue-gtag-next"

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-NJ0CLFKTRB'
    }
  })
})
