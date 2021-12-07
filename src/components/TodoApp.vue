<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          text: 'Learn Vue Testing',
          completed: false,
        },
      ],
    }
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
