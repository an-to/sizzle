const getIngredients = (db) => {
  return db('ingredients')
  .select('*')
}

const getIngredientsByUser = (db, user) => {
  return db('users')
  .join('ingredients', 'user_id', 'user.id')
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
const saveResources = (db, resource) => {
  return db('resource')
  .insert(resource)
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
  saveResources,
  getLocations
}
