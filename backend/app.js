const express = require('express')
const cors = require('cors')
const app = express()
const user_route = require('./routes/user_route')
const cors_options = {
    origin: '*'
}


app.use(express.json())
app.use(cors(cors_options))
app.use(user_route)
module.exports = app