import {Auth} from "./auth";
import {LoginUser} from '../store/users/userAsincThunk.js'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
export function  Login () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleClick (email, password) {
        dispatch(LoginUser({email,password}))
        console.log(dispatch)
    }
    return (
        <Auth
            title={`Авторизаваться`}
            btnTitle={'Войти'}
            onClick ={handleClick}
        />
    )
}