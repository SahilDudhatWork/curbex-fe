import local_en from "./config/lang/en.json";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Curbex",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/tailwind.css", "@/assets/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-carousel.js", mode: "client" },
    { src: "~/plugins/vue2-google-maps.js", ssr: false },
    { src: "~/plugins/toast-notification.js", mode: "client" },
    "~/plugins/js-cookie.js",
    "~/plugins/validation.js",
    { src: "~/plugins/vue-slick-carousel.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: "~/components/", pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv",
    [
      "nuxt-i18n",
      {
        vueI18nLoader: true,
        defaultLocale: "en",
        locales: [
          {
            code: "en",
            name: "English",
          },
        ],
        globalInjection: true,
        vueI18n: {
          locale: "en",
          fallbackLocale: "en",
          messages: { en: { ...local_en } },
        },
      },
    ],
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
