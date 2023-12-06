import {useDispatch, useSelector} from "react-redux";
import Departments from "./Departments.jsx";
import {Link} from  'react-router-dom'
import React, {useState} from "react";
import {addDepartments, deleteClinic} from "../../store/clinic/clinicThunk.js";
import DepartmentDialog from "./departmentDialog.jsx";
import {MdDelete} from "react-icons/md";

export const ClinicItem  = () => {
    const clinic = useSelector(state => state.clinic )

    const dispatch = useDispatch()
    //Добавление филиала


    const submit = (data, rooms,departmentId) =>{
	const dataField = {
	    name: data.department,
	    address: data.address,
	    phone: data.phone,
	    rooms
	}
	dispatch(addDepartments({dataField, departmentId}))
    }

    const clinicDelete = (id) =>{
	dispatch(deleteClinic(id))
    }

    return (
	<div className={`container  grid gap-2 m-2`}>
	    {clinic?.clinic.length !== 0 && clinic.clinic.map((clinic, indexClinic) => (
		<div key={clinic.id} className={`container grid gap-2 m-2`}>

		    <div className={`flex flex-col`}>
			<div className={`bg-zinc-50 w-fit p-4`}>
			    <Link to={`clinic/${clinic.id}`}>
				<span className={` items-center justify-center align-center text-xl font-bold`}>
				    Клиника {clinic.name}
				</span>
			    </Link>
			    <span onClick={() => clinicDelete(clinic.id)}>
				   <MdDelete  />
			    </span>

			    <div>{clinic.departments !==0 && clinic.departments.map((department, indexDep) => (
				<div key={department.id}>
				    <Departments
					{...department}
				    />
				</div>
			    ))}
			    </div>
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