<template>
    <div class="meal_list" v-show="is_visible">
        <div class="gallery-options">
        <input type="text" v-model="search" placeholder="Search meals">
        </div>
        <global_meal_card v-for="meal in meals.meals" :is_visible="contains_word(meal, search)" :meal_img="meal.strMealThumb" :meal_name="meal.strMeal"/>
    </div>
</template>

<script>
import { fetchByCategory } from "@/services/api.js"
import global_meal_card from "./global_meal_card.vue"
export default
    {
        name: "all_global_meal_card",
        data() {
            return{
                meals: [],
                search: ""
            }
        },
        created: async function(){
            this.meals = await fetchByCategory("Vegetarian")
        },
        methods:
        {
            // async getRandomMeal() {
            //     this.randomMeal = await fetchRandom().meals[0].strMealThumb
            // }
            contains_word(meal, word){
                let meal_string = JSON.stringify(meal).toLowerCase()
                if (meal_string.toLowerCase().includes(word)) return true
                return false
            }
        },
        props: {
            category: "",
            is_visible: true
        },
        components: {
            global_meal_card,
        }
    }
</script>

<style>
.content {
    padding: 1%;
    margin: auto;
    border-radius: 5px;
    color: antiquewhite;
    width: 100rem;
}
</style>