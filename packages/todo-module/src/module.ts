import {
  addComponent,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit"

export default defineNuxtModule({
  meta: {
    name: "@todo/todo-module",
    configKey: "todoModule",
  },

  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    const runtimeDir = resolver.resolve("./runtime")
    const isDevelopment =
      runtimeDir.endsWith("src/runtime") || runtimeDir.endsWith("src\\runtime")

    const styles = isDevelopment
      ? "./runtime/assets/styles/main.scss"
      : "./runtime/assets/styles/main.css"

    addPlugin(resolver.resolve("./runtime/plugin"))

    addComponent({
      name: "TodoList",
      filePath: resolver.resolve("./runtime/components/TodoList/TodoList.vue"),
    })

    _nuxt.options.css.unshift(resolver.resolve(styles))
  },
})
