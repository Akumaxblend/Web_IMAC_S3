<template>
  <div>
    <all_meal_category :is_visible="false"/>
    <all_global_meal_card :is_visible="true"/>
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
export default { components: { all_global_meal_card, global_meal_card, all_meal_category, meal_category, meal_recipe } }
</script>

<style>
div{
  display: block;
}
</style>
