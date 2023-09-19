import {createSlice} from "@reduxjs/toolkit";
import { LoginUser} from "./userAsincThunk.js";

const initialState = {
    user :null,
    email: null,
    accessToken: null,
    refreshToken: null,
    password: "string",
    role: "USER",
    isAuth: false,
    isLoading: false,
    person: {
        firstname: "string",
        surname: "string",
        patronymic: "string",
        address: "string",
        phone: "string",
        email: "string",
        country: "string",
        family: true,
        male: true,
        issue: "2023-09-12",
        expiry: "2023-09-12",
        authority: "string",
        birthDay: "2023-09-12",
        passportSeries: "string",
        passportNumber: 0,
        pin: 0
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        inc : (state, action) => {
            state.email = 'hello'
        }
    },
    extraReducers : {
        [LoginUser.pending]: (state) =>{
            state.isLoading = true;
        },
        [LoginUser.fulfilled]: (state, action) => {
            console.log(action.payload)
            // state.refreshToken= action.refresh_token;

        }
    }
})
export default  userSlice.reducer