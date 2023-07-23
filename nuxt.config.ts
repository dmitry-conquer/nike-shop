export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nike",
      meta: [
        { name: "language", content: "English" },
        { name: "description", content: "Nike landing page." },
        { name: "keywords", content: "Nike, landing, page, parallax" },
        { name: "robots", content: "noindex, nofollow" },
        { name: "author", content: "Dmitry Conquer" },
      ],
    },
  },

  spaLoadingTemplate: false,
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],

  css: ["~/assets/style.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {
        grid: true,
        overrideBrowserslist: "last 2 versions",
      },
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
});
