const Blog = require("../../models/blog");

exports.add_blog = async (req, res) => {
  try {
    let newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id,
    });
    newPost = await newPost.save();
    res.status(201).json({
      success: true,
      message: "Blog Created successfully",
      data: newPost,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};
