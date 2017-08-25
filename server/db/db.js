const getUsers = (db) => {
  return db('users')
  .select('*')
}
const saveUser = (db, user) => {
  return db('users')
  .insert(user)
}
module.exports = {
  getUsers,
  saveUser
}
