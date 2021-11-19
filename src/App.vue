<template>
  <div>
    <h3>App Comp username {{ name }}</h3>
    <ComponentC/>

    <button @click="showPopup = true">Show Popup</button>
    <Popup v-show="showPopup" @close="closePopup"/>

    
  </div> 
</template>

<script>
  import ComponentC from './components/ComponentC.vue'
  import Popup from './components/Popup.vue'

  export default {
    name: 'App',
    components: {
      ComponentC,
      Popup
    },
    data() {
      return {
        name: 'minh', 
        channel: 'R316',
        showPopup: false
      }
    },
    methods: {
      closePopup(name) {
        this.showPopup= false
        console.log(name) // show thongvm, value of params in $emit fnc in Popup.vue file
      },
    },
    provide() {
      return {
        username: this.name
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
