<template>
    <div>   
        <button @click="getPosts">Load post</button>
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }} {{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'PostList',
        data() {
            return {
                posts: [],
                errorMsg: ''
            }
        },
        beforeCreate() {
            console.log('PostLists beforeCreate')
        },
        created() {
            console.log('PostLists created')
            // this.getPosts()
        },
        beforeMount() {
            console.log('PostLists beforeMount')
        },
        mounted() {
            console.log('PostLists mounted')
        },
        beforeUpdate() {
            console.log('PostLists beforeUpdate')
        },
        updated() {
            console.log('PostLists updated')
        },
        beforeUnmount(){
            console.log('PostLists beforeUnmount')
        },
        unmounted() {
            console.log('PostLists unmounted')
        },
        methods: {
            getPosts() {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(res => this.posts = res.data)
                    .catch(err => {
                        console.log(err)
                        this.errorMsg = 'Error'
                    })
            }
        }
    }
</script>

<style scoped>

</style>