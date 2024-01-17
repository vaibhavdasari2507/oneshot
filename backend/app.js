const express = require("express");
const cors = require("cors");
const app = express();
// const bodyParser = require('body-parser');
const user_route = require("./routes/user_route");
const profile_route = require("./routes/profile_route");
const blog_route = require("./routes/blog_route");
const comment_route = require("./routes/comment_route");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(user_route);
app.use(profile_route);
app.use(blog_route);
app.use(comment_route);
module.exports = app;
