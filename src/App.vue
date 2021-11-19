<template>
  <div>{{greet}} {{ name }}</div>
  <div v-text="channel"></div>

  <div v-html="purpose"></div>
  <div v-html="hack"></div>

  <div v-bind:id="headingID">Heading</div>
  <button v-bind:disabled="isDisabled">Bind</button>

  <h2 class="underline">Underline text</h2>
  <h2 class="underline" v-bind:class="status">Status</h2>
  <h2 v-bind:class="isPromoted && 'promoted'">Promoted movie</h2>
  <h2 v-bind:class="isSoldout ? 'sold-out' : 'new'">Soundout? movie</h2>
  <h2 v-bind:class="['new', 'promoted']">Newly promoted movies</h2>
  <h2 v-bind:class="[isPromoted && 'promoted', isSoldout ? 'sold-out' : 'new']">Arr conditional movies</h2>
  <h2 v-bind:class="{
    promoted : isPromoted,
    new: !isSoldout,
    'sold-out': isSoldout
  }">Obj Conditional Movies</h2>

  <h2 v-bind:style="{
    color : highlightColor,
    fontSize: `${headerSize}px`,
     // 'font-size': `${headerSize}px`
     padding: '20px'
  }">Inline style</h2>

  <h2 v-bind:style="headerStyleObject">Style Obj</h2>

  <div v-bind:style="[baseStyleObject, successStyleObject]">Success style</div>
  <div v-bind:style="[baseStyleObject, dangerStyleObject]">Danger style</div>
  <!-- Note: Can remove v-bind, :class :style.. work as well -->

  <!-- * Conditional rendering -->
  <h2 v-if="num === 0">The number is zero</h2>
  <h2 v-else-if="num < 0">The number is negative</h2>
  <h2 v-else-if="num > 0">The number is postitive</h2>
  <h2 v-else>Not a number</h2>

  <div v-if="display">
    <h2>Minh Thong</h2>
    <h2>Hana</h2>
    <h2>Vue</h2>
  </div>

  <template v-if="display">
    <h2>Minh Thong</h2>
    <h2>Hana</h2>
    <h2>Vue</h2>
  </template>
  <!-- use template instead dev for prevent element that no need to the DOM -->

  <h2 v-show="showElement">Using v-show</h2>
  <h2 v-if="showElement">Using v-show</h2>

  <!-- List rendering -->
  <h2 v-for="(name, index) in names" :key="name">{{ index }} {{name}}</h2>
  <h2 v-for="name in fullNames" :key="name.firstName">{{ name.firstName }} {{name.lastName}}</h2>

  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>

  <h2 v-for="(value, key, index) in myInfor" :key="value">{{index}} {{ key }} {{ value }}</h2>

  <template v-for="name in names" :key="name">
    <h2>{{ name }}</h2>
    <hr>
  </template>

  <!-- Conditional rendering list -->
  <template v-for="name in names" :key="name">
    <h2 v-if="name === 'thong'">{{ name }}</h2>
  </template>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // * variables
      greet: 'Hello',
      name: 'Hana',
      channel: 'R316',
      purpose: '<b>S2</b>',
      hack: `<a href="#" onclick="alert('LL')">CLick me!</a>`,
      headingID: 'heading',
      isDisabled: true,
      status: 'success',
      isPromoted: true,
      isSoldout: true,
      highlightColor: 'orange',
      headerSize: 50,

       // * style
      headerStyleObject: {
        color: 'orange',
        fontSize: '50px',
        padding: '20px'
      },
      baseStyleObject: {
        fontSize: '50px',
        padding: '10px'
      },
      successStyleObject: {
        color: 'green',
        backgroundColor: 'lightgreen',
        border: '1px solid green'
      },
      dangerStyleObject: {
        color: 'darkred',
        backgroundColor: 'red',
        border: '1px solid green'
      },

      // * conditional rendering
      num: 'Hi',
      display: true,
      showElement: false,

      // * list rendering
      names: ['thong', 'hana', 'phat'],

      fullNames: [
        { firstName: 'minh', lastName: 'thong'},
        { firstName: 'quynh', lastName: 'thu'},
        { firstName: 'minh', lastName: 'phat'},
      ],

      actors: [
        {
          name: 'Bale',
          movies: ['Batman', 'Mavel']
        },
        {
          name: 'Ronaldo',
          movies: ['RM', 'MU']
        },
      ],
      
      myInfor: {
        name: 'thong',
        channel: 'R316',
        course: 'Vue 3'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: olivedrab;
}

.sold-out {
  color: red;
}
</style>
