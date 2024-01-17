const { Mongoose } = require("mongoose");
const Comment = require("../../models/comment");
const User = require("../../models/user");
const Blog = require("../../models/blog");

exports.add_comment = async (req, res) => {
  try {
    const { blogid } = req.params;
    const { _id } = req.user;
    const { content } = req.body;
    if (!_id && !blogid) {
      return res.status(400).json({
        status: false,
        message: "Please enter correct id",
      });
    }
    if (!content) {
      return res.status(400).json({
        status: false,
        message: "content is empty",
      });
    }
    let userBlog = await Blog.findById(blogid);
    let user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found!!",
      });
    }
    if (!userBlog) {
      return res.status(404).json({
        status: false,
        message: "Blog not found!!",
      });
    }
    let newComment = new Comment({
      user: user._id,
      blog: userBlog._id,
      content: content,
    });
    newComment = await newComment.save();
    res.status(201).json({
      success: true,
      message: "Comment Created successfully",
      data: newComment,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};
