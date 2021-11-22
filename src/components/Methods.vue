<template>
    <div>
        <h2>{{ name }}</h2>
        <button @click="setName">Change Name</button>

        <hr>

        <h2>{{ count }}</h2>
        <button @click="incrementCoount">Increment</button>

        <hr>

        <h2>{{ firstName }} {{ lastName }}</h2>
        <button @click="changeHero">Change Hero</button>
    </div>
</template>

<script>
    import { ref, reactive, toRefs } from 'vue';

    export default {
        name: 'Methods',
        data() {
            return {
                name: 'Minh'
            }
        },
        setup() {
            const count = ref(0)
            const state = reactive({
                firstName: 'Minhjjjj',
                lastName: 'Thong'
            })

            const incrementCoount = () => {
                count.value++
            }

            const changeHero = () => {
                state.firstName = 'Quynh'
                state.lastName = 'Thu'
            }

            return {
                count,
                incrementCoount,
                changeHero,
                ...toRefs(state)
            }
        },
        methods: {
            setName() {
                this.name = 'Thong'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>