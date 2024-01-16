import React, { useState } from 'react';
import { signup } from '../store/actions/user_action';
import {useDispatch} from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate ();
    const user_state = useSelector(state => state.user);
    const { loading, isAuth, user, error } = user_state;
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        age: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        age: '',
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
        } else if (name === 'name' && value.trim() === '') {
            setErrors({ ...errors, name: 'Name is required' });
        } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setErrors({ ...errors, email: 'Invalid email format' });
        } else if (name === 'age' && (isNaN(value) || value <= 0)) {
            setErrors({ ...errors, age: 'Age must be a positive number' });
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
        console.log('Registration data:', formData);
        dispatch(signup(formData));
        console.log(isAuth);
        if(isAuth) navigate('/blogpage')
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

            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <span className="error">{errors.name}</span>
            </label>
            <br />

            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <span className="error">{errors.email}</span>
            </label>
            <br />

            <label>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
                <span className="error">{errors.age}</span>
            </label>
            <br />

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
