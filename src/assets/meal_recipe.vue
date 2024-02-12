<template>
    <div class="content">
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
export default
    {
        name: "meal_recipe",
        data() {
            return{
                meal: [],
                ingredients: {}
            }
        },
        created: async function(){
            this.meal = await fetchById(52772);
            this.meal = this.meal.meals[0];
            this.ingredients = await fetchIngredientNumber(this.meal)
        },
        methods:{
        },
        props: {
            meal_name:"",
            meal_img: ""
        },
        components: {
    ingredient_card,
}     
    }
</script>

<style>
.content{
    color: black;
}
</style>