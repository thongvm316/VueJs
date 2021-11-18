<template>
  <h2>Add method - {{ add(1, 5, 9) }}</h2>
  <h2>Multiplier method - {{ multiply(9) }}</h2>
  <h2>Multiplier method - {{ multiply(baseValue) }}</h2>

  <h2>{{ name }}</h2>
  <div>
    <button v-on:click="changeName($event), increment(1, $event)">Click</button>
    <button v-on:mouseover="changeName">Mouse Over</button>
  </div>

  <h2>{{ count }}</h2>
  <div>
    <button v-on:click="increment(1, $event)">Increment</button>
    <button v-on:click="decrement(5)">Decrement</button>

    <!-- Can usee @click instead v-on:click -->
    <!-- <button @click="increment(1)">Increment</button>
    <button @click="decrement(5)">Decrement</button> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      name: 'Thong',
      count: 0,
      baseMultiplier: 5,
      baseValue: 10
    }
  },
  methods: {
    add(a, b, c) {
      return a + b + c
    },
    multiply(num) {
      return num * this.baseMultiplier
    },
    increment(num, event) {
       this.count += num
       console.log(event)
    },
    decrement(num) {
       this.count -= num
    },
    changeName(event) {
      this.name = 'Batman'
      console.log(event)
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
