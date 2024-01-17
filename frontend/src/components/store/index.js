import { configureStore } from "@reduxjs/toolkit";

import user_slice from "./slices/user_slice";
import blog_slice from "./slices/blog_slice";
import comment_slice from "./slices/comment_slice";

const store = configureStore({
    reducer: {
        user:user_slice.reducer,
        blog:blog_slice.reducer,
        comment:comment_slice.reducer,
    },
});

export default store;
