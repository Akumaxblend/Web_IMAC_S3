<template>
    <div class="content">
        <button v-on:click="go_top" id="top_button">TOP</button>
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
        created: async function(){
            await this.change_meal(this.$route.params.id)
        },
        methods:{
            async change_meal(meal_id){
                this.meal = await fetchById(meal_id);
                this.meal = this.meal.meals[0];
                this.ingredients = await fetchIngredientNumber(this.meal)
                this.instructions = this.meal.strInstructions.split('\n')
            },
            go_top(){
                window.scroll({top:0, behavior:"smooth"})
            }
        },
        props: {
            meal_name:"",
            meal_img: "",
            is_visible: true
        },
        components: {
            ingredient_card
        }     
    }
</script>

<style scoped>
.meal_img{
    margin:2.5% auto;
    border-radius: 20px;
    width: 90%;
    height: 50%;
    box-shadow: 5px 5px 5px #7F5539;
}
.recipe_header{
    display:flex;
    flex-direction: column;
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
    font-size: 3rem;    
}
p{
    font-size: 1rem;
    color: #7F5539;
    border-radius: 5px;
    text-justify:auto;
    padding: 1%;
    margin-bottom: 1%;
    box-shadow: 5px 5px 5px #7F5539;
}
button{
    margin: auto;
}
#top_button{
    position: fixed;
    bottom:50%;
    padding: 1rem;
    color:#7F5539;
    background-color: #EDE0D4;
    border: 2px solid #7F5539;
    border-radius: 5px;
}
@media (min-aspect-ratio: 0.7){
    .meal_img{
        margin:2.5% auto;
    }
}
@media (min-aspect-ratio: 1.7){
    .recipe_header{
        display: inline-flex;
        flex-direction: row;
    }
    .meal_img{
        width: 50%;
        margin: 2.5%;
    }
    .header_texts{
        width: 50%;
    }
    p{
        font-size: 2rem;
    }
}

</style>