import {useForm} from "react-hook-form";

export const Employee  = () => {
    const {
	register,
	handleSubmit,
	formState:{errors,isValid},
	watch
    } = useForm({
	mode: 'onBlur'
    })
    function submit (data) {
	const {
	    authority,
	    birthday,
	    city,
	    country,
	    email,
	    expiry,
	    house,
	    issue,
	    name,
	    passportNumber,
	    passportSeries,
	    phone,
	    pin,
	    region,
	    street,
	    surname,
	    telegram,
	    whatsapp
	} = data
	const newData = {
	    email,
	    name,
	    surname,
	    country,
	    birthday,
	    authority,
	    issue,
	    expiry,
	    passportNumber,
	    passportSeries,
	    pin,
	    phone:{
		number: phone,
		telegram,
		whatsapp
	    },
	    address:{
		country,
		city,
		street,
		house,
	    }
	}
	console.log(newData)
    }
    return(
	<div className={`w-[100%] h-[100%] mt-4`}>
		<div className={``}>
		    <form onSubmit={handleSubmit(submit)} >
			<div className={`flex flex-row`}>
			    <div className={`flex flex-col justify-center phone:w-full w-2/6 space-y-4`}>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor={`email`}>email</label>
				    <input type="email" name={`email`} placeholder={`Asan@gmail.com`} id={`email`}
					   {...register('email', {required:true})}
				    />
				</div>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor={'name'}>name</label>
				    <input type="name" name={'name'} placeholder={`Asan`} id={`name`}
					   {...register('name', {required:true})}
				    />

				</div>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor="surname">surname</label>
				    <input type="surname" name={'surname'} placeholder={`surname`} id={`surname`}
					   {...register('surname', {required:true})}
				    />

				</div>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor="country">country</label>
				    <input type="text" name={'country'} placeholder={'KGZ'} id={`country`}
					   {...register('country',{required:true})}
				    />
				</div>

				<div className={`flex flex-row gap-4`}>
				    <label htmlFor="gender">gender</label>
				    <input type="checkbox" value={`male`} name={'male'} id={'gender'}/>
				    <input type="checkbox" value={`female`} name={'female'} id={'gender'}
				    />
				</div>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor={`issue`}>issue</label>
				    <input type="date"  name={`issue`} id={`issue`}
					   {...register('issue', {required: true})}
				    />

				</div>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor={`expiry`}>expiry</label>
				    <input type="date" placeholder={`expiry`} name={`expiry`} id={`expiry`}
					   {...register('expiry', {required: true})}
				    />

				</div>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor={`authority`}>authority</label>
				    <input type="text" placeholder={`MKK`} name={`authority`}  id={`authority`}
					   {...register('authority', {required: true})}
				    />

				</div>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor={'birthday'}>birthday</label>
				    <input type="date" placeholder={`birthday`} name={'birthday'} id={`birthday`}
					   {...register('birthday', {required: true})}
				    />

				</div>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor={'passportSeries'}>passport series</label>
				    <input type="text" placeholder={`passport series`} name={'passport series'} id={`passportSeries`}
					   {...register('passportSeries', {required: true})}
				    />

				</div>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor="passportNumber">passport number</label>
				    <input type="text" inputMode={'numeric'} placeholder={`1234567`}
					   name={'passport number'} id={`passportNumber`}
					   {...register('passportNumber', {required: true})}
				    />

				</div>
				<div className={`flex flex-row gap-4`}>
				    <label htmlFor={'pin'}>pin</label>
				    <input type="int" inputMode={'numeric'} placeholder={`20101199100001`} name={'pin'} id={'pin'}
					   {...register('pin', {required: true})}
				    />
				</div>
			    </div>


			    <div className={`flex flex-col`}>
				{/*  phone */}
				<div className={`flex flex-row`}>
				    <label htmlFor={'phone'}>phone number</label>
				    <input type="number" inputMode={'numeric'}
					   placeholder={`+996551690934`} name={'phone'} id={'phone'}
					   {...register('phone',{required:true})}
				    />
				</div>
				<div className={`flex flex-row`}>
				    <label htmlFor={'whatsapp'}>Whatsapp</label>
				    <input type="number" inputMode={'numeric'} placeholder={`+996551690934`}
					   name={'whatsapp'} id={'whatsapp'}
					   {...register('whatsapp',{required:true})}
				    />
				</div>
				<div className={`flex flex-row`}>
				    <label htmlFor={'telegram'}>telegram</label>
				    <input type="number" inputMode={'numeric'} placeholder={`+996551690934`}
					   name={'telegram'} id={'telegram'}
					   {...register('telegram',{required:true})}
				    />
				</div>


				{/*Adress */}
				<div className={`flex flex-row`}>
				    <label htmlFor={'city'}>Бишкек</label>
				    <input type="city"  placeholder={`Бишкек`} name={'city'} id={'city'}
					   {...register('city',{required:true})}
				    />
				</div>
				<div className={`flex flex-row`}>
				    <label htmlFor={'region'}>region</label>
				    <input type="text"  placeholder={`Чуй`} name={'region'} id={'region'}
					   {...register('region',{required:true})}
				    />
				</div>
				<div className={`flex flex-row`}>
				    <label htmlFor={'street'}>street</label>
				    <input type="street"  placeholder={`Лев Толстой`} name={'street'} id={'street'}
					   {...register('street',{required:true})}
				    />
				</div>
				<div className={`flex flex-row`}>
				    <label htmlFor={'house'}>house</label>
				    <input type="text"  placeholder={`5`} name={'house'} id={'house'}
					   {...register('house',{required:true})}
				    />
				</div>
			    </div>
			</div>
			<input type={'submit'} value={'Отправить'}
				className={`h-8 w-9/12 bg-blue-600 text-white font-bold text-2xl items-center justify-start`}
			/>
		    </form>
		</div>

	</div>
    )
}