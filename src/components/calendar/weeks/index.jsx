import {Weeks} from "./weeks.jsx";
import ScheduleComponent from "../workDay/index.jsx";

export const WeekComponent = (props) => {
    return(
	<div className={`bg-white overflow-hidden h-[10%]`}>
		<Weeks {...props}/>
	    	<ScheduleComponent />
	</div>
    )

}