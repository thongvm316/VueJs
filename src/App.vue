<template>
  <div>{{greet}} {{ name }}</div>
  <div v-text="channel"></div>
  <div v-html="purpose"></div>
  <div v-html="hack"></div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      greet: 'Hello',
      name: 'Hana',
      channel: 'R316',
      purpose: '<b>S2</b>',
      hack: `<a href="#" onclick="alert("Click me!")">CLick me!</a>`
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
