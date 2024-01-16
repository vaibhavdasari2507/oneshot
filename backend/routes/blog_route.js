const { Router } = require("express");
const router = Router();
const {add_blog} = require("../controllers/blogs/add_blog")
const {delete_blog} = require("../controllers/blogs/delete_blog")
const {get_all_blogs} = require("../controllers/blogs/get_all_blogs")
const {get_my_blogs} = require("../controllers/blogs/get_my_blogs")
const {update_blog} = require("../controllers/blogs/update_blog")
const {is_authenticated} = require("../middleware/authentication")

router.post("/blog",is_authenticated,add_blog)
router.delete("/blog/:id",is_authenticated,delete_blog)
router.get("/feed",is_authenticated,get_all_blogs)
router.get("/myblogs",is_authenticated,get_my_blogs)
router.patch("/blog/:id",is_authenticated,update_blog)