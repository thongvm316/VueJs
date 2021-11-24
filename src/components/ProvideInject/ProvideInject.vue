<template>
    <div>
        <h3>Parent component {{ name }}</h3>
        <h3>Parent count {{ count }}</h3>
        <h3>Parent component hero {{ firstName }} {{ lastName }}</h3>

        <button @click="incCount">Inc Count</button>

        <ChildA/>
    </div>
</template>

<script>
    import { provide, ref, reactive, toRefs } from 'vue';
    import ChildA from './ChildA.vue';

    export default {
        name: 'ProvideInject',
        components: {
            ChildA
        },
        data() {
            return {
                name: 'Minh Thong'
            }
        },
        setup() {
            provide('c_username', 'minh thong')

            const count = ref(10)
            const incCount = () => {
                count.value++
            }

            const state  = reactive({
                firstName: 'quynh thu',
                lastName: 'thu hana'
            })

            provide('c_count', count)
            provide('c_state', state)
            provide('incCount', incCount)

            return {
                count,
                incCount,
                ...toRefs(state)
            }
        },
        provide() {
            return {
                userName: this.name
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>