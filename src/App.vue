<template>
    <div>
      <h2>FullName - {{firstName}} {{lastName}}</h2>
      <h2> Computed FullName - {{ fullName }}</h2>
      <button @click="changeFullName">Change Full Name</button>

      <button @click="items.push({id: 4, title: 'Keyboard', price: 50})">Add item</button>
      <h2>Computed Total - {{ total }}</h2>
      <h2>Methods Total - {{ getTotal() }}</h2>
      <!-- What is different betweent Computed and Methods? Res: Computed catch result for next render to improve performce, Methods is not., type input and check clg for test behavior -->

      <input type="text" v-model="country" name="" id="">

      <template v-for="item in items" :key="item.id">
        <h2 v-if="item.price > 200">{{item.title}}  {{item.price}}</h2>
      </template>

      <h2 v-for="item in expensiveItems" :key="item.id">{{item.title}}  {{item.price}}</h2>
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
     ],
     country: ''
    }
  },
  methods: { 
    getTotal() {
      console.log('getTotal')
      return this.items.reduce((total, curr) => (total = total + curr.price), 0)
    },
    changeFullName() {
      this.fullName = 'Ronaldo'
    }
  },
  computed: {
    // fullName () {
    //   return `${this.firstName} ${this.lastName}`
    // },
    fullName: {
      get () {
        console.log('get full name')
        return `${this.firstName} ${this.lastName}`
      },
      set (value) {
        console.log('set full name')
        const names = value.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    },
    total () {
      console.log('computed')
      return this.items.reduce((total, curr) => (total = total + curr.price), 0)
    },
    expensiveItems () {
      return this.items.filter(item => item.price > 200)
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
