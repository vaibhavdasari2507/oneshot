const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
    comment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post.comments',
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
})

module.exports = mongoose.model('Comment', commentSchema);