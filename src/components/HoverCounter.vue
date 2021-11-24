<template>
    <div>
        <button @mouseover="incrementCount">Hovered {{ count }} times</button>
    </div>
</template>

<script>
    //import CounterMixin from '../mixins/counter.js';
    import useCounter from '../composables/useCounter';

    export default {
        name: 'HoverCounter',
        setup() {
            const { count, incrementCount } = useCounter()

            return { count, incrementCount }
        },
        // data() {
        //     return {
        //         count: 100 // can override this instead using count in counter.js
        //     }
        // },    
        // mixins: [CounterMixin]
    }
</script>

<style scoped>

</style>