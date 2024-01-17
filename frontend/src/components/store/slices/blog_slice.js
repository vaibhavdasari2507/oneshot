import { createSlice } from "@reduxjs/toolkit";

const blog_slice = createSlice({
    name: 'blog',
    initialState: {
        loading: true,
        add_success: false,
        update_success: false,
        delete_success: false,
        get_success: false,
        get_my_success: false,
        blogdata: [],
        myblogdata: [],
        error: null
    },
    reducers: {
        addBlogRequest(state,action){
            state.loading = true;
            state.add_success = false;
        },
        addBlogSuccess(state,action){
            state.loading = false;
            state.add_success = true;
            state.blogdata = action.payload;
        },
        addBlogFail(state,action){
            state.loading = false;
            state.add_success = false;
            state.error = action.payload;
        },
        getAllBlogsRequest(state,action){
            state.loading = true;
            state.get_success = false;

        },
        getAllBlogsSuccess(state,action){
            state.loading = false;
            state.get_success = true;
            state.blogdata = action.payload;
        },
        getAllBlogsFail(state,action){
            state.loading = false;
            state.get_success = false;
            state.error = action.payload;
        },
        getMyBlogsRequest(state,action){
            state.loading = true;
            state.get_my_success = false;
        },
        getMyBlogsSuccess(state,action){
            state.loading = false;
            state.get_my_success = true;
            state.myblogdata = action.payload;
        },
        getMyBlogsFail(state,action){
            state.loading = false;
            state.get_my_success = false;
            state.error = action.payload;
        },
        getAuthorBlogsRequest(state,action){
            state.loading = true;
            state.get_my_success = false;
        },
        getAuthorBlogsSuccess(state,action){
            state.loading = false;
            state.get_my_success = true;
            state.myblogdata = action.payload;
        },
        getAuthorBlogsFail(state,action){
            state.loading = false;
            state.get_my_success = false;
            state.error = action.payload;
        },
        deleteBlogRequest(state,action){
            state.loading = true;
            state.delete_success = false;
        },
        deleteBlogSuccess(state,action){
            state.loading = false;
            state.delete_success = true;
        },
        deleteBlogFail(state,action){
            state.loading = false;
            state.delete_success = false;
            state.error = action.payload;
        },
        updateBlogRequest(state,action){
            state.loading = true;
            state.update_success = false;
        },
        updateBlogSuccess(state,action){
            state.loading = false;
            state.update_success = true;
            state.blogdata = action.payload;
        },
        updateBlogFail(state,action){
            state.loading = false;
            state.update_success = false;
            state.error = action.payload;
        },
        clearErrors(state,action){
            state.loading = true;
            state.error = null;
        },
    },
})

export const blog_actions = blog_slice.actions;
export default blog_slice;
