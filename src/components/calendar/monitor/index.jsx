


export  const  Monitor  = (props) => {
    const {today, prevMonth, nextMonth, currentMonth} = props
    return(
	<div className={`flex flex-row justify-around bg-gray-700 p-2 mb-[1px]`}>
	    <div className={`text-white `}>
		<span className={`font-bold text-4xl phone:text-2xl pl-1`}>{today.format('MMMM')}</span>
		<span className={`font-normal text-4xl phone:text-2xl pl-1`}>{today.format('YYYY')}</span>
	    </div>
	    <div>
		<button
		    className={`bg-gray-400 px-1 ml-[2px] rounded-sm`}
		    onClick={prevMonth}
		>&lt;
		</button>
		<button
		    className={`bg-gray-400 px-1 ml-[2px] rounded-sm`}
		    onClick={currentMonth}
		>
		    Today
		</button>
		<button
		    className={`bg-gray-400 px-1 ml-[2px] rounded-sm`}
		    onClick={nextMonth}
		>
		    &gt;
		</button>
	    </div>
    	</div>
    )

}