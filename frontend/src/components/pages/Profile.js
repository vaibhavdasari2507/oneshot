import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Assuming you're using Redux to manage state
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { userId } = useParams(); // Assuming you have a userId parameter
    const [userProfile, setUserProfile] = useState(null);

    // Example: Get user profile data from Redux store or API
    const user = useSelector((state) => state.users.find((user) => user.id === userId));

    useEffect(() => {
        // Fetch additional user profile data, such as the number of posts
        // You can replace this with your actual data fetching logic
        if (user) {
            // Simulated API call to get the number of posts
            const numberOfPosts = 5; // Replace with your actual logic

            setUserProfile({
                username: user.username,
                numberOfPosts,
                profilePic: user.profilePic, // Assuming user object has a profilePic property
                // Add other fields as needed
            });
        }
    }, [userId, user]);

    return (
        <div>
            {userProfile ? (
                <div>
                    <h2>{userProfile.username}'s Profile</h2>
                    <img src={userProfile.profilePic} alt="Profile" style={{ width: '100px', height: '100px' }} />
                    <p>Number of Posts: {userProfile.numberOfPosts}</p>

                    {/* Example: Display user's posts */}
                    <div>
                        <h3>My Posts</h3>
                        <ul>
                            {/* Replace this with your actual list of posts */}
                            <li>Post 1</li>
                            <li>Post 2</li>
                            <li>Post 3</li>
                            {/* ... */}
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
