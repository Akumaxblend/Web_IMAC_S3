<template>
  <div class="vertical_center">
    <!-- <all_meal_category v-on:category_clicked="show_meal_by_category" :is_visible="are_categories_visible"/>

    <all_global_meal_card v-on:go_back="go_back" v-on:meal_clicked="show_recipe" ref="meals" :category="clicked_category" :is_visible="are_meals_visible"/>

    <meal_recipe v-on:go_back="go_back" ref="recipe" :is_visible="is_recipe_visible"/> -->
  <router-view></router-view>

  </div>
  
</template>

<!-- éventuellement regarder pour importer dans la balise script le nom de la categorie direct


Creuser la partie tri et fonctionnalité : chercher un ingrédient + trier par complexité croissante / décroissante 
chercher un ingrédient  => priorité

anims : visuel, hover, evenements clics

local storage : application simple

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
  methods: {
    // show_meal_by_category(clicked_category){
    //     this.clicked_category = clicked_category
    //     this.are_categories_visible = false
    //     this.are_meals_visible = true
    //     this.$refs.meals.meals = []
    //     this.$refs.meals.change_category(clicked_category)
    //     window.scrollTo(0, 0)
    // },
    // show_recipe(clicked_meal){
    //   this.is_recipe_visible = true
    //   this.are_meals_visible = false 
    //   this.$refs.recipe.change_meal(clicked_meal)
    //   this.last_visited_meal = clicked_meal
    //   window.scrollTo(0, 0)
    // },
    // async go_back(origin){
    //   if(this.are_meals_visible){
    //     this.are_meals_visible = !this.are_meals_visible
    //     this.are_categories_visible = !this.are_categories_visible
    //   }
    //   if(this.is_recipe_visible){
    //     this.is_recipe_visible = !this.is_recipe_visible
    //     await (this.are_meals_visible = !this.are_meals_visible)
    //     this.$refs.meals.scroll_to_last_meal(this.last_visited_meal)
    //     console.log(this.last_visited_meal)
    //   }
      
    // }
  }
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
