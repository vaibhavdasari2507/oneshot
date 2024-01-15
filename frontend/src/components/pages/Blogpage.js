// Example usage in another component or route
import React from 'react';
import { useParams } from 'react-router-dom'; // If using the profile link with parameters
import Post from './Post';

const Blogpage = () => {
    // Replace this with actual data and functions
    const author = { id: 123, name: 'John Doe' };
    const content = 'This is the content of the blog post.';

    const handleLike = () => {
        // Handle the like functionality
        console.log('Liked!');
    };

    const handleComment = () => {
        // Handle the comment functionality
        console.log('Commented!');
    };

    return (
        <div>
            <a href='/myprofile'>My profile</a>
            <Post
                author={author}
                content={content}
                onLike={handleLike}
                onComment={handleComment}
            />
            <Post
                author={author}
                content={content}
                onLike={handleLike}
                onComment={handleComment}
            />
        </div>
    );
};

export default Blogpage;
