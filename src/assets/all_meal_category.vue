<template>
    <div class="meal_list">
        <meal_category v-on:click_on_category="retrieve_category" :picture="'/src/img/all.png'" :category_name="'Everything'"/>
        <meal_category  v-for="category in categories.categories" v-on:click_on_category="retrieve_category" :picture="category.strCategoryThumb" :category_name="category.strCategory"/>
    </div>
</template>

<script>
import meal_category from "./meal_category.vue"
import {fetchCategories} from "@/services/api";
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
    methods: {
        retrieve_category(clicked_category){
            this.$emit('category_clicked', clicked_category)
            console.log(clicked_category)
        }
    },
    components: {
        meal_category
    }
}
</script>

<style>
.meal_list
{
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
}
</style>