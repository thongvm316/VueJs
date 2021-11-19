<template>
    <div>
      <h2>FullName - {{firstName}} {{lastName}}</h2>
      <h2> Computed FullName - {{ fullName }}</h2>

      <button @click="items.push({id: 4, title: 'Keyboard', price: 50})">Add item</button>
      <h2>Total - {{ total }}</h2>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
     firstName: 'Minh',
     lastName: 'Thong',
     items: [
       {
         id: 1,
         title: 'TV',
         price: 100
       },
       {
         id: 2,
         title: 'DV',
         price: 200
       },
       {
         id: 3,
         title: 'SDTV',
         price: 400
       },
     ]
    }
  },
  methods: { 
   
  },
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    },
    total () {
      return this.items.reduce((total, curr) => (total = total + curr.price), 0)
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
