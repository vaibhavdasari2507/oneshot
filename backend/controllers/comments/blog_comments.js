const Comment = require("../../models/comment");
const Blog = require("../../models/blog");

exports.blog_comments = async (req, res) => {
  try {
    const { blogid } = req.params;
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
    });
    res.status(201).json({
      success: true,
      message: "Comments",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};
