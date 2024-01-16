const Blog = require("../../models/blog");

exports.delete_blog = async (req, res) => {
  try {
    const id = req.params.id;
    const userPost = Post.findById(id);
  } catch (err) {
    
  }
};
