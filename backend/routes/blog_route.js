const { Router } = require("express");
const router = Router();
const {add_blog} = require("../controllers/blogs/add_blog")
const {delete_blog} = require("../controllers/blogs/delete_blog")
const {is_authenticated} = require("../middleware/authentication")

router.post("/blog",is_authenticated,add_blog)
router.delete("/blog/:id",is_authenticated,delete_blog)