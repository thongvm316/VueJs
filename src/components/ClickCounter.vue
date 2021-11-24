<template>
    <div>
        <button @click="incrementCount">Clicked {{ count }} times</button>
    </div>
</template>

<script>
    // import CounterMixin from '../mixins/counter.js';
    import useCounter from '../composables/useCounter';

    export default {
        name: 'ClickCounter',
        setup() {
            const { count, incrementCount } = useCounter(10, 100)

            return { count, incrementCount }
        }
        // mixins: [CounterMixin]
    }
</script>

<style scoped>

</style>