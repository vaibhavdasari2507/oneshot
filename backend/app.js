const express = require('express')
const cors = require('cors')
const app = express()
const cors_options = {
    origin: '*'
}


app.use(express.json())
app.use(cors(cors_options))
module.exports = app