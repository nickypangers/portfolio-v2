// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    preload: true,
    families: {
      'Patrick Hand': true,
    }
  }
})