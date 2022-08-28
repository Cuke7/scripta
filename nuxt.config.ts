import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    buildModules: [
        '@nuxtjs/pwa',
    ],
    pwa: {
        manifest: {
            name: 'Scriptae',
            lang: 'fr',
        }
    }
})

