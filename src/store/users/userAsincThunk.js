import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "../../servic/AuthService.js";
import axios from "axios";

export const LoginUser = createAsyncThunk(
    'user/fetchUser',
    async  function (data, {rejectWithValue}){
        try {
            const {email, password } = data;
            console.warn(data)
            const response  = await AuthService.login(email,password)
            // if(!response.ok){
            //     throw new Error('server error')
            // }
            console.log(response.data)
            return response
        }catch (e){
            return rejectWithValue(e?.message)
        }
    }
    )