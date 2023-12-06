import {PersonalComponent} from "../components/personal/Personal.jsx";

export function Personal(props) {
    return (
        <div className={`gird shadow-shadow-soft bg-soft  w-[85vm] h-full rounded-2xl m-2 p-4`}>
            <PersonalComponent />
        </div>
    );
};