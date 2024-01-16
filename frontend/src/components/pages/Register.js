import React, { useState } from 'react';
import { signup } from '../store/actions/user_action';
import {useDispatch} from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './header/navbar';

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
      <>
        <Navbar />
        <div
          className="container-fluid"
          style={{
            minWidth: "400px",
            width: "50%",
            border: "2px solid black",
            borderRadius: "10px",
            padding: "20px",
            marginTop: "10%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputusername" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputusername"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <span classNameName="error">{errors.username}</span>
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span classNameName="error">{errors.password}</span>
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword2" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword2"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <span classNameName="error">{errors.password}</span>
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword3" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword3"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <span classNameName="error">{errors.password}</span>
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword4" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword4"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <span classNameName="error">{errors.password}</span>
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </>
    );
};

export default RegistrationForm;
