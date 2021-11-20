<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ChildStyle'
    }
</script>

<style scoped> /* scoped --> just style this comp without any affect to others */
    h4 {
        color: red;
    }
</style>



