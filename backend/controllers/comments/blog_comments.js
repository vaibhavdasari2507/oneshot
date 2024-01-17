const Comment = require("../../models/comment");
const Blog = require("../../models/blog");

exports.blog_comments = async (req, res) => {
  try {
    const { blogid } = req.params;
    console.log(blogid);
    if (!blogid) {
      return res.status(400).json({
        status: false,
        message: "Please enter correct id",
      });
    }
    let userBlog = await Blog.findById(blogid);
    if (!userBlog) {
      return res.status(404).json({
        status: false,
        message: "Blog not found!!",
      });
    }
    const data = await Comment.find({
      blog: userBlog._id,
    }).populate("user", "name");
    res.status(201).json({
      success: true,
      message: "Comments",
      data: data, 
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};
