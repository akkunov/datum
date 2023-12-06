import {EmployeeDto} from "../../Dto/employeeDto.js";
import {MdDelete} from "react-icons/md";
import {TbCircuitChangeover, TbPencilMinus} from "react-icons/tb";

export const PersonalComponent = () => {
    const deleteEmployee = (id) => {
	return true
    }
    const upgradeEmployee = (id) => {
	return true
    }

    return(
	    <div className={`space-x-4
	    	bg-zinc-100 p-4 phone:p-1 rounded-xl font-semibold hover:shadow-lg
	    	transition-all duration-200 hover:bg-blue-500
	    	hover:text-white
	    	`}>
		<div className={`flex flex-row justify-between`}>
		    <div className={`flex flex-col pl-4`}>
			<img src="/doctor.jpg" alt="" className={`w-12 h-12 rounded-full`}/>
			<span className={` pt-2`}>
			    {EmployeeDto?.post}
			</span>
			<div className={`flex flex-col`}>
			    <div>
				<span>
				    {EmployeeDto?.user?.person?.surname}
				</span>
				    <span>
				    {EmployeeDto?.user?.person?.firstname}
				</span>
				    <span>
				    {EmployeeDto?.user?.person?.patronymic}
				</span>
			    </div>
			    <div>
				<span>
					{EmployeeDto?.user?.person?.birthDay}
			   	 </span>
			    </div>
				<span>
				{EmployeeDto?.user?.person?.phone[0].number}
			    </span>
				<span>
				{EmployeeDto?.user?.person?.phone[0].whatsapp}
			    </span>
				<span>
				{EmployeeDto?.user?.person?.phone[0].telegram}
			    </span>
			</div>

		    </div>

		    <div className={`flex flex-row justify-end items-start space-x-4 pr-4`}>
			<span className={`scale-150`}
				onClick={() => deleteEmployee()}
			>
			    <MdDelete />
			</span>
			<span className={`scale-150`}
			      onClick={() => upgradeEmployee()}
			>
			    <TbPencilMinus />
			</span>
		    </div>
		</div>
	    </div>
    )

}