import moment from "moment";
import ScheduleComponent from "../workDay/index.jsx";

export  const  CalendarGrid  = ({startDay,today, currentDay}) => {
    const totalDays = 42;
    const day = startDay.clone()
    const daysList = [...Array(totalDays)].map(() => day.add(1,'day').clone())
    // bg-[#1E1F21]
    // bg-[#404040]
    const selectedMonth  = (day) => today.isSame(day, 'month');


    return (
        <>
            {/*<div>*/}
            {/*    <ScheduleComponent/>*/}
            {/*</div>*/}
            <div className={`grid grid-cols-7 grid-rows-6 gap-[1px] phone:gap-0.4 text-white`}>
            {[...Array(7)].map((value, index) => (
                <div key={index}
                     className={`flex flex-row justify-start items-end pr-1  
                            ${index == 5 || index == 6 ? 'bg-gray-600': 'bg-gray-700'}`}>
                    {moment().day(1+index).format('ddd')}
                </div>
            ) )}

            {daysList.map((item, index ) => (
                <div className={`phone:min-w-[43px] min-w-[140px] min-h-[80px] text-xl text-gray-50
                    ${item.day() ===6 || item.day() ===0 ? 'bg-gray-600': 'bg-gray-700' } `}
                     key={item.format('DDMMYYYY')}>
                    <div className={`flex justify-end phone:p-1`}>
                        <div className={`flex items-center justify-center `}>
                            <div className={`w-fit h-6 flex justify-center items-center p-2 
                                    ${currentDay(item)  ? `bg-red-600 rounded-full
                                 `: ''} ${!selectedMonth(item) ? 'text-gray-400': 'text-white'}
                                 
                                 `}>
                                { item.format('D')}
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>

        )
}
