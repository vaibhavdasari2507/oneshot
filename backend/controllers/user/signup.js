const User  = require('../../models/user');
const {validationResult} = require('express-validator');
const {generate_jwt} = require('../../utils/generate_jwt');


exports.signup = async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            success: false, 
            message: 'Validation failed',
            errors: errors.array()
        })
    }

    const {username,password,email,name,age} = req.body;
    try{
        const user_exists = await User.findOne({username})
        if(user_exists){
            return res.status(409).json({
                success: false,
                message: "Username already exists",
            })
        }

        if(!username || !password || !email || !name || !age){
            return res.status(400).json({
                success: false,
                message: "Data insufficient",
            })
        }

        const user = await User.create({username,password,email,name,age});
        await user.save();

        await generate_jwt(user,res);
    }

    catch(err){
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        })
    }

}