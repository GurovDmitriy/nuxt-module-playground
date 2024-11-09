export default defineNuxtConfig({
  modules: ["../src/module"],
  devtools: { enabled: true },

  css: ["./assets/styles/main.scss"],
  todoModule: {},

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },
})
