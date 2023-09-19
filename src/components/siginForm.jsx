export const SigIn = () => {
   return(
       <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 extra:px-8">
           <div className={`shadow-lg phone:w-11/12 px-12 ipad:w-8/12 tablet:w-7/12
            max-w-96 phone:min-w-56 w-4/12 phone:m-0 phone:px-5 phone:my-0`}>
               <div className="phone:mx-auto phone:w-full phone:max-w-sm">
                   {/*<img className="mx-auto h-10 w-auto"*/}
                   {/*     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />*/}
                   <h2 className="mt-10 text-center phone:text-lg text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up
                       to your account</h2>
               </div>

               <div className="mt-10 phone:mx-auto phone:w-full phone:max-w-sm">
                   <form className="space-y-6" >
                       <div>
                           <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                               Фамилия
                           </label>
                           <div className="mt-2">
                               <input id="firstName" name="firstName" type="name" required
                                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6"
                                      placeholder={'Асанов'}
                               />
                           </div>
                       </div>

                       <div>
                           <div className="flex items-center justify-between">
                               <label htmlFor="name"
                                      className="block text-sm font-medium leading-6 text-gray-900">Имя</label>
                           </div>
                           <div className="mt-2">
                               <input id="name" name="name" type="name"  required
                                      className="block w-full rounded-md border-0  px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6"
                                      placeholder={'Усон'}
                               />
                           </div>
                       </div>
                       <div>
                           <div className="flex items-center justify-between">
                               <label htmlFor="passport"
                                      className="block text-sm font-medium leading-6 text-gray-900">ID пасспорта</label>
                           </div>
                           <div className="mt-2">
                               <input id="passport" name="passport" type="text"  required
                                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6"
                                      placeholder={"2022302523"}
                               />
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
                               />
                           </div>
                       </div>

                       <div>
                           <div className="flex items-center justify-between">
                               <label htmlFor="date"
                                      className="block text-sm font-medium leading-6 text-gray-900">Дата рождения</label>
                           </div>
                           <div className="mt-2">
                               <input id="date" name="date" type="date"  required
                                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 phone:text-sm phone:leading-6" />
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
                       Not a member?
                       <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day
                           free trial</a>
                   </p>
               </div>
           </div>
       </div>
   )
}