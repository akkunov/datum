import {createSlice} from "@reduxjs/toolkit";
import {CheckEmail, Confirm, LoginUser, Registration} from "./userAsincThunk.js";

const initialState = {
    user :null,
    email: null,
    password: null,
    accessToken: null,
    refreshToken: null,
    errors: null,
    errorEmail: null,
    role: "USER",
    isAuth: false,
    isLoading: false,
    active: false,
    person: {
        firstname: null,
        surname: null,
        patronymic: null,
        address: null,
        phone: null,
        email: null,
        country: null,
        family: true,
        male: true,
        issue: null,
        expiry: null,
        authority: null,
        birthDay: null,
        passportSeries: null,
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
        logout: (state,action) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.errors = null;
            state.isAuth= false;
        },
        codeHelper : (state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password

        }
    },

    extraReducers : (builder) => {
        builder
            .addCase(LoginUser.pending, (state, action) => {
                state.isLoading = true;
        })
            .addCase(LoginUser.fulfilled, (state,action)=>{
                console.log(action.payload)
                const accessToken  = action.payload.headers.authorization
                const refreshToken  = action.payload.headers.refreshtoken
                state.isLoading = false
                state.isAuth = true;
                state.accessToken = accessToken
                state.refreshToken = accessToken ;
                localStorage.setItem('refreshToken', refreshToken)
                localStorage.setItem('accessToken', accessToken)
                state.errors = null
        })
            .addCase(LoginUser.rejected, (state, action) => {
                state.isAuth =false
                state.isLoading = false;
                state.errors = action.payload?.data?.message

            })
            .addCase(CheckEmail.fulfilled, (state, action) => {
                state.errorEmail = action.payload
            })
            .addCase(Registration.pending, (state,action) => {
                state.isLoading = true;
            })
            .addCase(Registration.fulfilled, (state, action) => {
                state.isLoading = false
                state.isAuth = true;

                // state.accessToken = action.payload.access_token;
                // state.refreshToken = action.payload.refresh_token;
                // localStorage.setItem('refreshToken', action.payload.refresh_token)
                // localStorage.setItem('accessToken', action.payload.access_token)
                state.errors = null
            })
            .addCase(Registration.rejected, (state, action) => {
                state.isAuth =false;
                state.isLoading = false;
                if (action.payload?.data?.message == 'Вы уже зарегистрированы войдите'){
                    state.errors = 'Вы уже зарегестрировались вернитесь  на страницу логина';
                }else {
                    state.errors = 'server error!';
                }
            })
            .addCase(Confirm.pending, (state, action) => {
                state.isLoading = true;
                console.log(action.payload);
            })
            .addCase(Confirm.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
            })
            .addCase(Confirm.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
            })

    }
})
export  const {user,checkEmail,codeHelper} = userSlice.actions
export default  userSlice.reducer