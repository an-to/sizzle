const getIngredients = (db) => {
  return db('ingredients')
  .select('*')
}
const getSkills = (db) => {
  return db('skills')
  .select('*')
}

const saveIngredients = (db, ingredient) => {
  return db('ingredients')
  .insert(ingredients)
}
const saveSkills = (db) => {
  return db('skills')
  .insert(skills)
}
module.exports = {
  getIngredients,
  getSkills,
  saveIngredients,
  saveSkills
}
