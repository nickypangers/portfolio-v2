// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      lang: 'en',
    }
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/index.css'],
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],
  googleFonts: {
    download: true,
    families: {
      Roboto: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    }
  },
  plugins: [
    { src: '~/plugins/gsap.ts', ssr: false },
  ],
  image: {
    format: ['webp'],
    domains: ['media.licdn.com'],
    alias: {
      linkedin: 'https://media.licdn.com/dms/image/v2'
    }
  },
  tailwindcss: {
    exposeConfig: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
})