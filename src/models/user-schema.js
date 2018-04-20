const mongoose = require('./model')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  name: String,
  last_name: String,
  twitter: String,
  age: Number
}, {
  collection: 'user'
})
const User = mongoose.model('Proof', UserSchema)

module.exports = User
