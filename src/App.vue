<template>
  <div>
    <Greet name="thong" heroName="minh" />
    <Greet name="hana" heroName="quynh" />
    <Greet name="phat" heroName="vo" />

    <Article
      id="my-article"
      title="Article title"
      :likes="50"
      :isPublic="true"
    />
    <!-- :likes, :isPublic use for number and boolean -->
  </div>
  <!-- Just use when component has a wraper div -->
</template>

<script>
// import Greet from './components/Greet.vue'
import Article from './components/Article.vue'

export default {
  name: 'App',
  components: {
    // Greet,
    Article,
  },
  data() {
    return {
      name: 'minh',
      channel: 'R316',
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

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}

input + label {
  font-weight: bold;
  display: inline-flex;
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
