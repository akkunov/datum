import {useSelector} from "react-redux";
import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {useCheckUser} from "../Hooks/checkUser.js";
import {NavMenu} from "./NavMenu.jsx";
import {Header} from "./Header.jsx";



export default function Main(props){
    const {isAuth} = useSelector(state => state.user)
    const navigate = useNavigate()
    const user = useCheckUser()
    console.log(isAuth)
    useEffect(() => {

        if(!user){
            navigate('/login')
        }

    },[])
    return(
        <>
            <div className={`flex flex-row justify-center`}>
                <div className={`flex flex-col justify-center items-center`}>
                    <NavMenu/>
                </div>


                <div className={`w-screen flex flex-col h-screen`}>
                    <Header/>
                    <Outlet />
                </div>


            </div>

        </>
    )
}