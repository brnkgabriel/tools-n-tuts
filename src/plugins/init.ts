import { iGlobal, iTool } from "~~/src/types"
import { constants, defaultTool } from "../composables"

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  useState<iGlobal>(constants.globals, () => ({
    tool: defaultTool,
    tools: [],
    selectedTools: [],
    tuts: [],
    categories: [],
  }))
})
