import { createSlice } from "@reduxjs/toolkit";

const user_slice = createSlice({
    name: 'user',
    initialState: {
        loading: true,
        isAuth: false,
        user: null,
        error: null
    },
    reducers: {
        registerUserreq(state, action) {
            state.loading = true;
            state.isAuth = false;
        },
        registerUsersuccess(state, action) {
            state.loading = false;
            state.isAuth = true;
            state.user = action.payload;
        },
        registerUserfail(state, action) {
            state.loading = false;
            state.isAuth = false;
            state.error = action.payload;
            state.user = null;
        },
        loginRequest(state, action) {
            state.loading = true;
            state.isAuth = false;
        },
        loginRequestSuccess(state, action) {
            state.loading = false;
            state.isAuth = true;
            state.user = action.payload;
            state.error = null;
        },
        loginRequestFail(state, action) {
            state.loading = false;
            state.isAuth = false;
            state.error = action.payload;
        },
        loadUserRequest(state, action) {
            state.loading = true;
            state.isAuth = false;
        },
        loadUserRequestSuccess(state, action) {
            state.loading = false;
            state.isAuth = true;
            state.user = action.payload;

        },
        loadUserRequestFail(state, action) {
            state.loading = false;
            state.isAuth = false;
            state.user = null;
            state.error = action.payload;
        },
        loadAuthorRequest(state, action) {
            state.loading = true;
            state.isAuth = false;
        },
        loadAuthorRequestSuccess(state, action) {
            state.loading = false;
            state.isAuth = true;
            state.user = action.payload;

        },
        loadAuthorRequestFail(state, action) {
            state.loading = false;
            state.isAuth = false;
            state.user = null;
            state.error = action.payload;
        },
        clearErrors(state) {
            state.loading = true;
            state.error = null;
        },
    },
})

export const user_actions = user_slice.actions;
export default user_slice;
