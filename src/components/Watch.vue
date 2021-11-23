<template>
    <div>
        <input type="text" v-model="name">
        <input type="text" placeholder="Frist Name" v-model="firstName" name="" id="">
        <input type="text" placeholder="Lats Name" v-model="lastName" name="" id="">

        <hr>

        <input type="text" placeholder="Frist Name" v-model="fName" name="" id="">
        <input type="text" placeholder="Lats Name" v-model="lName" name="" id="">
        <input type="text" placeholder="Hero Name" v-model="option.heroName" name="" id="">
    </div>
</template>

<script>
    import { ref, watch, reactive, toRefs } from 'vue';
    import * as _ from 'lodash';

    export default {
        name: "Watch",
        setup() {
            const firstName = ref('')
            const lastName = ref('Minh')

            // watch(firstName, (newValue, oldValue) => {
            //     console.log(oldValue)
            //     console.log(newValue)
            // })

            // watch([firstName, lastName], (newValue, oldValue) => {
            //     console.log('firstName old value', oldValue[0])
            //     console.log('firstName new value', newValue[0])
            //     console.log('lastName old value', newValue[1])
            //     console.log('lastName new value', newValue[1])
            // }, { immediate: true })
            /* ------------ */
            const state = reactive({
                fName: '',
                lName: '',
                option: {
                    heroName: ''
                }
            })

            // watch(() => ({...state}), (newVal, oldVal) => {
            //     console.log('fName', oldVal.fName)
            //     console.log('fName', newVal.fName)
            //     console.log('lName', oldVal.lName)
            //     console.log('lName', newVal.lName)
            // })

            // watch(() => (state.fName), (newVal, oldVal) => {
            //     console.log('fName', oldVal)
            //     console.log('fName', newVal)
            // })

            watch(() => (_.cloneDeep(state.option)), (newVal, oldVal) => {
                console.log('heroName', oldVal)
                console.log('heroName', newVal)
            }, { deep: true })

            return {
                firstName,
                lastName,
                ...toRefs(state)
            }
        },
        data() {
            return {
                name: ''
            }
        },
        watch: {
            name(newValue, oldValue) {
                console.log('Old value', oldValue)
                console.log('New value', newValue)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>