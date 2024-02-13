<template>
    <button v-on:click="go_back">Precedent</button>
</template>

<script>
export default{
    name:"return_button",
    methods: {
        go_back(){
            this.$emit('go_back')
        }
    }
}
</script>