const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            content: { type: String, required: true },
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now },
            likes: { type: Number, default: 0 },
        },
    ]
})

module.exports = mongoose.model("Post", postSchema);