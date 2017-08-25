const getIngredients = (db) => {
  return db('ingredients')
  .select('*')
}
const saveIngredients = (db, ingredient) => {
  return db('ingredients')
  .insert(ingredients)
}
module.exports = {
  getIngredients,
  saveIngredients
}
