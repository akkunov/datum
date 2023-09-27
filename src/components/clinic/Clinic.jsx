import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {AddClinic, getClinics} from "../../store/clinic/clinicThunk.js";
import {ClinicItem} from "./ClinicItem.jsx";
import DepartmentDialog from "./departmentDialog.jsx";

export const ClinicC = () => {
    const dispatch = useDispatch()
    const dataSubmit = (data, rooms) =>{
        const dataField = {
            name: data.name,
            departments: [{
                    name: data.department,
                    address: data.address,
                    phone: data.phone,
                    rooms
                }
            ]

        }
        console.log(dataField)
        dispatch(AddClinic(dataField))
    }



    useEffect(() => {
        console.log('dsg')
        dispatch(getClinics())


    },[])
    return (
        <div>
            {/*<BsBuildingFillAdd/>*/}

            <DepartmentDialog
                clinic={true}
                dataSubmit={dataSubmit}
                btnTitle={'Создание клиники'}
            />


            <ClinicItem />
        </div>
    )
}