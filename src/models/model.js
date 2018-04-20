const mongoose = require('mongoose')
const config = require('./db-config')

mongoose.connect(`mongodb:\/\/${config.mongo.host}/${config.mongo.database}`)

module.exports = mongoose
