<template>
    <div>
        <button @click="incrementCount">Clicked {{ count }} times</button>
    </div>
</template>

<script>
    export default {
        name: 'ClickCounter',
        data() {
            return {
                count: 0
            }
        },
        methods: {
            incrementCount() {
                this.count += 1
            }
        }
    }
</script>

<style scoped>

</style>