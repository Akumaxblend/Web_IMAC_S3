<template>
    <div class="content">
        <img :src="ingredient_img"/>
        <p class="meal_title">{{ ingredient_name }} : {{ ingredient_quantity }}</p>
    </div>
</template>

<script>
export default
    {
        name: "meal_recipe",
        data() {
            return{
            }
        },
        created: async function(){
        },
        methods:{
        },
        props: {
            ingredient_name:"",
            ingredient_quantity: "",
            ingredient_img: ""
        }     
    }
</script>

<style>
.content{
    color: black;
    display: inline-block;
}
</style>