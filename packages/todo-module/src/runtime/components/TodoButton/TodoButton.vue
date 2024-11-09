<template>
  <button class="todo-button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.todo-button {
  padding: 10px;

  background: var(--todo-primary);
}
</style>
