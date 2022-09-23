import React from "react";

import {MdSpaceDashboard} from 'react-icons/md'

const name = 'Dashboard';

const icon = <MdSpaceDashboard/>

const Dashboard = () =>{
    return(
        <div>

    <div className="pr-9" >
         <div className="cursor-pointer pb-2 pt-2 pr-5 pl-10 w-40 text-sm hover:bg-blue-500 ">
         Dashboard
         </div>
            <span className="relative bottom-7 left-3 decoration-white text-xl cursor-pointer">
                {icon}
            </span>
        </div>
        </div>
    )
}


export default Dashboard;


