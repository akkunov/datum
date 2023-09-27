import {Link} from "react-router-dom";
import {useState} from "react";

export function Auth(props) {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    const {title, btnTitle, onClick} = props
    function handleSubmit  () {
        console.log(email, password)
            onClick(email,password)
    }
    return(
        <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 extra:px-8">

                <div className="phone:mx-auto phone:w-full phone:max-w-sm">
                    {/*<img className="mx-auto h-10 w-auto"*/}
                    {/*     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />*/}
                    <h2 className="mt-10 text-center phone:text-lg text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {title}
                    </h2>
                </div>

                <div className="mt-10 phone:mx-auto phone:w-full phone:max-w-sm">
                    <form className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                E-mail
                            </label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" required
                                       className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6"
                                       placeholder={'output@gmail.com'}
                                       onChange={(e) => setEmail(e.target.value)}
                                       value={email}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password"  required
                                       className="block w-full rounded-md border-0  px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6"
                                       onChange={(e) => setPassword(e.target.value)}
                                       value={password}
                                />
                            </div>
                        </div>

                        <div>
                            <button type="button"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleSubmit}
                            >

                                {btnTitle}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        {/*<span>Ещё нет аккаунта? </span><Link >Регистрация</Link>*/}
                    </p>
                </div>
        </div>
    )
}