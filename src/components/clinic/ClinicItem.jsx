import {useDispatch, useSelector} from "react-redux";
import Departments from "./Departments.jsx";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "@mui/material";
import {AddClinicField} from "./AddClinicField.jsx";
import {Rooms} from "./Rooms.jsx";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {AddClinic} from "../../store/clinic/clinicThunk.js";
import DepartmentDialog from "./departmentDialog.jsx";

export const ClinicItem  = () => {
    const clinic = useSelector(state => state.clinic )

    const dispatch = useDispatch()

    //Добавление комнаты

    const submit = (data, rooms,departmentId) =>{
	const dataField = {
	    name: data.department,
	    address: data.address,
	    phone: data.phone,
	    rooms
	}
	console.log(dataField, 'id',departmentId)
    }

    return (
	<div className={`container shadow-shadow-soft grid gap-2 m-2`}>
	    {clinic?.clinic.length !== 0 && clinic.clinic.map((clinic, indexClinic) => (
		<div key={clinic.id} className={`container grid gap-2 m-2`}>
		    <div className={`flex flex-col`}>
			<span className={` items-center justify-center align-center`}>Клиника {clinic.name} </span>
			<div>{clinic.departments !==0 && clinic.departments.map((department, indexDep) => (
			    <div key={department.id}>
			    	<Departments
				    {...department}
				/>
			    </div>
				))}
			    <DepartmentDialog
				dataSubmit={submit}
				clinic={false}
				btnTitle={'Добавить филиал'}
				departmentId={clinic.id}
			    />
			</div>
		    </div>


		</div>

	    ))
	    }

	</div>
    )
}