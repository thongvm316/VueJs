<template>
    <div>
      <h2>Volume Tracker</h2>
      <h3>Current Volume - {{ volume }}</h3>

      <div>
        <button @click="volume += 2">Inc</button>
        <button @click="volume -= 2">Dec</button>
      </div>

      <input type="text" v-model="movie" id="">
      <input type="text" v-model="movieInfo.title" id="">
      <input type="text" v-model="movieInfo.actor" id="">

      <div>
        <button @click="movieList.push('Peace and Love')">Add movie</button>
        <button @click="movieList = movieList.concat(['War'])">Add movie with other method</button> <!-- Can use this to trigger related func on watch config and no need to add deep:true -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      volume: 0,
      movie: 'first render',
      movieInfo: {
        title: '',
        actor: ''
      },
      movieList: ['316', 'TT1000']
    }
  },
  methods: { 
    
  },
  computed: {

  },
  watch: {
    volume(newValue, oldValue) {
      // console.log(oldValue)
      if (newValue > oldValue && newValue === 16) {
        alert('Alert something')
      }
    },
    movie: {
      handler(newValue) {
      console.log(`Call api with movie name ${newValue}`)
      },
      immediate: true // for call func handler at first render
    },
    movieInfo: {
      handler(newValue) {
        console.log(`Call api with movie title ${newValue.title} and actor ${newValue.actor}`)
      },
      deep: true // with obj, config this to use handler func, if not func will not call any time.
    },
    movieList: {
      handler(newValue) {
        console.log(`update list ${newValue}`)  
      },
      deep: true  // with arr, config this to use handler func, if not func will not call any time || no need if use with btn two on template
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
