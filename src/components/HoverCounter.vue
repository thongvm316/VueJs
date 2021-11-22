<template>
    <div>
        <button @mouseover="incrementCount">Hovered {{ count }} times</button>
    </div>
</template>

<script>
    export default {
        name: 'HoverCounter',
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