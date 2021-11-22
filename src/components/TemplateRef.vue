<template>
    <div>
        <input type="text" ref="inputRef" />
        <PostLists ref="postListsRef"/>
    </div>
</template>

<script>
    import PostLists from './PostLists.vue';

    export default {
        name: 'TemplateRef',
        components: {
            PostLists
        },
        mounted() {
            console.log(this.$refs.postListsRef)
            this.$refs.inputRef.focus();
        }
    }
</script>

<style lang="scss" scoped>

</style>