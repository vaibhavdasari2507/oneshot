const Blog = require("../../models/blog");
const User  = require('../../models/user');

exports.get_author_blogs = async (req,res)=>{
    try{
        const user = req.user;
        const id = req.params.id;
        console.log("i am in blog controller");
        console.log(user);
        if(user){
            // const blogs = await User.findById(user._id).populate("blogs");
            const blogs = await Blog.find({author: id})
            console.log("i am in author blogs controller");
            console.log(blogs);
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