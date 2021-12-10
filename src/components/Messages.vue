<template>
  <div>
    <p data-test="message">
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  mounted() {
    console.log(this.msg)
  },
}
</script>

<style lang="scss" scoped></style>
