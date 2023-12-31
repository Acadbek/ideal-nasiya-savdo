// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@unocss/nuxt'],
  colorMode: {
    classSuffix: '',
  },
  plugins: [
    './plugins/naive-ui.ts'
  ]
})
