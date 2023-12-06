import {useLocalStorage} from "../Hooks/Hooks.js";
import {Link, useNavigate} from "react-router-dom";

export function Header  ()  {
    const navigate = useNavigate()
    const logout  = () => {
        useLocalStorage.removeToken('refreshToken');
        useLocalStorage.removeToken('accessToken');
        navigate('/login');
    }
    // function keyPress ({key}, index) {
    //     if(key ==='Backspace' && (code[index] ==='' ||code[index] === undefined )) {
    //         setActiveIndex(index -1)
    //     }
    //     if(key === 'ArrowDown' || key === 'ArrowRight') {
    //         setActiveIndex(index +1)
    //     }
    //     else if (key === 'ArrowUp' || key === 'ArrowLeft'){
    //         setActiveIndex(index -1)
    //     }
    //
    // }
    return(
            <>
                <header className={`shadow-shadow-soft w-[85vm] h-16 my-2 rounded-2xl mx-2 p-4`}>
                    <div className={`flex flex-row justify-end gap-6`}>
                        <span onClick={logout}
                            className={`w-[60px] h-[40px] rounded-full bg-blue-600 flex flex-wrap cursor-pointer`}>
                            <span
                                className={`text-center justify-center items-center text-sm p-2 text-white font-bold
                                `}>Выйти</span>
                        </span>
                        <Link to={'employee'}>
                            <span className={`w-min-[60px] h-min-[40px] w-fit rounded-full bg-blue-600 text-white p-2`}>добавить</span>
                        </Link>


                    </div>
                </header>
            </>
    )
}