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
export const addDepartments = createAsyncThunk(
    'clinic/addDepartments',
    async function (data, {rejectWithValue}) {
	try {
	    const {dataField, departmentId} = data
	    console.log(dataField, departmentId)
	    const response  = await ClinicService.addDepartment(departmentId,dataField)
	    if(response.status !== 200){
		throw  new Error('server error')
	    }
	    return response.data
	}catch (e){
	    return rejectWithValue(e?.response)
	}
    }
)
export const addRoom = createAsyncThunk(
    'clinic/addRoom',
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
export const addEmployee = createAsyncThunk(
    'clinic/addEmployee',
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
export const addSchedule = createAsyncThunk(
    'clinic/addSchedule',
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

export const addChair = createAsyncThunk(
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

export const deleteClinic = createAsyncThunk(
    'clinic/deleteClinic',
    async function (id, {rejectWithValue,}){
	try{
	    const response = await ClinicService.deleteClinic('516144038039020469')
	    if(response.status !== 200 ){
		throw new Error('server Error')
	    }
	   	return response.data
	}
	catch (e) {
	    return rejectWithValue(e)
	}
    }
)

export const getClinicById = createAsyncThunk(
    'clinic/getClinicById',
    async function(id,{rejectWithValue}) {
	try {
	    const response  = await ClinicService.getClinicById(id)
		if(response.status !== 200){
		    throw  new Error('server error')
		}
		return  response.data
	}catch (e){
	    return rejectWithValue(e.response)
	}
    }
)