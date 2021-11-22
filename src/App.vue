<template>
  <div> 
    <Parent/>
    <PostLists/>
  </div> 
</template>

<script>
  import Parent from './components/Parent.vue';
  import PostLists from './components/PostLists.vue';

  export default {
    name: 'App',
    components: {
      Parent,
      PostLists
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
