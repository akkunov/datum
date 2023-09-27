
import {useState} from "react";
import {CNavLink} from "./NavLink";

export const  NavMenu = () =>{
    const [menu, setMenu]  = useState(true)
    return(
        <>
            <div  className={'flex items-center'}>
                <div className={`flex flex-col shadow-shadow-soft  ${menu ? 'w-[200px]' : 'w-[60px]'} h-[98vh] 
                                transition-scale duration-300 rounded-md py-4 mx-4`}>

                    <CNavLink menu={menu}
                        setMenu={setMenu}
                    />
                </div>
            </div>

        </>

    )
}