<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">    
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
    font-family: "Kanit", sans-serif;
    font-weight: 800;
    font-style: normal;
}
</style>