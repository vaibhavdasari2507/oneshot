import { configureStore } from "@reduxjs/toolkit";

import user_slice from "./slices/user_slice";
import blog_slice from "./slices/blog_slice";

const store = configureStore({
    reducer: {
        user:user_slice.reducer,
        blog:blog_slice.reducer
    },
});

export default store;
