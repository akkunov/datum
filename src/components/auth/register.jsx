import {Auth} from "./Auth.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {CheckEmail, Registration} from "../../store/users/userAsincThunk.js";

export const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const checkEmail = (email) => {
	dispatch(CheckEmail(email))
    }
    function handleClick ({email, password}) {
	dispatch(Registration({email,password,navigate}))
    }


    return(
	<Auth
	    title={`Регистрация`}
	    btnTitle={'Войти'}
	    link={'login'}
	    onClick ={handleClick}
	    checkEmail={checkEmail}
	/>
    )
}