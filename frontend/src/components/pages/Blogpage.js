// Example usage in another component or route
import React from 'react';
import Post from './Post';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_blogs } from '../store/actions/blog_actions';

const Blogpage = () => {
    const dispatch = useDispatch();
    const blog_state = useSelector((state) => state.blog);
    const {blogdata} = blog_state;
    // // Replace this with actual data and functions
    // const author = { id: 123, name: 'John Doe' };
    // const content = 'This is the content of the blog post.';
    useEffect(() => {
        dispatch(get_all_blogs());
        // Fetch all blogs when the component mounts
    }, [dispatch]);

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
            {blogdata.map(blog => (
                <Post
                    key={blog._id} // Make sure to provide a unique key for each post
                    title={blog.title}
                    author={blog.author}
                    content={blog.content}
                    attach_url={blog.attach_url}
                    onLike={() => handleLike()} // You may want to pass the blog id to handleLike
                    onComment={() => handleComment()} // You may want to pass the blog id to handleComment
                />
            ))}
            {/* <Post
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
            /> */}
        </div>
    );
};

export default Blogpage;
