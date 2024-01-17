const { Router } = require("express");
const router = Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { add_like } = require("../controllers/likes/add_like");
const { add_blog } = require("../controllers/blogs/add_blog")
const { delete_blog } = require("../controllers/blogs/delete_blog")
const { get_all_blogs } = require("../controllers/blogs/blogs_page")
const { get_my_blogs } = require("../controllers/blogs/my_blogs")
const { update_blog } = require("../controllers/blogs/update_blog")
const { is_authenticated } = require("../middleware/authentication")
const { get_author_blogs } = require("../controllers/blogs/author_blogs")


router.post("/blog/add", is_authenticated, upload.single("attach_url"), add_blog)
router.delete("/blog/:id", is_authenticated, delete_blog)
router.get("/feed", get_all_blogs);
router.get("/myblogs", is_authenticated, get_my_blogs);
router.patch("/blog/:id", is_authenticated, upload.single("attach_url"), update_blog);
router.put("/like/:blogid", add_like);
router.get("/blog/myblogs", is_authenticated, get_my_blogs)
router.get("/author/:id", is_authenticated, get_author_blogs)

module.exports = router;
