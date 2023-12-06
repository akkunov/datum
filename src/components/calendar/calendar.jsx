import {Header} from "./header/index.jsx";
import {Monitor} from "./monitor/index.jsx";
import {CalendarGrid} from "./calendarGrid";
import {useState} from "react";
import moment from "moment";
import {WeekComponent} from "./weeks/index.jsx";

export const CalendarComponent =  () => {
    moment.updateLocale('ru', {week: {dow: 0}})
    const [today, setToday] = useState(moment())
    const startDay = today.clone().startOf('month').startOf('week');
    const startWeek = today.clone().startOf('week').startOf('days')
    const currentDay  = (day) => today.isSame(day, 'day');
    const isAfter = (day) => today.isAfter(day, 'day');

    const prevMonth = () => setToday((prevState) =>   prevState.clone().subtract(1, 'month'))
    const currentMonth = () => setToday(moment())
    const nextMonth = () => setToday((prevState) =>   prevState.clone().add(1, 'month'))

    return(
	<div>
	    {/*<Header />*/}
	    <Monitor
	    	today={today}
		prevMonth={prevMonth}
		currentMonth={currentMonth}
		nextMonth={nextMonth}
	    />

	    {/*<CalendarGrid*/}
		{/*startDay={startDay}*/}
		{/*today={today}*/}
		{/*currentDay={currentDay}*/}
	    {/*/>*/}
	    <div>
		<WeekComponent
		    startWeek={startWeek}
		    currentDay={currentDay}
		    isAfter={isAfter}
		/>
	    </div>

	</div>
    )
}