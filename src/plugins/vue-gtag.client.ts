import VueGtag from "vue-gtag-next"

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-R6G45G34LW",
      params: {
        user_id: getMachineId(),
        send_page_view: false,
        linker: {
          domain: ['tools-n-tuts.vercel.app']
        }
      }
    }
  })
})
