<template>
    <div class="meal_list" v-show="is_visible">
        <meal_category  v-for="category in categories.categories" :picture="category.strCategoryThumb" :category_name="category.strCategory"/>
    </div>
</template>

<script>
//import {categories as fetched_categories} from "../main.js"
import meal_category from "./meal_category.vue"
import {fetchCategories} from "@/services/api";
//picture = categories.categories[0].strMealThumb
export default {
    name: "all_meal_category",
    data() {
            return{
                categories: [],
            }
        }, 
    created: async function(){
        this.categories = await fetchCategories()
    },
    props: {
        is_visible: true
    },
    components: {
        meal_category
    }
}
</script>

<style>
.meal_list
{
    width:100rem;
}
</style>