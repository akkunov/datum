import {NameForm} from "../components/NameForm";


export function Name(props) {
    return (
        <div className={`flex flex-col w-screen h-screen items-center pt-10`}>
                <NameForm />
        </div>
    );
};