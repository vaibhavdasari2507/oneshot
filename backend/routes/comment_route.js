const { Router } = require("express");
const router = Router();

const { add_comment } = require("../controllers/comments/add_comment");
const { blog_comments } = require("../controllers/comments/blog_comments");
const { is_authenticated } = require("../middleware/authentication");

router.post("/comment/:blogid", is_authenticated, add_comment);
router.get("/comment/:blogid", is_authenticated, blog_comments);

module.exports = router;
