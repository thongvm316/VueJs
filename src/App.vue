<template>
  <div>
    <!-- <Card contents="Card content 1" />
    <Card contents="Card content 2" />
    <Card /> -->
    <!-- Use with props -->

    <!-- <Card>Card contents</Card>
    <Card><h2>Card contents</h2></Card>
    <Card><img src="https://picsum.photos/200" alt="" /></Card> -->
    <!-- use with just slot -->

    <Card>
      <template v-slot:header>
        <h3>Header</h3>
      </template>

      <template v-slot:default>
        <img src="https://picsum.photos/200" alt="" />
      </template>

      <template v-slot:footer>
        <button>View Details</button>
      </template>
    </Card>
    <!-- use with slot name -->

    <NameLists>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }} {{ slotProps.lastName }}
      </template>
    </NameLists>

    <NameLists>
      <template v-slot:default="slotProps">
        {{ slotProps.lastName }} {{ slotProps.firstName }}
      </template>
    </NameLists>

    <NameLists>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }}
      </template>
    </NameLists>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import NameLists from './components/NameLists.vue'
export default {
  name: 'App',
  components: {
    Card,
    NameLists,
  },
  data() {
    return {}
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
</style>
