import { defineVitestConfig } from "@nuxt/test-utils/config"
import { fileURLToPath } from "node:url"
import { configDefaults } from "vitest/config"

export default defineVitestConfig({
  test: {
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "e2e/**"],
    root: fileURLToPath(new URL("./", import.meta.url)),
  },
})
