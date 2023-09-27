import {createSlice} from "@reduxjs/toolkit";
import {CheckEmail, LoginUser} from "./userAsincThunk.js";

const initialState = {
    user :null,
    email: null,
    accessToken: null,
    refreshToken: null,
    errors: null,
    errorEmail: null,
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
    },
    userInfo : {
        name: null,
        firstName: null,
        passportSeries: null,
        phone: null,
        date: null
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        inc : (state, action) => {
            state.email = 'hello'
        },
        user: (state, action) => {
            console.log(action.payload)
            state.userInfo.name = action.payload.name;
            state.userInfo.firstName = action.payload.firstName;
            state.userInfo.passportSeries = action.payload.passportSeries;
            state.userInfo.phone = action.payload.phone;
            state.userInfo.date = action.payload.date;
        },
        checkEmail: (state,action) => {
            console.log(action.payload);
            state.errorEmail = action.payload;
        },
    },

    extraReducers : {
        [LoginUser.pending]: (state) =>{
            state.isLoading = true;
        },
        [LoginUser.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false
            state.isAuth = true;
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            localStorage.setItem('refreshToken', action.payload.refresh_token)
            localStorage.setItem('accessToken', action.payload.access_token)
            state.errors = null

        },
        [LoginUser.rejected]: (state, action) => {
            console.log('========>',action.payload)
            state.isAuth =false
            state.isLoading = false
            if(action.payload.status ==403){
                state.errors = "Неверный логин или пароль";
            }
        },
        [CheckEmail.fulfilled]: (state, action) => {
            state.errorEmail = action.payload
        }
    }
})
export  const {user,checkEmail} = userSlice.actions
export default  userSlice.reducer