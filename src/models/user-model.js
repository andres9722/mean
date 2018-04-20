const conn = require('./user-schema')

class UserModel {
  getAll (cb) {
    conn.find({}, (err, users) => {
      if (err) throw err
      cb(users)
    })
  }

  getOne (id, cb) {
    conn.findOne({_id: id}, (err, user) => {
      if (err) throw err
      cb(user)
    })
  }

  save (user, cb) {
    conn.create(user, (err, user) => {
      if (err) throw err
      cb(user)
    })
  }

  update (user, cb) {
    conn.findByIdAndUpdate({_id: user._id}, user, (err, user) => {
      if (err) throw err
      cb(user)
    })
  }

  delete (id, cb) {
    conn.remove({_id: id}, (err, user) => {
      if (err) throw err
      cb(user)
    })
  }
}

module.exports = UserModel
