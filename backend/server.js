const app = require('./app');
require('dotenv').config()

const port = process.env.PORT;
const {connect} = require('./config/database');

connect();

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});