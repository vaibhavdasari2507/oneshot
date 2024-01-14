import { user_actions } from "../slices/user_slice";
import axios from "axios";

export const signup = (user_data) => async (dispatch) => {
    try {
        dispatch(user_actions.registerUserreq());
        const res = await axios.post('http://localhost:8000/user/signup', user_data)
        const token = await res.token;
        const success = await res.success;

        if (success) {
            dispatch(user_actions.registerUsersuccess(token));
        }
        else {
            dispatch(user_actions.registerUserfail(res.message));
        }

    }
    catch (err) {
        dispatch(user_actions.registerUserfail(err.message));
    }
}

export const login = (user_data) => async (dispatch) => {
    try{
        dispatch(user_actions.loginRequest());
        const res = await axios.post('http://localhost:8000/user/login', user_data);
        const token = await res.token;
        const success = await res.success;
        if(success){
            dispatch(user_actions.loginRequestSuccess(token));
        }
        else{
            dispatch(user_actions.loginRequestFail(res.message));
        }
    }
    catch (err) {
        dispatch(user_actions.loginRequestFail(err.message));
    }
}

export const load_user = () => async (dispatch) => {
    try{
        dispatch(user_actions.loadUserRequest());
        const res = await axios.get('http://localhost:8000/user/profile');
        const success = await res.success;
        const user = await res.data;
        if(success){
            dispatch(user_actions.loadUserRequestSuccess(user));
        }
        else{
            dispatch(user_actions.loadUserRequestFail(res.message));
        }
    }
    catch (err) {
        dispatch(user_actions.loadUserRequestFail(err.message));
    }
}