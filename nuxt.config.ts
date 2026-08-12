export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/fonts", "nuxt-email-renderer"],
  css: ["~/assets/css/main.css"],
  // Scroll suave ao navegar pelas âncoras do menu (padrão do Nuxt é "auto"/instantâneo).
  router: { options: { scrollBehaviorType: "smooth" } },
  // Os componentes do mapa são importados explicitamente via `@/components/ui/map`,
  // então ficam fora do auto-import (evita colisão de nome entre index.ts e Map.vue).
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
});
