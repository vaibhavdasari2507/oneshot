// Post.js
import React from 'react';

const Post = ({ author, content, onLike, onComment }) => {
    return (
        <div>
            <div>
                <a href={`/profile/${author.id}`}>
                    {/* Replace 'profile' with the actual route for the user profile */}
                    {author.name}'s Profile
                </a>
            </div>
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
