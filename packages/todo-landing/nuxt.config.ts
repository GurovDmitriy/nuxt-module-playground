// https://nuxt.com/docs/api/configuration/nuxt-config

// For mode choose one only:

// 1.
//---------------------
// for spa run nuxt generate
// ssr: false,
// You can now deploy .output/public to any static hosting
//---------------------

// 2.
//---------------------
// for ssg run nuxt generate
// ssr: true,
// You can now deploy .output/public to any static hosting
//---------------------

// 3.
//---------------------
// for ssr run nuxt build
// ssr: true,
// nitro: {
//   preset: "node-server"
// },
// You can preview this build using node .output/server/index.mjs
//---------------------

// If nothing used above, then:

// 1.
//---------------------
// By default, for ssg run nuxt generate
// You can now deploy .output/public to any static hosting
//---------------------

// 2.
//---------------------
// By default, for ssr run nuxt build
// You can preview this build using node .output/server/index.mjs
//---------------------

export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  srcDir: "src/app/",

  app: {
    head: {
      meta: [
        { name: "theme-color", content: "#ffffff" },
        { name: "description", content: "Nuxt Playground Default" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },

  components: [
    {
      path: "~~/src/shared/components/ui/",
      extensions: [".vue", ".ts", ".js"],
      pathPrefix: false,
    },
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~~/src/shared/assets/styles/global.scss" as *;',
          api: "modern",
        },
      },
    },

    define: {
      "process.env.NUXT_PUBLIC_API_URL": process.env.NUXT_PUBLIC_API_URL,
    },
  },

  css: ["~~/src/shared/assets/styles/main.scss"],

  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/test-utils/module",
    "nuxt-svgo",
    "nuxt-viewport",
    "@todo/todo-module",
  ],

  todoModule: {},

  svgo: {
    global: false,
    componentPrefix: "icon",
  },

  image: {
    quality: 80,
    format: ["webp"],
    staticFilename: "[publicPath]/images/[name]-[hash][ext]",
    domains: ["localhost:3000"],
    screens: {
      sm: 576,
      md: 768,
      lg: 922,
      // xl: 1200,
      // xxl: 1600,
    },
  },

  viewport: {
    breakpoints: {
      sm: 576,
      md: 768,
      lg: 922,
      xl: 1200,
      xxl: 1600,
    },

    defaultBreakpoints: {
      desktop: "lg",
      mobile: "xs",
      tablet: "md",
    },

    fallbackBreakpoint: "lg",
  },

  pinia: {
    storesDirs: [
      "~~/src/shared/stores/**",
      "~~/src/entities/**/stores/**",
      "~~/src/features/**/stores/**",
      "~~/src/widgets/**/stores/**",
    ],
  },

  postcss: {
    plugins: {
      autoprefixer:
        process.env.NODE_ENV === "production" ? require("autoprefixer") : false,
      "postcss-html":
        process.env.NODE_ENV === "production" ? require("postcss-html") : false,
    },
  },

  runtimeConfig: {
    public: {
      apiURL: "https://jsonplaceholder.typicode.com",
      cdnURL: "CDN_URL",
    },
  },

  compatibilityDate: "2024-09-25",
})
