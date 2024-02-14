<template>
    <button v-on:click="go_back">
    <img src="./img/arrow.png">
    </button>
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
<style scoped>
button{
    width:30%;
    padding: 1%;
    font-size: 1.5rem;
    vertical-align:bottom;
    margin:5px;
    border-radius: 5px;
    display: block;
    border: none;
    background-color: #DDB892;
}
img{
   width: 25%;
}
</style>