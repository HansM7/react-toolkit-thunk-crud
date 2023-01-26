import { configureStore } from "@reduxjs/toolkit";
// import { userApi } from "../API/user.api";
import { userSlice } from "./users/user.slice";

export const store = configureStore({
    reducer:{
        // [userApi.reducerPath]:userApi.reducer
        users:userSlice.reducer
    },
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware()
    // .concat(userApi.middleware)
})