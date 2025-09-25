// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: process.env.NUXT_SSR !== "false",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint", "@nuxt/image", "@pinia/nuxt", "@nuxtjs/tailwindcss", "@vueuse/nuxt"]
  // routeRules: {
  //   "/*": { isr: 120 } // 2 min
  // }
});
