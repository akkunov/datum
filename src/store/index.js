import {configureStore} from "@reduxjs/toolkit";
import userReduser from './users/userSlice.js'
import clinicReduser from "./clinic/ClinicSlice.js";


export const store = configureStore({
    reducer: {user: userReduser,
              clinic: clinicReduser
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})