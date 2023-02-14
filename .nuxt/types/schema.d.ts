import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pwa"]?: typeof import("@kevinmarrec/nuxt-pwa").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["supabase"]?: typeof import("@nuxtjs/supabase").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    supabase: {
        serviceKey: any,
    },
  }
  interface PublicRuntimeConfig {
     pwaManifest: {
        name: string,

        short_name: string,

        description: any,

        lang: string,

        start_url: string,

        display: string,

        background_color: string,

        theme_color: string,

        icons: Array<any>,
    },

    supabase: {
        url: string,

        key: string,

        client: any,

        redirect: boolean,

        cookies: {
             name: string,

             lifetime: number,

             domain: string,

             path: string,

             sameSite: string,
        },
    },
  }
}