<template>
    <div class="wrapper" v-show="is_visible">
        <div class="gallery-options">
        <input type="text" id="search_input" v-on:input="synch_input" placeholder="Search meals">
        </div>
        <div class="meal_list" v-show="is_visible">
        <return_button class="return_button" v-on:go_back="go_back"/>
        <global_meal_card v-for="meal in meals.meals" v-on:meal_clicked="retrieve_meal" :is_visible="contains_word(meal, search)" :meal_img="meal.strMealThumb" :meal_name="meal.strMeal" :meal_id="meal.idMeal"/>
        </div>
    </div>
</template>

<script>
import { fetchByCategory } from "@/services/api.js"
import return_button from "@/return_button.vue"
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
        // updated: async function(){
        //     this.meals = await fetchByCategory(this.category)
        // },
        methods:
        {
            // async getRandomMeal() {
            //     this.randomMeal = await fetchRandom().meals[0].strMealThumb
            // }
            contains_word(meal, word){
                let meal_string = JSON.stringify(meal).toLowerCase()
                if (meal_string.indexOf(word.toLowerCase()) >= 0) return true
                return false
            },
            async change_category(category){
                this.meals = await fetchByCategory(category)
            },
            retrieve_meal(clicked_meal){
            this.$emit("meal_clicked", clicked_meal)
            console.log(clicked_meal)
            },
            go_back(){
            this.$emit("go_back", "meals")
            },
            synch_input(){
                this.search = document.getElementById("search_input").value
            }
            
        },
        props: {
            category: "",
            is_visible: true
        },
        components: {
            global_meal_card, return_button
        }
    }
</script>

<style scoped>
input{
    width:50%;
    margin:auto;
    color: #7F5539;
    background-color: #EDE0D4;
    height: 2rem;
    border-radius: 5px;
    border: none;
}
.gallery-options{
    width: 100%;
    display: flex;
    margin: 1%;
}
</style>