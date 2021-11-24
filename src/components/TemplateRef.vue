<template>
    <div>
        <input type="text" ref="inputRef" name="" id="">
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';

    export default {
        name: 'TemplateRef',
        // mounted() {
        //     this.$refs.inputRef.focus();
        // },
        setup() {
            const inputRef = ref(null)

            onMounted(() => {
                inputRef.value.focus()
            })

            return {
                inputRef
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>