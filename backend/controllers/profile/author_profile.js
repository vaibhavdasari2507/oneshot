const User  = require('../../models/user');

exports.get_author_profile = async (req,res)=>{
    try{
        const id = req.params.id;
        // console.log("i am in author profile controller");
        // console.log(id);
        const profile = await User.findOne({_id: id});
        if(profile){
            res.status(200).json({
                success: true,
                message: "User profile fetched successfully",
                data: profile,
            })
        }
        else{
            res.status(404).json({
                success: false,
                message: "Not found",
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