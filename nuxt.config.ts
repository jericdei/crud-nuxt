// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@prisma/nuxt",
    "shadcn-nuxt",
  ],
  googleFonts: {
    families: {
      Inter: "200..700",
    },
  },
  // @ts-ignore-next-line
  prisma: {
    generateClient: false,
  },
  // @ts-ignore-next-line
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
