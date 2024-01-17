import { blog_actions } from "../slices/blog_slice";
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
export const add_blog = (blog_data) => async (dispatch) => {
    try {
        dispatch(blog_actions.addBlogRequest());
        const res = await axios.post('http://localhost:8000/blog/add', blog_data);
        const success = await res.data.success;
        if (success) {
            dispatch(blog_actions.addBlogSuccess(res.data.data));
        }
        else {
            dispatch(blog_actions.addBlogFail(res.message));
        }
    }
    catch (err) {
        dispatch(blog_actions.addBlogFail(err.message));
    }
}

export const get_all_blogs = () => async (dispatch) => {
    try {
        dispatch(blog_actions.getAllBlogsRequest());
        const res = await axios.get('http://localhost:8000/feed');
        const success = await res.data.success;
        if (success) {
            // console.log(res.data.data);
            dispatch(blog_actions.getAllBlogsSuccess(res.data.data));
        }
        else {
            dispatch(blog_actions.getAllBlogsFail(res.message));
        }
    }
    catch (err) {
        dispatch(blog_actions.getAllBlogsFail(err.message));
    }
}

export const get_my_blogs = () => async (dispatch) => {
    try {
        dispatch(blog_actions.getMyBlogsRequest());
        const res = await axios.get('http://localhost:8000/blog/myblogs', getConfig());
        const success = await res.data.success;
        // console.log("i am in get my blogs");
        // console.log(res.data.data);
        if (success) {
            dispatch(blog_actions.getMyBlogsSuccess(res.data.data));
        }
        else {
            dispatch(blog_actions.getMyBlogsFail(res.message));
        }
    }
    catch (err) {
        dispatch(blog_actions.getMyBlogsFail(err.message));
    }
}

export const get_author_blogs = (id) => async (dispatch) => {
    try {
        console.log("i am in get author blogs");
        console.log(id);
        dispatch(blog_actions.getAuthorBlogsRequest());
        const res = await axios.get(`http://localhost:8000/author/${id}`,getConfig());
        const success = await res.data.success;
        console.log(success);
        if (success) {
            dispatch(blog_actions.getAuthorBlogsSuccess(res.data.data));
        }
        else {
            dispatch(blog_actions.getAuthorBlogsFail(res.message));
        }
    }
    catch (err) {
        dispatch(blog_actions.getAuthorBlogsFail(err.message));
    }

}

export const delete_blog = (id) => async (dispatch) => {
    try {
        dispatch(blog_actions.deleteBlogRequest());
        const res = await axios.delete(`http://localhost:8000/blog/${id}`, getConfig());
        const success = await res.data.success;
        if (success) {
            dispatch(blog_actions.deleteBlogSuccess(id));
        }
        else {
            dispatch(blog_actions.deleteBlogFail(res.message));
        }
    }
    catch (err) {
        dispatch(blog_actions.deleteBlogFail(err.message));
    }
}

export const update_blog = (id, blog_data) => async (dispatch) => {
    try {
        dispatch(blog_actions.updateBlogRequest());
        const res = await axios.patch(`http://localhost:8000/blog/${id}`, blog_data, getConfig());
        const success = await res.data.success;
        if (success) {
            dispatch(blog_actions.updateBlogSuccess(res.data.data));
        }
        else {
            dispatch(blog_actions.updateBlogFail(res.message));
        }
    }
    catch (err) {
        dispatch(blog_actions.updateBlogFail(err.message));
    }
}