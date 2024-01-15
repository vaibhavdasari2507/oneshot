// Home.js
import React from 'react';
const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <a href='/login'>
                Login
            </a>
            <br></br>
            <a href='/signup'>
                Signup
            </a>
        </div>
    );
};

export default Home;