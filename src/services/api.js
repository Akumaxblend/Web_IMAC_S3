
const MAX_INGREDIENTS = 20

let contains_word = (meal, word) => {
  let meal_string = JSON.stringify(meal).toLowerCase()
  if (meal_string.toLowerCase().includes(word)) return true
  return false
}


let fetchAllMeals = async() => { //Probleme : fetch tous les plats ne fonctionnerait pas à cause des restrictions d'api.
  // let categories = await fetchCategories()
  // let meals_categorized = []
  // let all_meals = []
  // let meals_dict = {}
  // for(const category of categories.categories){ //On recup les meals de toutes les categories
  //   meals_categorized.push(await fetchByCategory(category.strCategory))
  // }
  // for(const category of meals_categorized){
  //   for(const meal of category.meals){
  //     all_meals.push(meal)
  //   }
  // }
  // meals_dict["meals"] = all_meals
  // return meals_dict
  let meals_by_letter = []
  let all_meals = []
  let meals_dict = {}
  for(let i = 0; i<26; i++){
    let tmp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f="+String.fromCharCode(97+i))
    tmp = await tmp.json()
    await meals_by_letter.push(tmp)
  }
  for(const letter of meals_by_letter){
    if(letter.meals){
      for(const meal of letter.meals){
        all_meals.push(meal)
      }
    }
  }
  meals_dict["meals"] = all_meals
  return meals_dict
}

let fetchRandom = async () => { return await (await (await fetch("https://www.themealdb.com/api/json/v1/1/random.php"))).json() }

let fetchByCategory = async (category) => { 
  let meals = await fetchAllMeals()
  if(category == "Everything"){
    return await meals
  }
  let meals_categorized = {}
  meals_categorized["meals"] = meals.meals.filter((a) => a.strCategory.includes(category))
  return meals_categorized

}

let fetchCategories = async () => {return await (await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")).json()}
let fetchCountries = async() => {return await (await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")).json()}
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
export {fetchByCategory, fetchCategories, fetchRandom, fetchById, fetchIngredientNumber, fetchAllMeals, fetchCountries}