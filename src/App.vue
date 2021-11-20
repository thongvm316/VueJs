<template>
  <div>
    <h4>App Component Text</h4>
    <ChildStyle>
      ChildStyle components text
    </ChildStyle>
  </div> 
</template>

<script>
  import ChildStyle from './components/ChildStyle.vue'
  export default {
    name: 'App',
    components: {
      ChildStyle
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
