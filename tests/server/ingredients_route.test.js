// var test = require('ava')
// var request = require('supertest')
//
// var createServer = require('../../server/server')
// var prescriptionsDb = require('../../server/db/prescriptions')
// var setupDb = require('./setup-db')
//
// setupDb(test,createServer)
//
// test.cb('GET /', t => {
//   request(t.context.app)
//     .get('/api/prescriptions')
//     .expect(200)
//     .end((err,res) => {
//       if (err) console.log(err);
//       t.is(res.body.length, 3)
//       t.end()
//     })
// })
//
// test.cb('read prescriptions db', t => {
//   prescriptionsDb.getPrescriptions(t.context.db)
//     .then(prescriptions => {
//       t.is(prescriptions.length, 3)
//       t.true(prescriptions[0].hasOwnProperty('gp'))
//       t.end()
//     })
// })
