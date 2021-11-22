<template>
  <div>
    <Vmodel/> 
  </div> 
</template>

<script>
  import Vmodel from './components/Vmodel.vue';

  export default {
    name: 'App',
    components: {
      Vmodel
    },
    data() {
      return { 
       
      }
    },
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

  /* h4 {
    color: purple;
  } */
</style>
