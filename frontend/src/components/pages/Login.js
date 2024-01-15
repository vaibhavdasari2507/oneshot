import React, { useState } from 'react';
import { login } from '../store/actions/user_action';
import {useDispatch} from 'react-redux';
import { useNavigate  } from 'react-router-dom';
const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate ();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Basic validation
        if (name === 'username' && value.trim() === '') {
            setErrors({ ...errors, username: 'Username is required' });
        } else if (name === 'password' && value.trim() === '') {
            setErrors({ ...errors, password: 'Password is required' });
        } else {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for any remaining errors before submitting
        for (const key in formData) {
            if (formData.hasOwnProperty(key) && formData[key].trim() === '') {
                setErrors({ ...errors, [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required` });
                return;
            }
        }

        // Perform registration logic here using formData
        console.log('Login data:', formData);
        dispatch(login(formData));
        navigate('/blogpage')
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                <span className="error">{errors.username}</span>
            </label>
            <br />

            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <span className="error">{errors.password}</span>
            </label>
            <br />

            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
