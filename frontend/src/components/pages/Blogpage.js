// Example usage in another component or route
import React from 'react';
import Post from './Post';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_blogs } from '../store/actions/blog_actions';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getConfig } from '../store/actions/blog_actions';
const Blogpage = () => {
    const dispatch = useDispatch();
    const blog_state = useSelector((state) => state.blog);
    const { blogdata } = blog_state;
    const { blogid } = useParams();
    const [content,setContent] = useState('');
    // // Replace this with actual data and functions
    // const author = { id: 123, name: 'John Doe' };
    // const content = 'This is the content of the blog post.';
    useEffect(() => {
        dispatch(get_all_blogs());
        // Fetch all blogs when the component mounts
    }, [dispatch]);


    const handleLike = async (blogid) => {
        try {
            const res = await axios.put(`https://oneshot-backend-gvok.onrender.com/like/${blogid}`);
            console.log(res);
            alert("liked")
        }
        catch (err) {
            console.log(err.message);
        }
        // console.log('Liked!');
    };

    const handleComment = async (blogid) => {

        try {
            console.log(blogid);
            const res = await axios.post(`https://oneshot-backend-gvok.onrender.com/comment/${blogid}`,{
                content
            },getConfig()); 
            alert("commented")
        }
        catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div>
            <div className="mt-4">
                <div className="container d-flex justify-content-center">
                    <div className="col-9">
                        <div className="row">
                            <div className="col-8">
                                <div className="d-flex flex-column mt-4 mb-4">
                                    {blogdata.map(blog => (
                                        <Post
                                            key={blog._id} 
                                            blogid={blog._id}
                                            title={blog.title}
                                            author={blog.author}
                                            content={blog.content}
                                            like={blog.likes}
                                            attach_url={blog.attach_url}
                                            onLike={() => handleLike(blog._id)} // You may want to pass the blog id to handleLike
                                            onComment={() => handleComment(blog._id)}
                                            commentcontent={content}
                                            setContent = {(content)=>{
                                                setContent(content);
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogpage;
