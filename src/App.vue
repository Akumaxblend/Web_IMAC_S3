<template>
  <div class="vertical_center">
  <router-view></router-view>
  </div>
  
</template>

<!-- 
video : entre 5 et 10min, prend le temps, pauses et bafouillages ok
mise en situation : illustrer nos compétences comme si on était en examen de recrutement qui connait déjà le projet. Prouver qu'on sait comment vue js fonctionne.
-->
<script>
import global_meal_card from "./assets/global_meal_card.vue"
import all_global_meal_card from"./assets/all_global_meal_card.vue"
import meal_category from "./assets/meal_category.vue"
import all_meal_category from "./assets/all_meal_category.vue"
import meal_recipe from "./assets/meal_recipe.vue"
import { RouterView } from "vue-router"

export default {
  components: { all_global_meal_card, global_meal_card, all_meal_category, meal_category, meal_recipe, RouterView },
  data(){
    return{
      are_categories_visible : true,
      are_meals_visible : true,
      is_recipe_visible : true,
      clicked_category : "",
      last_visited_meal : 0
    }
  },
  }
</script>

<style>
/* div{
  display: block;
} */
.vertical_center{
  display: flex;
  margin: auto;
  width: 100%;
  min-height: 100%;
}
</style>
