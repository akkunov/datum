import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getClinicById} from "../../store/clinic/clinicThunk.js";

export const ClinicPage = (props) => {
    const {clinicId} = props
    const dispatch  = useDispatch()


    useEffect(() => {
	dispatch(getClinicById(clinicId));

    },[])
    return(
	<div>
		<span>{clinicId}</span>
	</div>
    )
}