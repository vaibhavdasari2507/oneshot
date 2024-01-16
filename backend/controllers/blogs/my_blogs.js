const Blog = require("../../models/blog");
const User  = require('../../models/user');

exports.get_my_blogs = async (req,res)=>{
    try{
        const user = req.user;
        if(user){
            const blogs = await User.findById(user._id).populate("blogs");
            res.status(200).json({
                success: true,
                message: "All user blogs fetched successfully",
                data: blogs,
            });
        }
        else{
            res.status(404).json({
                success: false,
                message: "User not found",
            })
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