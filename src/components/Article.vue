<template>
    <div>
        <h2>Article Component</h2>
        <h2 v-bind="$attrs">{{ title }}</h2>
        <h2>Likes - {{ likes }}</h2>
        <h2>Published - {{ isPublic ? 'Yes' : 'No' }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Article',
        props: {
            title: {
                type: String,
                required: true,
                default: 'Article default'
            },
            likes: Number,
            isPublic: Boolean,
        },
        inheritedProps: false
    }
</script>

<style scoped>

</style>