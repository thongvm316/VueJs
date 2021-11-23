<template>
    <div>
        <input type="text" placeholder="first name" v-model="fName" name="" id="">
        <input type="text" placeholder="last name" v-model="lName" name="" id="">
        <h2>Options FullName is {{ fullName }}</h2>

        <hr>

        <input type="text" placeholder="first name" v-model="refFName" name="" id="">
        <input type="text" placeholder="last name" v-model="refLName" name="" id="">
        <h2>Composition Ref FullName is {{ refGetFullName }}</h2>

        <hr>

        <input type="text" placeholder="first name" v-model="reactiveFName" name="" id="">
        <input type="text" placeholder="last name" v-model="reactiveLName" name="" id="">
        <h2>Composition Reactive FullName is {{ reactiveGetFullName }}</h2>
    </div>
</template>

<script>
    import { ref, computed, reactive, toRefs } from 'vue';

    export default {
        name: "Computed",
        data() {
            return {
                fName: '',
                lName: ''
            }
        },
        setup() {
            const refFName = ref('test')
            const refLName = ref('')

            const refGetFullName = computed(() => {
                return `${refFName.value} ${refLName.value}`
            })

            const state = reactive({
                reactiveFName: '',
                reactiveLName: ''
            })

            const reactiveGetFullName = computed(() => {
                return `${state.reactiveFName} ${state.reactiveLName}`
            })

            return {
                refFName,
                refLName,
                refGetFullName,
                ...toRefs(state),
                reactiveGetFullName
            }
        },
        computed: {
            fullName() {
                return `${this.fName} ${this.lName}`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>