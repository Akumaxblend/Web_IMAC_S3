
const MAX_INGREDIENTS = 20

let contains_word = (meal, word) => {
  let meal_string = JSON.stringify(meal).toLowerCase()
  if (meal_string.toLowerCase().includes(word)) return true
  return false
}
let fetchRandom = async () => { return await (await (await fetch("https://www.themealdb.com/api/json/v1/1/random.php"))).json() }
let fetchByCategory = async (category) => { return await (await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+category)).json() }
let fetchCategories = async () => {return await (await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")).json()}
let fetchById = async(meal_id) => {return await( await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+meal_id)).json()}

let fetchIngredientNumber = async(meal) => {
    let number = 0
    for (let i = 1; i <= MAX_INGREDIENTS; i++) {
        const ingredient = meal['strIngredient' + i];
        if (ingredient == null || ingredient == "") {
          break;
        }
        number ++
    }return number
}

// let fetchAllMeals = async() => { //Probleme : fetch tous les plats ne fonctionnerait pas à cause des restrictions d'api.
//   let categories = await fetchCategories()
//   let meals_overview = []
//   let meals_id = []
//   let meals_full = []
//   for(const category of categories.categories){ //On recup les meals de toutes les categories
//     meals_overview.push(await fetchByCategory(category.strCategory))
//   }
//   for(const fetchedCategoryMeals of meals_overview){ //Il faut maintenant transformer notre tableau de categorie de meals en un tableau de meals
//     for(const meal of fetchedCategoryMeals.meals){
//       meals_id.push(meal.idMeal)
//     }
//   }
//   for(const id of meals_id){
//     meals_full.push(await fetchById(id))
//   }
//   console.log(meals_full)

//   return
// }
export {fetchByCategory, fetchCategories, fetchRandom, fetchById, fetchIngredientNumber}