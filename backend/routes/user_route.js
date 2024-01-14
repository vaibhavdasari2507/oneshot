const express = require("express");
const { body } = require('express-validator');
const router = express.Router();
const { signup } = require("../controllers/user/signup");
const signup_validation  = [
    body('username').notEmpty().isString(),
    body('password').notEmpty().isString(),
    body('email').isEmail(),
    body('name').notEmpty().isString(),
    body('age').notEmpty().isInt(),
];


router.post('/user/signup',signup_validation,signup);

module.exports = router;