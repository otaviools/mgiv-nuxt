export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/fonts", "nuxt-email-renderer"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
});
