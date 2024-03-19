import all_global_meal_card from"./assets/all_global_meal_card.vue"
import all_meal_category from "./assets/all_meal_category.vue"
import recipe from "./assets/meal_recipe.vue"


const routes = [

    {path: '/', component: all_meal_category, name: 'Menu'},
    {path: '/categorized-meals/:id', component: all_global_meal_card, name: 'Meals'},
    {path: '/recipe/:id', component: recipe, name: 'Recipe'}
]

export {routes}