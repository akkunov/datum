import {createSlice} from "@reduxjs/toolkit";
import {AddClinic, getClinics} from "./clinicThunk.js";
const employees = [{
            id: 0,
            post: {
                id: 0,
                code: "string",
                en: "string",
                ru: "string",
                kg: "string"
            },
            enabled: true,
            deleted: true,
            everyWeek: true,
            onEvenWeeks: true,
            user: {
                id: 0,
                email: "string",
                role: "USER",
                person: {
                    id: 0,
                    firstname: "string",
                    surname: "string",
                    patronymic: "string",
                    address: "string",
                    phone: "string",
                    email: "string",
                    country: "string",
                    male: true,
                    family: true,
                    issue: "2023-09-24",
                    expiry: "2023-09-24",
                    authority: "string",
                    birthDay: "2023-09-24",
                    passportSeries: "string",
                    passportNumber: 0,
                    pin: 0
                },
            }
}]
const initialState = {
    isLoading: false,
    clinic: [{
        id: null,
        name: null,
        phone: null,
        address: null,
        departments:[{
            id: null,
            name: null,
            phone: null,
            address: null,
            employees: employees,
            chairs: [{
                name:null,
                id: null,
            }]
        }]
    }]


};


const ClinicSlice = createSlice({
    name: 'clinic',
    initialState,
    reducers : {},
    extraReducers: {
        [AddClinic.pending]: (state, action) => {
            state.isLoading= true;
        },
        [AddClinic.fulfilled]: (state, action) =>{
               state.clinic = action.payload;
        },
        [getClinics.fulfilled]: (state, action) => {
            state.clinic = action.payload
        }
    }
})

export default  ClinicSlice.reducer