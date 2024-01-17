import React, { useState } from 'react';
import { login } from '../store/actions/user_action';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate  } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate ();
    const user_state = useSelector(state => state.user);
    const { loading, isAuth, user, error } = user_state;
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
        // console.log('Login data:', formData);
        dispatch(login(formData));
        if(isAuth)  navigate('/blogpage')
        else console.log('i failed');
    };

    return (
      <>
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

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </>
    );
};

export default LoginForm;
