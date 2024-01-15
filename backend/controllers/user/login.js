const User  = require('../../models/user');
const bcrypt = require('bcryptjs');
const {generate_jwt} = require('../../utils/generate_jwt');

exports.login = async (req,res)=>{
    const user = req.user;
    try{
        if(!user){
            const {username,password} = req.body;
            const login_user = await User.findOne({username});
            if(login_user){
                const is_match = await bcrypt.compare(password,login_user.password);
                if(is_match){
                    generate_jwt(login_user, res)
                }
                else{
                    res.status(401).json({
                        success: false,
                        message: "Invalid credentials",
                    })
                }
            }
            else{
                res.status(401).json({
                    success: false,
                    message: "Invalid credentials",
                })
            }
        }
        else{
            res.status(200).json({
                success: true,
                message: 'Already logged in',
                data: user, 
            });
        }
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        })
    }
}