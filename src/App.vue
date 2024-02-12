<template>
  <div>
    <all_meal_category v-on:category_clicked="show_meal_by_category" :is_visible="are_categories_visible"/>
    <all_global_meal_card v-on:show_meal_by_category="" :category="clicked_category" :is_visible="are_meals_visible"/> <!--Trouver comment appeler une fonction d'un enfant-->
    <!-- <meal_recipe/> -->
  </div>
  
</template>

<!-- éventuellement regarder pour importer dans la balise script le nom de la categorie direct-->
<script>
import global_meal_card from "./assets/global_meal_card.vue"
import all_global_meal_card from"./assets/all_global_meal_card.vue"
import meal_category from "./assets/meal_category.vue"
import all_meal_category from "./assets/all_meal_category.vue"
import meal_recipe from "./assets/meal_recipe.vue"
export default {
  components: { all_global_meal_card, global_meal_card, all_meal_category, meal_category, meal_recipe 
  },
  data(){
    return{
      are_categories_visible : true,
      are_meals_visible : false,
      clicked_category : ""
    }
  },
  methods: {
    show_meal_by_category(clicked_category){
        this.clicked_category = clicked_category
        this.are_categories_visible = false
        this.are_meals_visible = true
    }
  }
  }
</script>

<style>
div{
  display: block;
}
</style>
