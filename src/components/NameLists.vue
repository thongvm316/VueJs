<template>
    <div>
        <h3 v-for="name in names" :key="name.firstName">
            <!-- {{ name.firstName }} {{ name.lastName }} -->
            <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
        </h3>
    </div>
</template>

<script>
    export default {
        name: 'NameList',
        data() {
            return {
                names: [
                    { firstName: 'Minh', lastName: 'Thong' },
                    { firstName: 'Minh', lastName: 'Phat' },
                    { firstName: 'Quynh', lastName: 'Thu' },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>