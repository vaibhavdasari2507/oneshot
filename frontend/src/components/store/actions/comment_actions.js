import { comment_actions } from "../slices/comment_slice";

import axios from "axios";
const setToken = (token) => {
    localStorage.setItem("userToken", JSON.stringify(token))
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem('userToken'))
}

export const getConfig = () => {
    let token = getToken()
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}

export const get_comments = (blogid) => async (dispatch) => {
    try {
        console.log("i am in get comments id");
        console.log(blogid);
        dispatch(comment_actions.loadCommentRequest());
        const res = await axios.get(`http://localhost:8000/comment/${blogid}`, getConfig());
        const success = await res.data.success;
        if (success) {
            dispatch(comment_actions.loadCommentRequestSuccess(res.data.data));
        }
        else {
            dispatch(comment_actions.loadCommentRequestFail(res.message));
        }
    }
    catch (err) {
        dispatch(comment_actions.loadCommentRequestFail(err.message));
    }
}