import {configureStore} from "@reduxjs/toolkit";
import userReduser from './users/userSlice.js'


export const store = configureStore({
    reducer: {user: userReduser}

    ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})