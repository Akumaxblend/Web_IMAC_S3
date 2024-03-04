<template>
    <div id="header">
        <h1>COOKIMAC</h1>
    </div>
</template>

<script>
import return_button from '@/return_button.vue';
export default {
    components: {return_button},
    methods: {
        go_back(){
            this.$emit("go_back", "meals")}
    }
}
</script>

<style>
#header {
    display: flex;
    background-color: #9C6644;
    /* background: linear-gradient(#9C6644, #DDB892); */
    color: #EDE0D4;
    margin: auto;
    min-height: 6rem;
    font-size: 2rem;
    font-style: normal;
}
</style>