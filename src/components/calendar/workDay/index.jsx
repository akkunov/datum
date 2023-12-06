import React, { useState } from 'react';
import moment from 'moment';

const generateSchedule = (startTime, endTime, intervalMinutes, quarters) => {
    const currentTime = moment(startTime, 'HH:mm');
    const endMoment = moment(endTime, 'HH:mm');
    const schedule = [];

    while (!currentTime.isAfter(endMoment)) {
	const timeSlot = [currentTime.clone()];

	for (let i = 1; i < quarters; i++) {
	    const quarterTime = currentTime.clone().add(i * (intervalMinutes / quarters), 'minutes');
	    timeSlot.push(quarterTime);
	}

	schedule.push(timeSlot);
	currentTime.add(intervalMinutes, 'minutes');
    }

    return schedule;
};





const Quarters = ({ times }) => {
    return (
	<div title={times?.format('HH:mm')}>
	    <span title={times.format('HH:mm')} className={`cursor-pointer`}>. </span>
	</div>
    );
};

const Events = ({event}) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return(
	    <span className={`flex flex-row space-x-2 bg-[#${randomColor}] w-fit h-[100%]`}>
		<span>{event.name}</span>
		<span>{event.time.format('HH:mm')}</span>
	    </span>
    )
}
const Times = ({ times, onAddEvent,events }) => {
    return (
	<>
		{times.map((time, index) => (
		    <div
			className={`w-[100%] h-4  bg-gray-50 flex flex-row`}
			key={index}
			onDoubleClick={() => onAddEvent(time)}
		    >
			<div className={`border-r-[1px] border-black w-12`}>
			    {time.format('mm') === '00' ? (
				<div key={index}>{time.format('HH:mm')}</div>
			    ) : (
				<Quarters times={time} />
			    )}
			</div>

			<div>
			    {
				events.map((event, index) => (
				    <React.Fragment key={index}>
					{time.isSame(event.time) ? <Events event={event}/>: ''}
				    </React.Fragment>

				))
			}
			</div>
		    </div>
		))}
	</>
    );
};

const ScheduleComponent = () => {
    const startTime = '09:00';
    const endTime = '18:00';
    const intervalMinutes = 60; // ровные часы
    const quarters = 4; // четверти времени

    const [events, setEvents] = useState([]);

    const schedule = generateSchedule(startTime, endTime, intervalMinutes, quarters);

    const addEvent = (selectedTime) => {
	const eventName = prompt('Введите название события:');
	if (eventName) {
	    const newEvent = { time: selectedTime, name: eventName };
	    setEvents([...events, newEvent]);
	}
    };

    return (
	<div>
	    {schedule.map((times, index) => (
		<div key={index} className={`border-[1px] border-black`}>
		    <Times
			times={times}
			onAddEvent={addEvent}
			events={events}

		    />
		</div>
	    ))}
	</div>
    );
};

export default ScheduleComponent;

// import React, { useState } from 'react';
// import moment from 'moment';
//
// const Scheduler = () => {
//     const [selectedDate, setSelectedDate] = useState(moment());
//     const [events, setEvents] = useState([]);
//
//     const handleDoubleClick = (day, hour) => {
// 	const newEvent = {
// 	    day,
// 	    hour,
// 	    description: prompt('Enter event description:'),
// 	};
//
// 	setEvents([...events, newEvent]);
//     };
//
//     return (
// 	<div className="grid grid-cols-8 grid-rows-25 gap-1">
// 	    <div className="col-start-2"></div>
// 	    {Array.from({ length: 7 }).map((_, index) => (
// 		<div
// 		    key={index}
// 		    className={`col-start-${index + 2} col-span-1 ${
// 			selectedDate.format('dddd') === moment().day(index).format('dddd') ? 'bg-blue-100' : 'bg-white'
// 		    } border border-gray-300 p-2 text-center`}
// 		>
// 		    {selectedDate.day(index).format('dddd')}
// 		</div>
// 	    ))}
// 	    {Array.from({ length: 24 }).map((_, hour) => (
// 		<React.Fragment key={hour}>
// 		    <div className="col-start-1 col-span-1 border border-gray-300 p-2 text-right">
// 			{moment().hour(hour).format('LT')}
// 		    </div>
// 		    {Array.from({ length: 7 }).map((_, day) => (
// 			<div
// 			    key={`${day}-${hour}`}
// 			    className="col-span-1 border border-gray-300 p-2 cursor-pointer bg-green-200"
// 			    onDoubleClick={() => handleDoubleClick(day, hour)}
// 			>
// 			    {events.find((event) => event.day === day && event.hour === hour)?.description}
// 			</div>
// 		    ))}
// 		</React.Fragment>
// 	    ))}
// 	</div>
//     );
// };
//
// export default Scheduler;