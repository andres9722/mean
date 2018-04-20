const UserModel = require('./../models/user-model')
const um = new UserModel()

class UserController {
  getAll (req, res, next) {
    um.getAll(users => {
      res.json(users)
    })
  }

  getOne (req, res, next) {
    let id = req.params.id
    um.getOne(id, user => {
      res.json(user)
    })
  }

  save (req, res, next) {
    let user = req.body
    um.save(user, user => {
      res.json(user)
    })
  }

  update (req, res, next) {
    let user = req.body
    um.update(user, user => {
      res.json(user)
    })
  }

  delete (req, res, next) {
    let id = req.params.id
    um.delete(id, user => {
      res.json(user)
    })
  }
}

module.exports = UserController
