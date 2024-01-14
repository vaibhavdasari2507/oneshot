import { configureStore } from "@reduxjs/toolkit";

import user_slice from "./slices/user_slice";

const store = configureStore({
    reducer: {
        user:user_slice.reducer,
    },
});

export default store;
