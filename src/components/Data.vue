<template>
    <div>
        <h2>Options - {{ o_firstName }}</h2>
        <h2>Options - {{ o_firstName }} {{ o_lastName }} a.k.a {{ o_heroName }}</h2>
        
        <hr>
        
        <h2>Composition Api - {{ c_firstName }}</h2>
        <h2>Replace data - {{ greet }}</h2>

        <hr>  

        <h2>Composition - {{ c_firstName }} {{ c_lastName }} {{ c_heroName }}</h2>
        <h2>Composition - {{ greetHero }}</h2>

        <hr>

        <h2>Composition - {{ c_firstName }} {{ c_lastName }} {{ c_heroName }}</h2>
        <h2>Composition - {{reactiveHeroName}}</h2>
    </div>
</template>

<script>
    import { ref, reactive } from 'vue';

    export default {
        name: 'Data',
        setup() {
            const c_firstName = ref('Clark')
            const c_lastName = ref('Kent')
            const c_heroName = ref('Superman')

            // c_firstName.value = 'Diana' // can replace data when use ref
            const greet = `Hello ${c_firstName.value}`
            const greetHero = `Hello ${c_firstName.value} ${c_lastName.value}`

            const state =  reactive({
                firstName: 'Ronaldo',
                lastName: 'Messi',
                heroName: 'ThongVM'
            })

            const reactiveHeroName = `Hello ${state.firstName} ${state.lastName} a.k.a ${state.heroName}`

            return {
                c_firstName, // not string, is obj, but vue auto change to text when render to DOM
                c_lastName,
                c_heroName,
                greet,
                greetHero,
                reactiveHeroName
            }
        }, // use for composition api
        data() {
            return {
                o_firstName: 'Quynh',
                o_lastName: 'Thu',
                o_heroName: 'R316'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>