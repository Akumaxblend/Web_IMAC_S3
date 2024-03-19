<template>
    <div class="wrapper">
        <div class="gallery-options">
            <div class ="input">
                <input type="text" id="search_input" v-model="search" v-on:input="synch_input" placeholder="Search meals">
                <button class="clear_input" v-on:click="clear_input(1)">x</button>
            </div>
            <div class ="input">
                <input type="text" id="ingredient1_input" v-model="ingredient1" v-on:input="synch_input" placeholder="Ingredient 1">
                <button class="clear_input" v-on:click="clear_input(2)">x</button>
            </div>
            <div class ="input">
                <input type="text" id="ingredient2_input" v-model="ingredient2" v-on:input="synch_input" placeholder="Ingredient 2">
                <button class="clear_input" v-on:click="clear_input(3)">x</button>
            </div>
        <select id="order_by" v-model="order_type">
            <option value="AZmeals">A-Z</option>
            <option value="DifficultyUp">Difficulty &triangle;</option>
            <option value="DifficultyDown">Difficulty &triangledown;</option>
        </select>
        <select id="country" v-model="country">
            <option value="">All countries</option>
            <option v-for="country in countries.meals" :value="country.strArea">{{ country.strArea }}</option>
        </select>
        </div>

        <button v-on:click="go_top" id="top_button">TOP</button>
        
        <div class="meal_list">
        <global_meal_card v-for="meal in filtered_meals" v-on:meal_clicked="retrieve_meal" :meal_img="meal.strMealThumb" :meal_name="meal.strMeal" :meal_id="meal.idMeal"  :id="meal.idMeal"/>
        </div>
    </div>
</template>
 
<script>
import { fetchByCategory, fetchCountries } from "@/services/api.js"
import return_button from "@/return_button.vue"
import global_meal_card from "./global_meal_card.vue"
export default
    {
        name: "all_global_meal_card",
        data() {
            return{
                meals: [],
                countries: [],
                search: "",
                ingredient1: "",
                ingredient2: "",
                order_type: "AZmeals",
                country: ""
            }
        },
        computed: {
            filtered_meals: function(){
                const filter_search_name = (meal) => meal.strMeal.toLowerCase().includes(this.search.toLowerCase())
                const filter_search = (meal) => (JSON.stringify(meal).toLowerCase().includes(this.search.toLowerCase()) && JSON.stringify(meal).toLowerCase().includes(this.ingredient1.toLowerCase()) && JSON.stringify(meal).toLowerCase().includes(this.ingredient2.toLowerCase()))
                const filter_country = (meal) => JSON.stringify(meal.strArea).toLowerCase().includes(this.country.toLowerCase())
                console.log("STep 1")
                if(this.meals.meals){
                    let toreturn = this.meals.meals.filter(filter_search)
                    toreturn = toreturn.filter(filter_country)
                    if(this.order_type == "AZmeals") toreturn.sort((a,b) => a.strMeal.charAt(0).localeCompare(b.strMeal.charAt(0)))
                    else if(this.order_type == "DifficultyUp") toreturn.sort((a,b) => a.strInstructions.length - b.strInstructions.length)
                    else toreturn.sort((a,b) => b.strInstructions.length - a.strInstructions.length)
                    console.log("STep 2")
                    return toreturn
                }
                return []  
            }
        },
        created: async function(){
            this.countries = await fetchCountries()
            this.meals = await fetchByCategory(this.$route.params.id)
        },
        methods:
        {
            contains_word(meal, word){
                let meal_string = JSON.stringify(meal).toLowerCase()
                if (meal_string.indexOf(word.toLowerCase()) >= 0) return true
                return false
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
                this.ingredient1 = document.getElementById("ingredient1_input").value
                this.ingredient2 = document.getElementById("ingredient2_input").value
            },
            go_top(){
                window.scroll({top:0, behavior:"smooth"})
            },
            scroll_to_last_meal(meal_id){
                const el = document.getElementById(meal_id)
                window.scroll(0, el.offsetTop)
            },
            clear_input(number){
                switch(number){
                    case 1: this.search =""; console.log("clear lol");break;
                    case 2: this.ingredient1 ="";break;
                    case 3: this.ingredient2 ="";break;
                }
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
    width:100%;
    margin: 1% auto;
    color: #7F5539;
    background-color: #EDE0D4;
    height: 2rem;
    border-radius: 5px;
    border: none;
}
.input{
    width: 90%;
    margin: auto;
    position: relative;
}
.clear_input{
    height: 2rem;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 10%;
    padding: 0% 2% 0% 10%;
    appearance: none;
    border: none;
    border-radius: 5px;
    color: #7F5539;
    background-color: rgba(0,0,0,0);
}
select{
    margin: 1% auto;
    width: 40%;
    height: 2rem;
    color: #7F5539;
    background-color: #EDE0D4;
    border: none;
    border-radius: 5px;
}
.gallery-options{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 1%;
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
.wrapper{
    width: 100%;
    min-height: 100%;
}
.meal_list{
    min-height: 80%;
}
@media (min-aspect-ratio: 0.7){
    .input{
    width:45%;
    }

    select{
    width: 20%;
    }
}
@media (min-aspect-ratio: 1.7){
    .input{
    width: 25%;
    }

    select{
    width: 10%;
    }
}
</style>