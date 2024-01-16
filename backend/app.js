const express = require('express')
const cors = require('cors')
const app = express()
const user_route = require('./routes/user_route')
const profile_route = require('./routes/profile_route')
// const cors_options = {
//     origin: '*'
// }


app.use(express.json())
app.use(cors())
app.use(user_route)
app.use(profile_route)
module.exports = app