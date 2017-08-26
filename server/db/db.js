const getIngredients = (db) => {
  return db('ingredients')
  .select('*')
}
const getSkills = (db) => {
  return db('skills')
  .select('*')
}

const getLocations = (db) => {
  return db('locations')
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

const saveLocations = (db, location) => {
  return db('locations')
  .insert(locations)
}

module.exports = {
  getIngredients,
  getSkills,
  saveIngredients,
  saveSkills,
  saveLocations,
  getLocations
}
