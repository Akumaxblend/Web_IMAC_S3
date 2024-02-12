const MAX_INGREDIENTS = 20

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
export {fetchByCategory, fetchCategories, fetchRandom, fetchById, fetchIngredientNumber}