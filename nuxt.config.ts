// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxtjs/color-mode",
        "@nuxt/icon"
    ],

    sourcemap: {
        client: false,
        server: false // keep server sourcemaps if you want
    },

    ui: {
        theme: {
            colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error']
        }
    },

    ssr: true,

    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },

    devtools: {enabled: true},

    css: ['~/assets/css/main.css'],


    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'dark', // fallback value if not system preference found
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },
    compatibilityDate: '2026-03-01'
})