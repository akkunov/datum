import {useParams} from "react-router-dom";
import {ClinicPage} from "../components/clinic/clinicPage.jsx";

export const Clinic = () => {
    const {clinicId} = useParams()
    return(
	<div>
	    <ClinicPage clinicId={clinicId}/>
	</div>

    )
}