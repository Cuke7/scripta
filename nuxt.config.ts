import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@kevinmarrec/nuxt-pwa'],
    pwa: {
        workbox: {
            enabled: true
        }
    },
    icon: {
        source: './icon.png'
    },
    meta: {
        name: "Scripta"
    },
    manifest: {
        name: 'Scripta',
        short_name: 'Scripta',
        description: 'Markdown note taking app',
        theme_color: '#03061f',
        background_color: '#03061f',
        display: 'standalone',
        lang: 'fr'
    }
})

