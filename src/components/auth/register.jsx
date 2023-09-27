import {Auth} from "./Auth.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Registration} from "../../store/users/userAsincThunk.js";

export const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleClick (email, password) {
	dispatch(Registration({email,password}))
	    .then(() => navigate('/'))
	console.log(dispatch)
    }


    return(
	<Auth
	    title={`Авторизаваться`}
	    btnTitle={'Войти'}
	    onClick ={handleClick}
	/>
    )
}