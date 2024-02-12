<template>
    <button v-on:click="click_on_category">
    <div class="meal_category">
        <img :src=picture>
        <div class="meal_title"><h2>{{ category_name }}</h2></div>
    </div>
    </button>
    
</template>

<script>
export default {
    name: "meal_category",
    // data(){
    //     return{
    //         category_name: ""
    //     }
    // },
    props: {
        picture: String,
        category_name: String
    },
    methods: {
        click_on_category(){
            this.$emit('click_on_category', this.category_name)
        }
    }
}
</script>

<style>
.meal_category 
{
    display: inline-flex;
    margin-left: auto;
    background-color: #eeeeee;
    border-radius: 5px;
    margin: 0.1%;
    width: 30rem;
    padding-right: 5%;
}
.meal_title
{
    margin:auto;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5rem;
}
img
{
    margin: 2%;
    border-radius: 5px;
    max-block-size: 5rem;
}
button{
    margin: 5px;
}
</style>