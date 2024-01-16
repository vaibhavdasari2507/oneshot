exports.get_my_profile = async (req,res)=>{
    try{
        const user = req.user;
        if(user){
            res.status(200).json({
                success: true,
                message: "User profile fetched successfully",
                data: user,
            })
        }
        else{
            res.status(404).json({
                success: false,
                message: "Forbidden",
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