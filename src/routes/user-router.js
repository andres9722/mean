const express = require('express')
const router = express.Router()
const UserController = require('./../controllers/user-controller')
const uc = new UserController()

router
  .get('/users', uc.getAll)
  .get('/users/:id', uc.getOne)
  .post('/users', uc.save)
  .put('/users/:id', uc.update)
  .delete('/users/:id', uc.delete)

module.exports = router
