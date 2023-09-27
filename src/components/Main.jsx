import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


export default function Main(props){
    const {isAuth} = useSelector(state => state.user)
    const navigate = useNavigate()
    console.log(isAuth)
    useEffect(() => {
        if(!isAuth){
            navigate('/login')
        }

    },[])
    return(
        <>
            <div>Main page 1 </div>
        </>
    )
}