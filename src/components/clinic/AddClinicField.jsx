import {TextField} from "@mui/material";
import React from "react";
import {Controller} from "react-hook-form";



export const AddClinicField = ({control, clinic}) => {
    if(clinic){
	return<>
		<Controller
		    render={({field}) => <TextField
			autoFocus
			margin="dense"
			id="name"
			label="Название клиники"
			type="text"
			fullWidth
			variant="standard"
			required={true}
			{...field}
		    /> }
		    name="name"
		    control={control}
		    defaultValue=""
		/>
		<Controller
		    name="department"
		    control={control}
		    defaultValue=""
		    render={({field})=><TextField
			autoFocus
			margin="dense"
			id="name"
			label="Филиал"
			type="text"
			fullWidth
			variant="standard"
			required={true}
			{...field}
		    /> }
		/>
		<Controller render={({field}) => <TextField
		    autoFocus
		    margin="dense"
		    id="name"
		    label="Адрес"
		    type="adress"
		    fullWidth
		    variant="standard"
		    required={true}
		    {...field}
		/>}
			    name={'address'}
			    control={control}
			    defaultValue={''}

		/>
		<Controller
		    render={({field}) =>  <TextField
			autoFocus
			margin="dense"
			id="name"
			label="Телефон"
			type="text"
			fullWidth
			variant="standard"
			required={true}
			{...field}
		    />}
		    name={'phone'}
		    control={control}
		    defaultValue={''}
		/>

	    </>
    }else {
	return<>
	    <Controller
		name="department"
		control={control}
		defaultValue=""
		render={({field})=><TextField
		    autoFocus
		    margin="dense"
		    id="name"
		    label="Филиал"
		    type="text"
		    fullWidth
		    variant="standard"
		    required={true}
		    {...field}
		/> }
	    />
	    <Controller render={({field}) => <TextField
		autoFocus
		margin="dense"
		id="name"
		label="Адрес"
		type="adress"
		fullWidth
		variant="standard"
		required={true}
		{...field}
	    />}
			name={'address'}
			control={control}
			defaultValue={''}

	    />
	    <Controller
		render={({field}) =>  <TextField
		    autoFocus
		    margin="dense"
		    id="name"
		    label="Телефон"
		    type="text"
		    fullWidth
		    variant="standard"
		    required={true}
		    {...field}
		/>}
		name={'phone'}
		control={control}
		defaultValue={''}
	    />

	</>
    }

}