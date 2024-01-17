import { createSlice } from "@reduxjs/toolkit";

const comment_slice = createSlice({
    name: 'comment',
    initialState: {
        loading: true,
        isAuth: false,
        comments: [],
        error: null
    },
    reducers: {
        loadCommentRequest(state, action) {
            state.loading = true;
            state.isAuth = false;
        },
        loadCommentRequestSuccess(state, action) {
            state.loading = false;
            state.isAuth = true;
            state.comments = action.payload;

        },
        loadCommentRequestFail(state, action) {
            state.loading = false;
            state.isAuth = false;
            state.comments = [];
            state.error = action.payload;
        },
        clearErrors(state) {
            state.loading = true;
            state.error = null;
        },
    },
})

export const comment_actions = comment_slice.actions;
export default comment_slice;
