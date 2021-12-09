<template>
  <div>
    <p data-test="message">
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
}
</script>

<style lang="scss" scoped></style>
