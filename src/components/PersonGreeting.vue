<template>
    <div>
        <h3>Hello {{fName}} {{lName}}</h3>
        <h3>Hello full name - {{fullName}}</h3>        

        <button @click="sendEvent">Call Heros</button>
    </div>
</template>

<script>
    import { computed } from 'vue';

    export default {
        name: 'PersonGreeting', 
        props: ['fName', 'lName'],
        setup(props, context) {
            console.log(context)
            const fullName = computed(() => `${props.fName} ${props.lName}`);

            const sendEvent = () => {
                console.log('sendEvent')
                context.emit('callHeros', fullName.value)
            }

            return {
                fullName,
                sendEvent
            }
        },
        emits: ['callHeros']
        // computed: {
        //     getFullName () {
        //         return `${this.fName} ${this.lName}`;
        //     }
        // }

    }
</script>

<style lang="scss" scoped>

</style>