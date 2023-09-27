import {Auth} from "./Auth.jsx";
import {LoginUser} from '../../store/users/userAsincThunk.js'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
export function  Login () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleClick (email, password) {
        dispatch(LoginUser({email,password}))
            .then(() => navigate('/'))
    }
    return (
        <Auth
            title={`Авторизаваться`}
            btnTitle={'Войти'}
            onClick ={handleClick}
        />
    )
}