const Blog = require("../../models/blog");

exports.update_blog = async(req,res) => {
    try {
        const id = req.params.id
        let userBlog = Blog.findById(id)
        if (!userBlog) {
            return res.status(404).json({
            status: true,
            message: "Blog not found",
            });
        }
        if (userBlog.author !== req.user._id) {
            return res.status(403).json({
            status: false,
            message: "Don't have access to this post",
            });
        }
        if(req.body.title)
            userBlog.title = req.body.title
        if(req.body.content)
            userBlog.content = req.body.content
        await userBlog.save()
        res.status(200).json({
            status: true,
            message: "Updated Blog",
            data: userBlog
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        });
    }
}