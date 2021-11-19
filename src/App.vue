<template>
  <Greet name="thong" heroName='minh'/>
  <Greet name="hana" heroName='quynh'/>
  <Greet name="phat" heroName='vo'/>
  <Greet :name="name" :heroName='channel'/>
</template>

<script>
import Greet from './components/Greet.vue'

export default {
  name: 'App',
  components: {
    Greet
  },
  data() {
    return {
      name: 'minh',
      channel: 'R316'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  }

  label {
    font-weight: bold;
    display: flex;
    margin-bottom: 5px;
  }

  input + label {
    font-weight: bold;
    display:inline-flex;
    margin-right: 20px;
  }

  input[type='text'],
  textarea,
  select {
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
