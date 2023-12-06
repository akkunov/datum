import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {AddClinic, getClinics} from "../../store/clinic/clinicThunk.js";
import {ClinicItem} from "./ClinicItem.jsx";
import DepartmentDialog from "./departmentDialog.jsx";
const DATA = {
    "name": "Голливудская улыбка",
    "departments": [
        {
            "name": "Главный",
            "address": {
                "phone": [
                    {
                        "number": "+996 777 123456",
                        "whatsapp": true,
                        "telegram": true,
                        "viber": true
                    }
                ],
                "country": "Кыргызстан",
                "city": "Бишкек",
                "region": "string",
                "street": "пр. Чүй",
                "house": 205,
                "apartment": 0,
                "latitude": "42.877317",
                "longitude": "74.600215",
                "iframe": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923\n.8231570293283!2d74.59588357567849!3d42.87657660231409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13\n.1!3m3!1m2!1s0x389eb7ddc401db31%3A0xd868494a462beaa9!2z0JHQtdC70YvQuSDQtNC-0LwsINC_0YDQvtGB0\nL8uINCn0YPQuSwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1699201561246!5m2!1sru!2skg\"\nwidth=\"600\"\nheight=\"450\"\nstyle=\"border:0;\"\nallowfullscreen=\"\"\nloading=\"lazy\"\nreferrerpolicy=\"no-referrer-when-downgrade\">\n</iframe>\n",
                "link": "https://go.2gis.com/gh71q"
            }
        }
    ]
}
export const ClinicC = () => {
    const dispatch = useDispatch()
    navigator.geolocation.getCurrentPosition((position) =>{
        console.log(position.coords.latitude,)
    })

    const dataSubmit = (data, rooms) =>{
        const dataField = {
            name: data.name,
            departments: [{
                    name: data.department,
                    address: {
                        "country": "Кыргызстан",
                        "city": data.address,
                        "region": "string",
                        "street": "пр. Чүй",
                        "house": 205,
                        "apartment": 0,
                        "latitude": "42.877317",
                        "longitude": "74.600215",
                        phone: [{
                            "number": "+996 777 123456",
                            "whatsapp": true,
                            "telegram": true,
                            "viber": true
                        }]
                    },

                    // rooms
                }
            ]

        }
        dispatch(AddClinic(dataField))
    }



    useEffect(() => {
        dispatch(getClinics())


    },[])
    return (
        <div>
            <DepartmentDialog
                clinic={true}
                dataSubmit={dataSubmit}
                btnTitle={'Создание клиники'}
            />
            <ClinicItem />
        </div>
    )
}