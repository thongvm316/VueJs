<template>
    <div>
        <h2>{{ name }}</h2>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: 'DemoOne',
        setup() {
            // let name = 'Minh'

            // setTimeout(() => {
            //     name = 'Thong'
            //     console.log(name)
            // }, 2000)
            // Use this solution: name will change, but not re-render DOM

            /* ------- */
            const name = ref('Minh')
            setTimeout(() => {
                name.value = 'Thong'
            }, 2000) // it's work well

            return {
                name
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>