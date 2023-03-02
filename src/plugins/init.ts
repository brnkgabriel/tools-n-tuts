import { iGlobal, iTool } from "~~/src/types"
import { constants } from "../composables"

const tool: iTool = {
  about: "The best open source tools and tutorials you need for work",
  category: "",
  download_page: "",
  homepage: "",
  image: "/images/background_1920x1080v3.jpg",
  logo: "/images/background_1920x1080v3.jpg",
  name: "loading...",
  bg_color: "#0B5CFF",
  font_color: "#fff",
  intro_video: "",
  documentation: ""
}

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  useState<iGlobal>(constants.globals, () => ({
    tool,
    tools: [],
    selectedTools: [],
    tuts: [],
    categories: [],
  }))
})
