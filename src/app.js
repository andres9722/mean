const express = require('express')
const cors = require('cors')
const bodyParser = express.json()
const bodyParserUrl = express.urlencoded({extended: false})

const userRoutes = require(`./routes/user-router`)
const port = (process.env.PORT || 3000)

let app = express()

app
  .set('port', port)

  .use(cors())
  .use(bodyParser)
  .use(bodyParserUrl)
  .use('/api', userRoutes)

module.exports = app
