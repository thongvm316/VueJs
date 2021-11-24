<template>
    <div>
        <h2>Component Child C</h2>
        <h2>User name - {{ userName }}</h2>
        <h2>Child composition api username - {{ childUserName }} </h2>

        <h2>Count - {{ childCount }}</h2>
        <h2>Hero -{{ firstName }} {{ lastName }}</h2>

        <button @click="incCount">Inc Child Btn</button>
    </div>
</template>

<script>
    import { inject, toRefs } from 'vue';

    export default {
        name: 'ChildC',
        setup() {
            const childUserName = inject('c_username', 'Default username') // if not provide, Default username will be render
            const childCount = inject('c_count', 0)
            const childHero = inject('c_state', {})
            const incCount = inject('incCount')

            return {
                childUserName,
                childCount,
                ...toRefs(childHero),
                incCount                
            }
        },
        inject: ['userName']
    }
</script>

<style lang="scss" scoped>

</style>