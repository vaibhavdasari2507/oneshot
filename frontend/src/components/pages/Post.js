// Post.js
import React from 'react';

const Post = ({ title,author, content, attach_url,onLike, onComment }) => {
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <a href={`/profile/${author._id}`}>
                    {/* Replace 'profile' with the actual route for the user profile */}
                    {author.name}'s Profile
                </a>
            </div>
            <img src={attach_url} alt="Post" style={{ width: '100px', height: '100px' }} />
            <div>
                <p>{content}</p>
            </div>
            <div>
                <button onClick={onLike}>Like</button>
                <button onClick={onComment}>Comment</button>
            </div>
        </div>
    );
};

export default Post;
