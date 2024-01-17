const { Mongoose } = require("mongoose");
const User = require("../../models/user");
const Blog = require("../../models/blog");

exports.add_like = async (req, res) => {
  try {
    const { blogid } = req.params;
    const { _id } = req.user;
    if (!_id && !blogid) {
      return res.status(400).json({
        status: false,
        message: "Please enter correct id",
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
    userBlog.likes = userBlog.likes + 1;
    userBlog.save();
    res.status(201).json({
      success: true,
      message: "Like Count is updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};
