const path = require('path')
const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')

const auth = require('./lib/auth')
const apiRoutes = require('./routes/api')
const ingredientsRoute = require('./routes/ingredients')


const locationsRoute = require('./routes/locations')

const skillsRoute = require('./routes/skills')

const server = express()

// force SSL
server.use(function(req, res, next) {
  if(process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto']==='http') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''))
  }
  next()
})

server.use(express.static('public'))
server.use(passport.initialize())

server.use('/api/v1/', apiRoutes)
server.use('/api/v1/ingredients', ingredientsRoute)


server.use('/api/v1/locations', locationsRoute)
server.use('/api/v1/skills', skillsRoute)


passport.use(new LocalStrategy(auth.verify))

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
