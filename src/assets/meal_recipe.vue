<template>
    <div class="content" v-show="is_visible">
        <return_button v-on:go_back="go_back"/>
        <img :src="meal.strMealThumb"/>
        <h2 class="meal_title">{{ meal.strMeal }}</h2>
        <div>
            <ingredient_card v-for="i in ingredients" :ingredient_name="meal['strIngredient' + i]" :ingredient_quantity="meal['strMeasure' + i]" :ingredient_img="'https://www.themealdb.com/images/ingredients/' + meal['strIngredient' + i]+ '-small.png'"/>
        </div>
        <p class="instructions">{{meal.strInstructions}}</p>
    </div>
</template>

<script>
import { fetchById, fetchIngredientNumber } from "@/services/api.js"
import ingredient_card from "./ingredient_card.vue";
import return_button from "@/return_button.vue";
export default
    {
        name: "meal_recipe",
        data() {
            return{
                meal: [],
                ingredients: {}
            }
        },
        // created: async function(){
        //     this.meal = await fetchById(52772);
        //     this.meal = this.meal.meals[0];
        //     this.ingredients = await fetchIngredientNumber(this.meal)
        // },
        methods:{
            async change_meal(meal_id){
                this.meal = await fetchById(meal_id);
                this.meal = this.meal.meals[0];
                this.ingredients = await fetchIngredientNumber(this.meal)
            },
            go_back(){
                this.$emit("go_back", "recipe")
            }
        },
        props: {
            meal_name:"",
            meal_img: "",
            is_visible: true
        },
        components: {
    ingredient_card, return_button
}     
    }
</script>

<style>
.content{
    color: black;
}
</style>