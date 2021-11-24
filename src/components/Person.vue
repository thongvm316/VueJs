<template>
    <div>
        <input type="text" v-model="fName" name="" id="">
        <input type="text" v-model="lName" name="" id="">

        <PersonGreeting :fName="fName" :lName="lName" @CallHeros="CallHeros"/>
    </div>
</template>

<script>    
    import { ref } from 'vue';
    import PersonGreeting from './PersonGreeting.vue';

    export default {
        name: 'Person',
        components: { PersonGreeting },
        setup() {
            const fName = ref('')
            const lName = ref('')

            const CallHeros = (hero) => {
                alert(`Calling ${hero}`)
            }

            return {
                fName,
                lName,
                CallHeros
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>