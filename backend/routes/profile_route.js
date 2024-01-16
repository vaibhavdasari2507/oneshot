const express = require("express");
const router = express.Router();
const { is_authenticated } = require("../middleware/authentication");
const {get_my_profile} = require("../controllers/profile/my_profile");
const {get_author_profile} = require("../controllers/profile/author_profile");

router.get('/user/myprofile',is_authenticated,get_my_profile);
router.get('/user/authorprofile/:id',get_author_profile);


module.exports = router;