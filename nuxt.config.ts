import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@kevinmarrec/nuxt-pwa'],
    pwa: {
        manifest: {
            name: 'My Awesome App',
            lang: 'fr',
            useWebmanifestExtension: false
        }
    }
})

