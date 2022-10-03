import React from "react";
import {GoCalendar} from 'react-icons/go'
const icon = <GoCalendar/>;

const Calender = () =>{
    return(
        <div>

    <div className="pr-9 hover:text-white " >
         <div className="cursor-pointer pb-2 pt-2 pr-5 pl-10 w-40 text-sm hover:bg-cyan-500 ">
         Calender
         </div>
            <span className="relative bottom-7 left-3 decoration-white text-xl cursor-pointer">
                {icon}
            </span>
        </div>
        </div>
    )
}

export default Calender;