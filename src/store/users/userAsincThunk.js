import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "../../servic/AuthService.js";
import axios from "axios";
// import {checkEmail} from "./userSlice.js";

export const LoginUser = createAsyncThunk(
    'user/fetchUser',
    async  function (data, {rejectWithValue}){
        try {
            const {email, password } = data;
            // console.warn(data)
            const response  = await AuthService.login(email,password);
            if(response.status != 200){
                throw new Error('server error')
            }
            console.log(response.data)
            return response.data
        }catch (e){
            return rejectWithValue(e?.response)
        }
    }
    )

export const Registration  = createAsyncThunk(
    'user/registration',
    async function ({email,password}, {getState,dispatch}) {
        try {
            console.log('sdgsd',email, password)
            const state = getState().user;
            console.log(state.userInfo)
            const person = {
                firstName: state.userInfo.firstName,
                name: state.userInfo.name,
                phone: state.userInfo.phone,
                birthDay: state.userInfo.date,
                passportSeries: state.userInfo.passportSeries
            }
            console.log({...person, email, password})
            const response  = await AuthService.registration(email,password,person);
            if(response.status == 400){
                dispatch(checkEmail(true))
            }
            console.log(response)
        }catch (e){

        }

    }
)

export const CheckEmail = createAsyncThunk(
    'user/checkEmail',
    async function (email, {rejectWithValue}) {
            try {
                const response = await AuthService.chekEmail(email)
                console.log(response.data)
                if(response.status != 200){
                    throw new Error('server Error')
                }
                return response.data
            }catch (e){
                return rejectWithValue('server error')
            }
    }
)