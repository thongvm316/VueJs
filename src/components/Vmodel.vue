<template>
    <div>
        <input type="text" placeholder="first name" v-model="fName" name="" id="">
        <input type="text" placeholder="last name" v-model="lName" name="" id="">

        <hr>

        <input type="text" placeholder="hero name" v-model="heroName" name="" id="">
        <input type="text" placeholder="first name" v-model="firstName" name="" id="">
        <input type="text" placeholder="last name" v-model="lastName" name="" id="">
    </div>
</template>

<script>
    import { ref, reactive, toRefs } from 'vue';

    export default {
        name: 'Vmodel',
        setup() {
            const heroName = ref('')
            const state = reactive({
                firstName: '',
                lastName: ''
            })

            return {
                heroName,
                ...toRefs(state)
            }
        },
        data() {
            return {
                fName: '',
                lName: ''
            }
        }
    }
</script>

<style scoped>

</style>