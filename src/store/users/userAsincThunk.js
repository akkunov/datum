import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "../../servic/AuthService.js";
import {codeHelper} from "./userSlice.js";

export const LoginUser = createAsyncThunk(
    'user/loginUser',
    async  function (data, {rejectWithValue, dispatch}){
        const {email, password, navigate } = data
        try {
            const response  = await AuthService.login(email,password);
            if(response.status != 200){
                throw new Error('server error')
            }
            const authToken = response.headers
            console.log(authToken.authorization)
            navigate('/')
            return response
        }catch (e){
            if(e.response?.data?.message == 'Пользователь не активирован') {
                navigate('/code_send')
                dispatch(codeHelper({email, password}))
            }
            return rejectWithValue(e?.response)

        }

    }
)

export const CheckEmail = createAsyncThunk(
    'user/checkEmail',
    async function (email, {rejectWithValue}) {
            try {
                const response = await AuthService.checkEmail(email)
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

export const Registration  = createAsyncThunk(
    'user/registration',
    async function ({email,password,navigate}, {rejectWithValue,dispatch}) {
        try {
            const response  = await AuthService.registration(email,password);
            console.log(response)
            if(response.status !== 200){
                throw new Error('server Error')
            }
            navigate('/code_send')
            dispatch(codeHelper({email,password}))
            return response
        }catch (e){
            return rejectWithValue(e.response)
        }

    }
)
export const Confirm = createAsyncThunk(
    'user/confirmUser',
    async function({email, password, code, navigate},{rejectWithValue}) {
        try {
            const response = await AuthService.confirm(email,password, code);
            if(response.status !== 200) {
                throw new Error('server Error')
            }
            navigate('/')
            return response
        }catch (e) {
            return rejectWithValue(e?.response?.data)
        }
    }
)
