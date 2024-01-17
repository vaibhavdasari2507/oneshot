import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'; // Assuming you're using Redux to manage state
import { useParams } from 'react-router-dom';
import { load_user } from '../store/actions/user_action';

const Profile = () => {
    const dispatch = useDispatch();
    dispatch(load_user()); 
    // const { userId } = useParams(); // Assuming you have a userId parameter
    // const [userProfile, setUserProfile] = useState(null);

    // // Example: Get user profile data from Redux store or API
    // const user = useSelector((state) => state.users.find((user) => user.id === userId));

    // useEffect(() => {
    //     // Fetch additional user profile data, such as the number of posts
    //     // You can replace this with your actual data fetching logic
    //     if (user) {
    //         // Simulated API call to get the number of posts
    //         const numberOfPosts = 5; // Replace with your actual logic

    //         setUserProfile({
    //             username: user.username,
    //             numberOfPosts,
    //             profilePic: user.profilePic, // Assuming user object has a profilePic property
    //             // Add other fields as needed
    //         });
    //     }
    // }, [userId, user]);

    return (
        <div>

        </div>
    );
};

export default Profile;
