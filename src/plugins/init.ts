import { iGlobal } from "~~/src/types"
import { constants } from "../composables"

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  useState<iGlobal>(constants.globals, () => ({
    tools: [],
    tuts: [],
    background: "/images/background_1920x1080v3.jpg"
  }))
})
