import Chair from "./chair.jsx";

export default  function Room(props) {
    const {
		id = 0,
		name = null,
		enabled = null ,
		deleted = null,
		chairs = []
	} =  props

    return(
	<div className={`flex flex-col justify-center items-center`}>
		<h1>
		    комната {name}
		</h1>
		<h6>
		    {chairs.length !== 0 && chairs.map((chair, index) => (
			<div key={chair.id} className={`flex flex row`} >
			    <span>
				стул -
			    </span>
			    <Chair  {...chair}/>
			</div>

		    ))}
		</h6>
	</div>
    )

}