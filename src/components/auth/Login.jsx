import {Auth} from "./Auth.jsx";
import { LoginUser} from '../../store/users/userAsincThunk.js'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
export function  Login () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const checkEmail = (email) => {
    }
    function handleClick ({email, password}) {
        dispatch(LoginUser({email,password,navigate}))
    }
    return (
        <Auth
            title={`Авторизаваться`}
            btnTitle={'Войти'}
            link={'reg'}
            onClick ={handleClick}
            checkEmail={checkEmail}
        />
    )
}