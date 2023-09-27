import {TextField} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined.js";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined.js";
import React from "react";

export  const Rooms = (props) => {
	const {room,
	    index,
	    addChair,
	    deleteChair,
	    deleteRoom,
	    handleChairChange,
	    handleRoomChange
	} = props

	return(
	    <div className={`shadow-shadow-soft rounded-md p-2 transition-all duration-300 `}>
		<div className={`flex flex-row`}>
		    <TextField
			label={`Комната ${index + 1}`}
			variant="outlined"
			value={room.name}
			size={'small'}
			onChange={(e) =>
			    handleRoomChange(e.target.value, index)}
		    />

		    {index === 0 ? '' :
			<DeleteOutlineOutlinedIcon
			    onClick={() => deleteRoom(index)}
			/>}
		</div>
		{room?.chairs && room.chairs.map((value, indexChair) =>(
		    <div className={'flex flex-row'} key={indexChair}>
			<TextField
			    size={'small'}
			    variant={'standard'}
			    label={'№ стула'}
			    onChange={(e) => {
				handleChairChange(e.target.value, index, indexChair)
			    }}
			/>
			{indexChair === 0 ? <AddCircleOutlineOutlinedIcon
			    onClick={() => {addChair(index)}}
			/> : ''}
			{indexChair > 0 ? <DeleteOutlineOutlinedIcon
			    onClick={() => {deleteChair(index, indexChair)}}
			/>: ''}
		    </div>
		))}
	    </div>
	)
}