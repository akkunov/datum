import {CalendarComponent} from "../components/calendar/calendar.jsx";


export function Calendar(props) {
    return (
        <div className={`grid shadow-shadow-soft bg-soft  w-[85vm] h-[100%] rounded-2xl m-2 p-4 overflow-x-scroll`}>
            <CalendarComponent />
        </div>
    );
};