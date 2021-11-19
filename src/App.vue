<template>
  <form @submit.prevent="submitForm">
    <div>
      <pre>
        {{ JSON.stringify(formValues, null, 2) }}
      </pre>
    </div>

    <div>
      <label v-once for="name">Name</label>
      <input type="text" id='name' v-model.trim.lazy="formValues.name">
    </div>

    <div>
      <label for="profile">Profile Summary</label>
      <textarea type="text" id='profile' v-model="formValues.profileSummary"></textarea>
    </div>

    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Viet Nam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div>
      <label for="job-location">Job Location</label>
      <select id="job-location" multiple v-model="formValues.jobLocations">
        <option value="india">India</option>
        <option value="vietnam">Viet Nam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

     <div>
      <input type="checkbox" id='remoteWork' v-model="formValues.remoteWork">
      <label for="remoteWork">Open to remote work</label>
    </div>

    <div>
      <label for="">Skill set</label>
      <input type="checkbox" id="html" value="html" v-model="formValues.skillSet">
      <label for="html">HTML</label>
      <input type="checkbox" id="css" value="css" v-model="formValues.skillSet">
      <label for="css">CSS</label>
      <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet">
      <label for="javascript">Javascript</label>
    </div>

    <div>
      <label for="">Years Of Exp</label>

      <input type="radio" id="0-2" value="0-2" v-model="formValues.yearOfExp">
      <label for="0-2">0-2</label>

      <input type="radio" id="3-5" value="3-5" v-model="formValues.yearOfExp">
      <label for="3-5">3-5</label>

      <input type="radio" id="6-10" value="6-10" v-model="formValues.yearOfExp">
      <label for="6-10">6-10</label>
    </div>

    <div>
      <label for="age">age</label>
      <input type="number" id='age' v-model.number="formValues.age">
    </div>

    <div>
      <button>Submit</button>
    </div>
  </form> 
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      formValues: {
        name: '',
        profileSummary: '',
        country: '',
        jobLocations: [],
        remoteWork: false,
        skillSet: [],
        yearOfExp: '',
        age: null
      }
    }
  },
  methods: { 
    submitForm () {
      // e.preventDefault() // * use  @submit.prevent solution for clean code instead old.
      console.log(this.formValues)
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
