import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Assuming you're using Redux to manage state
import { useParams } from 'react-router-dom';
import { load_user } from '../store/actions/user_action';
import { get_my_blogs } from '../store/actions/blog_actions';
import Post from './Post';
const Profile = () => {
    const dispatch = useDispatch();
    const profile_state = useSelector(state => state.user);
    const blogs_state = useSelector(state => state.blog);
    const { loading, isAuth, user, error } = profile_state;
    const { myblogdata } = blogs_state;

    useEffect(() => {
        dispatch(load_user());
        dispatch(get_my_blogs());
    }, [dispatch]);
    // console.log("hello i am user");
    // console.log(user);


    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && isAuth && user && (
                <div className="container mt-4">
                    <div className="container d-flex justify-content-center">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{user.username}</h5>
                                            <p className="card-text">{user.email}</p>
                                            <a href="#" className="btn btn-primary">Edit Profile</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="row">
                                        {myblogdata.map(blog => (
                                            <Post key={blog._id} title={blog.title} author={blog.author} content={blog.content} attach_url={blog.attach_url} onLike={() => { }} onComment={() => { }} like={blog.like} commentcontent={blog.commentcontent} setContent={() => { }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
};

export default Profile;
