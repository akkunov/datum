import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "@mui/material";
import {AddClinicField} from "./AddClinicField.jsx";
import {Rooms} from "./Rooms.jsx";


export default function DepartmentDialog (props) {

    //create localstate
    const [open, setOpen] = useState(false);
    const [rooms, setRooms] = useState([{
	name:'',
	chairs: [{
	    name:'',
	}]
    }]);

    // get props
    const {clinic, dataSubmit, btnTitle,  departmentId = 0} = props
    const {control, handleSubmit,} = useForm()
    //Добавление комнаты
    const addRoom = () => {
	setRooms(prev => [...prev, {name, chairs: [{name}]}]); // Добавляем новый инпут в массив
    };
    // Удаление комнаты
    const deleteRoom  = (indexOf) => {
	setRooms(prevState => prevState.filter((value, index) =>{
	    return index !== indexOf
	}))
    }
    // Изменение value комнаты
    const handleRoomChange = (value, index) => {
	const newRooms = [...rooms];
	newRooms[index].name = value;
	setRooms(newRooms);
    };

    //Добавление стула
    const addChair = (roomIndex) => {
	const newChair = { name: '' };
	// // Создаем новый массив комнат с обновленными chairs
	const newRooms = [...rooms];
	newRooms[roomIndex].chairs.push(newChair);
	setRooms(newRooms);
    }

    // Удаление стула
    const deleteChair = (roomIndex, chairIndex) => {

	const newRooms = [...rooms];
	newRooms[roomIndex].chairs.splice(chairIndex, 1);
	setRooms(newRooms)
    }

    // Изменение value стула
    const handleChairChange  = (value, indexRoom, indexChair) => {
	const newRooms = [...rooms];
	newRooms[indexRoom].chairs[indexChair].name = value;
	setRooms(newRooms);
    }


    const handleClickOpen = () => {
	setOpen(true);
    };

    const handleClose = () => {
	setOpen(false);
    };
    const submit =  (data) => {
	dataSubmit(data, rooms,departmentId)
    }
    return (
	<div>
	    <Button variant="outlined" onClick={handleClickOpen}>
		{btnTitle}
	    </Button>

	    <Dialog open={open} onClose={handleClose}>
		<form onSubmit={handleSubmit(submit)}>
		    <DialogContent>
			<AddClinicField
			    submit={submit}
			    control={control}
			    clinic={clinic}
			/>

			<Grid container spacing={4}>
			    {rooms.map((room, index) => {
				return (
				    <Grid item xs={6} key={index}>
					<Rooms room={room} index={index}
					       deleteRoom={deleteRoom}
					       handleRoomChange={handleRoomChange}
					       addChair={addChair}
					       deleteChair={deleteChair}
					       handleChairChange={handleChairChange}

					/>

				    </Grid>
				)
			    })}
			</Grid>
		    </DialogContent>

		    <DialogActions>
			<Button variant="outlined" onClick={addRoom}>
			    Добавить комнату
			</Button>
			<Button type={'submit'}>Создать</Button>
		    </DialogActions>
		</form>
	    </Dialog>
	</div>
    )
}