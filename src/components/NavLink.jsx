import {GoPeople} from "react-icons/go";
import {NavLink} from "react-router-dom";
import {FcCdLogo} from "react-icons/fc";
import {GrClose} from "react-icons/gr";
import {BsCalculator, BsClockHistory} from "react-icons/bs";
import {VscGraph} from "react-icons/vsc";
import {FiCalendar} from "react-icons/fi";
import {RiBuilding2Line} from "react-icons/ri";
import {FaUserDoctor} from "react-icons/fa6";
import {LuSettings} from "react-icons/lu";
import {AiOutlineMail} from "react-icons/ai";
import {CgLogOff} from "react-icons/cg";

export const CNavLink = ({menu,  setMenu}) => {
        return(
            <>
                <div className={`flex flex-row space-x-12 px-6 justify-between`}
                     onClick={() => {setMenu(!menu)}}
                >
                    {menu ?  <FcCdLogo className={`scale-150 `}/> : null}
                    { <GrClose className={`justify-centers`} />}
                </div>
                <NavLink to={'patient'}
                         className={`space-y-3  py-2 hover:border-l-blue-600 hover:border-l-2 hover:translate-x-4
                        transition duration-300 active:bg-amber-200`} >
                    <div className={`flex flex-row  space-x-12 px-4`}>
                        <GoPeople className={`w-6/6 items-center`} />
                        <span className={`text-[12px] font-medium  ${menu ? '': 'hidden'}`}>Пациенты</span>
                    </div>
                </NavLink>
                <NavLink to={'accaption'}
                         className={`my-2  py-2 hover:border-l-blue-600 hover:border-l-2 hover:translate-x-4
                        transition duration-300 active:bg-amber-200`}>
                    <div className={`flex flex-row  space-x-12 px-4`}>
                        <BsClockHistory className={`w-6/6 items-center`} />
                        <span className={`text-[12px] font-medium  ${menu ? '': 'hidden'}`}>Приём</span>

                    </div>
                </NavLink>
                <NavLink to={'report'}
                         className={`my-2  py-2 hover:border-l-blue-600 hover:border-l-2 hover:translate-x-4
                        transition duration-300 active:bg-amber-200`}>
                    <div className={`flex flex-row  space-x-12 px-4`}>
                        <VscGraph className={`w-6/6 items-center`} />
                        <span className={`text-[12px] font-medium  ${menu ? '': 'hidden'}`}>Отчёты</span>
                    </div>
                </NavLink>
                <NavLink to={'calendar'}
                         className={`my-2  py-2 hover:border-l-blue-600 hover:border-l-2 hover:translate-x-4
                        transition duration-300 active:bg-amber-200`}>
                    <div className={`flex flex-row  space-x-12 px-4`}>
                        <FiCalendar className={`w-6/6 items-center`} />
                        <span className={`text-[12px] font-medium  ${menu ? '': 'hidden'}`}>Календарь</span>
                    </div>
                </NavLink>
                <NavLink to={'boxOffice'}
                         className={`my-2  py-2 hover:border-l-blue-600 hover:border-l-2 hover:translate-x-4
                        transition duration-300 active:bg-amber-200`}>
                    <div className={`flex flex-row  space-x-12 px-4`}>
                        <BsCalculator className={`w-6/6 items-center`} />
                        <span className={`text-[12px] font-medium  ${menu ? '': 'hidden'}`}>Касса</span>
                    </div>
                </NavLink>
                <NavLink to={'clinics'}
                         className={`my-2  py-2 hover:border-l-blue-600 hover:border-l-2 hover:translate-x-4
                        transition duration-300 active:bg-amber-200`}>
                    <div className={`flex flex-row  space-x-12 px-4`}>
                        <RiBuilding2Line className={`w-6/6 items-center`} />
                        <span className={`text-[12px] font-medium  ${menu ? '': 'hidden'}`}>Клиника</span>
                    </div>
                </NavLink>
                <NavLink to={'personal'}
                         className={`my-2  py-2 hover:border-l-blue-600 hover:border-l-2 hover:translate-x-4
                        transition duration-300 active:bg-amber-200`}>
                    <div className={`flex flex-row  space-x-12 px-4`}>
                        <FaUserDoctor className={`w-6/6 items-center`} />
                        <span className={`text-[12px] font-medium  ${menu ? '': 'hidden'}`}>Персонал</span>
                    </div>
                </NavLink>
                <hr className={'my-8 border-gray-400'}/>
                <NavLink to={'settings'}
                         className={`my-2  py-2 hover:border-l-blue-600 hover:border-l-2 hover:translate-x-4
                        transition duration-300 active:bg-amber-200`}>
                    <div className={`flex flex-row  space-x-12 px-4`}>
                        <LuSettings className={`w-6/6 items-center`} />
                        <span className={`text-[12px] font-medium  ${menu ? '': 'hidden'}`}>Настройки</span>
                    </div>
                </NavLink>

                <NavLink  to={'report'}
                          className={`my-2  py-2 hover:border-l-blue-600 hover:border-l-2 hover:translate-x-4
                        transition duration-300 active:bg-amber-200`}>
                    <div className={`flex flex-row  space-x-12 px-4`}>
                        <AiOutlineMail className={`w-6/6 items-center`} />
                        <span className={`text-[12px] font-medium  ${menu ? '': 'hidden'}`}>Обратная связь</span>
                    </div>
                </NavLink>


                <NavLink to={'/login'}
                         className={`my-4 mx-2 py-2 hover:border-l-blue-600  shadow-shadow-soft
                    justify-center
                        transition duration-300 active:bg-amber-200`}>
                    <div className={`flex flex-row  space-x-12 px-4`}>
                        <CgLogOff className={`w-6/6 items-center`} />
                        <span className={`text-[12px] font-medium  ${menu ? '': 'hidden'}`}>Выйти</span>
                    </div>
                </NavLink>
            </>
        )
}