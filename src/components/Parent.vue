<template>
  <div>
    Parent
    <Child />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  components: {
    Child,
  },
}
</script>

<style scoped></style>
