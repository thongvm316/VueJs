<template>
  <div>
    <!-- <h4>App Component Text</h4>
    <ChildStyle>
      ChildStyle components text
    </ChildStyle> -->

    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>

    <!-- <TabA v-if="activeTab === 'TabA'"/>
    <TabB v-if="activeTab === 'TabB'"/>
    <TabC v-if="activeTab === 'TabC'"/> -->

    <keep-alive>
      <component :is="activeTab"/>
    </keep-alive>  <!-- Can use dynamic component with this syntax intead above for clean code -->



  </div> 
</template>

<script>
  // import ChildStyle from './components/ChildStyle.vue'
  import TabA from './components/TabA.vue'
  import TabB from './components/TabB.vue'
  import TabC from './components/TabC.vue'
  export default {
    name: 'App',
    components: {
      // ChildStyle
      TabA,
      TabB,
      TabC,
    },
    data() {
      return { 
       activeTab: 'TabA'
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
