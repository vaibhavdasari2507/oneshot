const express = require("express");
const { body } = require('express-validator');
const router = express.Router();
const { signup } = require("../controllers/user/signup");
const { login } = require("../controllers/user/login");
const { is_authenticated } = require("../middleware/authentication");
const { get_user_profile } = require("../controllers/user/user_profile");
const { login_token_verification } = require("../middleware/login_token_verification");

const signup_validation  = [
    body('username').notEmpty().isString(),
    body('password').notEmpty().isString(),
    body('email').isEmail(),
    body('name').notEmpty().isString(),
    body('age').notEmpty().isInt(),
];


router.post('/user/signup',signup_validation,signup);
// router.post('/user/login',login);
router.post('/user/login',login_token_verification,login);
router.get('/user/profile',is_authenticated,get_user_profile);
module.exports = router;