const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

const crypto = require('./crypto')

module.exports = {
  //create,
  exists,
  getById,
  getByName,
  createNewUser
}
function createNewUser(newUser, testDb) {
  const hash = crypto.getHash(newUser.password)
  const connection = testDb || knex


  return connection('users')
    .insert({
        username: newUser.username,
        name: newUser.name,
        address: newUser.address,
        email: newUser.email,
        phone: newUser.phone,
        hash: hash
    })

}


function exists (username, testDb) {
  const connection = testDb || knex
  return connection('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getById (id, testDb) {
  const connection = testDb || knex
  return connection('users')
    .select('id', 'username')
    .where('id', id)
}

function getByName (username, testDb) {
  const connection = testDb || knex
  return connection('users')
    .select()
    .where('username', username)
}
