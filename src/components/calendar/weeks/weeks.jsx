import ScheduleComponent from "../workDay/index.jsx";


const WeekItem = ({item, currentDay}) => {
    return(
	<div className={`flex flex-col`}>
	    <span className={`justify-start items-start text-sm
	     ${currentDay == true ? 'text-blue-600' : currentDay== 'paste' ?  'text-gray-500'  :'text-zinc-900' }
	    `}>{item.format('ddd')}</span>

	    <span className={`justify-center items-center text-3xl 
	    ${currentDay == true ? 'text-blue-600' : currentDay== 'paste' ?  'text-gray-500'  :'text-zinc-900' }`}>
		{item.format('D')}
	    </span>
	</div>
    )
}

export const Weeks = (props) => {
    const {startWeek,currentDay,isAfter} = props
    const totalDays = 7
    const day = startWeek.clone()
    const daysList = [...Array(totalDays)].map(() => day.add(1,'day').clone())
    return(
	<div className={`flex flex-row justify-around bg-gray-50 h-24 p-2`}>
	    {daysList.map((item, index) =>(
		<div key={index}>
		    {currentDay(item) ? <WeekItem item={item} currentDay={true} /> :
			isAfter(item) ? <WeekItem item={item} currentDay={'paste'} />  :
			    <WeekItem item={item} currentDay={false}  />}
		</div>
	    ))}
	</div>
    )
}