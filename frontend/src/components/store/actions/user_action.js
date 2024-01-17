import { user_actions } from "../slices/user_slice";
import axios from "axios";

const setToken = (token) => {
    localStorage.setItem("userToken", JSON.stringify(token))
}

const getToken = () => {
    return JSON.parse(localStorage.getItem('userToken'))
}

const getConfig = () => {
    let token = getToken()
    // console.log("i am token "+token);
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}

export const signup = (user_data) => async (dispatch) => {
    try {
        dispatch(user_actions.registerUserreq());
        const res = await axios.post('http://localhost:8000/user/signup', user_data)
        console.log(res);
        const token = res.data.token;
        const success = res.data.success;
        setToken(token)
        // console.log(res.data.success);
        if (success) {
            // console.log('i success');
            dispatch(user_actions.registerUsersuccess(token));
        }
        else {
            // console.log('i fail');
            dispatch(user_actions.registerUserfail(res.message));
        }

    }
    catch (err) {
        dispatch(user_actions.registerUserfail(err.message));
    }
}

export const login = (user_data) => async (dispatch) => {
    try {
        dispatch(user_actions.loginRequest());
        const res = await axios.post('http://localhost:8000/user/login', user_data);
        const token = await res.data.token;
        const success = await res.data.success;
        setToken(token)
        if (success) {
            dispatch(user_actions.loginRequestSuccess(token));
        }
        else {
            dispatch(user_actions.loginRequestFail(res.message));
        }
    }
    catch (err) {
        dispatch(user_actions.loginRequestFail(err.message));
    }
}

export const load_user = () => async (dispatch) => {
    try {
        dispatch(user_actions.loadUserRequest());
        const res = await axios.get('http://localhost:8000/user/myprofile', getConfig());
        // console.log("i am res ");
        // console.log(res.data.data);
        const success = await res.data.success;
        const user = await res.data.data;
        if (success) {
            dispatch(user_actions.loadUserRequestSuccess(user));
        }
        else {
            dispatch(user_actions.loadUserRequestFail(res.message));
        }
    }
    catch (err) {
        dispatch(user_actions.loadUserRequestFail(err.message));
    }
}

export const load_author = (author_id) => async (dispatch) => {
    try {
        dispatch(user_actions.loadAuthorRequest());
        const res = await axios.get(`http://localhost:8000/user/authorprofile/${author_id}`);
        const success = await res.data.success;
        const author = await res.data.data;
        if (success) {
            dispatch(user_actions.loadAuthorRequestSuccess(author));
        }
        else {
            dispatch(user_actions.loadAuthorRequestFail(res.message));
        }
    }
    catch (err) {
        dispatch(user_actions.loadAuthorRequestFail(err.message));
    }
}