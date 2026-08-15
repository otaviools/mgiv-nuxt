export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/fonts", "nuxt-email-renderer"],
  css: ["~/assets/css/main.css"],
  router: { options: { scrollBehaviorType: "smooth" } },
  components: [{ path: "~/components", ignore: ["ui/map/**"] }],
  vite: {
    optimizeDeps: {
      include: ["maplibre-gl", "@lucide/vue", "clsx", "tailwind-merge"],
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  hooks: {
    "build:manifest"(manifest) {
      for (const [key, chunk] of Object.entries(manifest)) {
        if (key.includes("AppLocalMap") || chunk.src?.includes("AppLocalMap")) {
          chunk.prefetch = false;
          chunk.preload = false;
        }
      }
    },
  },
});
