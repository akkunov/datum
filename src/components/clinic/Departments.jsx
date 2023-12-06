import Employee from "./employee.jsx";
import Room from "./room.jsx";
import {Link} from "react-router-dom";

export default  function Departments(props) {
	const {
	    id,
	    name = null,
	    address= {},
	    phone = {},
	    employees= [],
		} =  props
	return(
	    <div className={`flex flex-row`}>
		<Link to={`${id}`}>
		    <span className={`text-lg`}>
		    	{name}
		    </span>
			<span className={`text-lg ml-4`}>
			{address?.city}
		    </span>
			<span className={`text-lg ml-4`}>
			{address?.street}
		    </span>
		</Link>

		{/*<span className={`text-lg`}>*/}
		{/*    {phone}*/}
		{/*</span>*/}
		{/*<div className={`min-w-fit p-6`}>*/}
		{/*    <span>*/}
		{/*    	Персонал*/}
		{/*    </span>*/}
		    {/*{employees.length !== 0 && employees.map((employee, index) => (*/}
			{/*<div key={employee.id}>*/}
			{/*	<Employee  {...employee}/>*/}
			{/*</div>*/}
		    {/*))}*/}

		{/*</div>*/}
		{/*<div className={`flex flex-col`}>*/}
		{/*    <span>*/}
		{/*	Комнаты*/}
		{/*    </span>*/}
		    {/*<div className={`flex flex-row gap-4`}>*/}
			{/*{rooms?.length !== 0 && rooms.map((room, index) => (*/}
			{/*    <div key={room.id} className={`shadow-lg rounded-md w-5/6 mt-4`}>*/}
			{/*	<Room  {...room}/>*/}
			{/*    </div>*/}
			{/*))}*/}
		    {/*</div>*/}


		{/*</div>*/}
	    </div>
	)

}