const Blog = require("../../models/blog");

exports.delete_blog = async (req, res) => {
  try {
    const id = req.params.id;
    let userPost = await Post.findById(id);
    if(!userPost) {
        return res.status(404).json({
            status: true,
            message: "Blog not found"
        })
    }
    if(userPost.author !== req.user._id){
        return res.status(403).json({
            status: false,
            message: "Don't have access to this post"
        })
    }
    await Blog.findByIdAndDelete(id)
    res.status(200).json({
        status: true,
        message: "Deleted Blog"
    })
  } catch (err) {
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: err.message,
    });
  }
};
