const Blog = require("../../models/blog");

exports.get_all_blogs = async (req, res) => {
    try {
        const blogs = await Blog.find({}).populate("author");
        res.status(200).json({
            success: true,
            message: "All blogs fetched successfully",
            data: blogs,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        });
    }
}