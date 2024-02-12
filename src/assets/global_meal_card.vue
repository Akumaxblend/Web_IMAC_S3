<template>
    <div class="content" v-show="is_visible">
        <img :src="meal_img"/>
        <h2 class="meal_title">{{ meal_name }}</h2>
    </div>
</template>

<script>
//import { fetchRandom } from "@/services/api.js"
export default
    {
        name: "global_meal_card",
        data() {
            return{
                randomMeal: []
            }
        },
        // beforeCreate: async function(){
        // this.randomMeal = await fetchRandom().meals[0].strMeal
        // },
        methods:{
            // async getRandomMeal() {
            //     this.randomMeal = await fetchRandom().meals[0].strMealThumb
            // }
            // contains_word(word){

            // }
        },
        props: {
            meal_name:"",
            meal_img: "",
            is_visible: true
        }
        
    }
</script>

<style scoped>
.content {
    padding: 1%;
    display: inline-flex;
    background-color: #7F5539;
    color: antiquewhite;
    border-radius: 5px;
    width: 30rem;
    margin: 0.3%;
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
</style>