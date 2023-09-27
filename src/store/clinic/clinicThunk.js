import {createAsyncThunk} from "@reduxjs/toolkit";
import {ClinicService} from "../../servic/ClinicService.js";

export const AddClinic = createAsyncThunk(
    'clinic/addClinic',
    async function (data, {rejectWithValue}) {
			try {
				const response  = await ClinicService.addClinic(data)
			    	console.log(response)
			    	if(response.status !== 200){
				throw  new Error('server error')
			    }
				    return response.data
			}catch (e){
			    return rejectWithValue(e?.response)
			}
		}
)

export const getClinics = createAsyncThunk(
    'clinic/getClinic',
    async function (_, {rejectWithValue}) {
	try {
	    const response  = await ClinicService.getClinic()
	    if(response.status !== 200){
		throw  new Error('server error')
	    }
	    return response.data
	}catch (e){
	    return rejectWithValue(e?.response)
	}
    }
)