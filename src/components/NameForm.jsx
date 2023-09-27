import {ErrorText} from "./ErrorText.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {user} from "../store/users/userSlice.js";

export const NameForm = () => {
    const navigate = useNavigate();
    const {register,
        handleSubmit,
        formState:{errors},
        watch} = useForm({
        mode: 'onBlur'
    })
    const dispatch = useDispatch()

    const onSubmit =(data) => {
        dispatch(user(data))
        navigate('me')
        console.log(errors)
    }
    return(
        <div className={`shadow-shadow-soft phone:w-11/12 px-8 ipad:w-8/12 tablet:w-7/12
            max-w-96 phone:min-w-56 w-4/12 phone:m-0 phone:px-5 phone:my-0 rounded-2xl
            transition-all duration-300
            `}>
            <div className="phone:mx-auto phone:w-full phone:max-w-sm">
                <h2 className="mt-8 text-center phone:text-lg text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up
                    to your account</h2>
            </div>

            <div className=" phone:mx-auto phone:w-full phone:max-w-sm">
                <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                            Фамилия
                        </label>
                        <div className="mt-2">
                            <input id="firstName" name="firstName" type="name"
                                   className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6"
                                   placeholder={'Асанов'}
                                   {...register('firstName' ,
                                       {required: 'поле обязательно к заполнению', })}
                            />
                            <ErrorText  error={errors?.firstName &&  errors.firstName.message}/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="name"
                                   className="block text-sm font-medium leading-6 text-gray-900">Имя</label>
                        </div>
                        <div className="mt-2">
                            <input id="name" name="name" type="name"
                                   className="block w-full rounded-md border-0  px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6"
                                   placeholder={'Усон'}
                                   {...register('name' ,{required: 'поле обязательно к заполнению'})}
                            />
                            <ErrorText  error={errors?.name &&  errors.name.message}/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="passport"
                                   className="block text-sm font-medium leading-6 text-gray-900">ID пасспорта</label>
                        </div>
                        <div className="mt-2">
                            <input id="passport" name="passport" type="text"
                                   className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6"
                                   placeholder={"2022302523"}
                                   {...register('passportSeries', {required: 'поле обязательно к заполнению'})}
                            />
                            <ErrorText  error={errors?.passportSeries &&  errors.passportSeries.message}/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="phone"
                                   className="block text-sm font-medium leading-6 text-gray-900">Номер</label>
                        </div>
                        <div className="mt-2">
                            <input id="phone" name="phone" type="text"
                                   className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6"
                                   placeholder={"+996"}
                                   {...register('phone', {required: 'поле обязательно к заполнению'})}
                            />
                            <ErrorText  error={errors?.phone &&  errors.phone.message}/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="date"
                                   className="block text-sm font-medium leading-6 text-gray-900">Дата рождения</label>
                        </div>
                        <div className="mt-2">
                            <input id="date" name="date" type="date"
                                   className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6"
                                   {...register('date' , {required: 'поле обязательно к заполнению'})}
                            />
                            <ErrorText  error={errors?.date &&  errors.date.message}/>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Дальше
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Уже есть аккаунт?
                    <Link to={"/login"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Аворизавться </Link>
                </p>
            </div>
        </div>
    )
}