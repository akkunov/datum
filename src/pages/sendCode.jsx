import {Code} from "../components/code.jsx";
import {Confirm} from "../store/users/userAsincThunk.js";
import {useSelectorUser} from "../Hooks/Hooks.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const SendCode = () => {
    const user = useSelectorUser()
    console.log(user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function sender(code) {
	console.log(code)
	dispatch(Confirm({email: user.email, password: user.password, navigate, code }))
    }
    return (
            <div className={`shadow-lg w-screen h-screen flex flex-row justify-center items-center`}>
		<Code sendCode={sender}/>
	    </div>
    )
}