import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {useCheckUser} from "../Hooks/checkUser.js";
import {NavMenu} from "./NavMenu.jsx";
import {Header} from "./Header.jsx";



export default function Main(props){
    const navigate = useNavigate()
    const user = useCheckUser()
    useEffect(() => {
        if(!user.isUser){
            navigate('/login')
        }

    },[])
    return(
            <div className={`flex flex-row justify-center w-screen h-screen `}>
                <div className={`flex flex-col justify-center`}>
                    <NavMenu/>
                </div>
                <div className={`w-screen flex flex-col h-screen`}>
                    <Header/>
                    <Outlet />
                </div>


            </div>

    )
}