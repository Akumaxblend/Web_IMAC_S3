<template>
    <div class="content" v-show="is_visible">
        <return_button v-on:go_back="go_back"/>
        <div class="recipe_header">
            <img class="meal_img" :src="meal.strMealThumb"/>
            <div class="header_texts">
                <h2 class="meal_title">{{ meal.strMeal }}</h2>
                <div class="ingredients">
                    <ingredient_card v-for="i in ingredients" :ingredient_name="meal['strIngredient' + i]" :ingredient_quantity="meal['strMeasure' + i]" :ingredient_img="'https://www.themealdb.com/images/ingredients/' + meal['strIngredient' + i]+ '-small.png'"/>
                </div>
            </div>
        </div>
        
        <p class="instructions" v-for="i in instructions">{{i}}</p>
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
                ingredients: {},
                instructions: []
            }
        },
        methods:{
            async change_meal(meal_id){
                this.meal = await fetchById(meal_id);
                this.meal = this.meal.meals[0];
                this.ingredients = await fetchIngredientNumber(this.meal)
                this.instructions = this.meal.strInstructions.split('\n')
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

<style scoped>
.meal_img{
    margin:2.5% 0% 0% 5%;
    border-radius: 20px;
    width: 90%;
    height: 50%;
}
.recipe_header{
    display:block;
    width: 100%;
    margin-bottom: 2.5%;
}
.header_texts{   
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.ingredients{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
h2{
    color: #7F5539;
    margin: auto;
    border-radius: 5px;
    font-size: 1.5rem;    
}
p{
    /* background-color: #EDE0D4; */
    border-bottom: 2px solid #EDE0D4;
    font-size: 1rem;
    color: #7F5539;
    border-radius: 5px;
    text-justify:auto;
    padding: 1%;
    margin-bottom: 1%;
}
button{
    margin: auto;
}

@media (min-aspect-ratio: 0.7){
    
}
@media (min-aspect-ratio: 1.7){
    .recipe_header{
        display: inline-flex;
    }
    .meal_img{
        width: 50%;
    }
    .header_texts{
        width: 50%;
    }
    p{
        font-size: 2rem;
    }
    h2{
        font-size: 3rem;
    }
}
</style>