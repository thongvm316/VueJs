<template>
    <div>
        <h2>{{firstName}} {{lastName}}</h2>
        <h2>{{fname}} {{lname}}</h2>
    </div>
</template>

<script>
    import { reactive, toRefs } from 'vue';

    export default {
        name: 'DemoTwo',
        setup() {
            const state = reactive({
                firstName: 'Quynh',
                lastName: 'Thu'
            })

            setTimeout(() => {
                state.firstName = 'Minh',
                state.lastName = 'Thong'
                console.log(state)
            }, 2000) 

            // return {
            //     firstName: state.firstName,
            //     lastName: state.lastName
            // } // use this, state will update, but not update to DOM

            return toRefs(state) // use this so that after change data, vue will update to DOM
        },
        data() {
            return {
                fname: 'Minh',
                lname: 'Thong'
            }
        }
    }
</script>

<style scoped>

</style>