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
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
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
