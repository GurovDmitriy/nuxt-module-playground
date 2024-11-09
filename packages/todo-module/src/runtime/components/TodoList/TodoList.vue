<script setup lang="ts">
import { onMounted } from "#imports"
import TodoButton from "../TodoButton/TodoButton.vue"

onMounted(() => {
  console.log("TodoButton: call from onMounted")
})
</script>

<template>
  <div>
    <h3>App Widget</h3>
    <ul>
      <li>Vue</li>
      <li>Nuxt</li>
    </ul>
    <div>
      <TodoButton>App Button</TodoButton>
    </div>
  </div>
</template>
