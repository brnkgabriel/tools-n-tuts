import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "home"
declare module "C:/Users/JUMIA-4408/Documents/1-3243/2-Me/LANRE/2-WEBSITES/NUXTJS/tools-n-tuts/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}