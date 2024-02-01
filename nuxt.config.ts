// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Robin Dashboard",
    }
  },
  runtimeConfig:{
    API_URL: "https://sfe-m3if.onrender.com/api/v1",
    public:{
      API_URL: "https://sfe-m3if.onrender.com/api/v1",
    }
  },
    plugins: [
       { src: '~/plugins/apexcharts.ts', mode: 'client' },
    ],
  modules: [
    '@ant-design-vue/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
