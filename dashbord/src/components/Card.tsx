import React from "react";

import {IoIosRocket} from 'react-icons/io';

const icon = <IoIosRocket/>;

const Card = () =>{
    return(
        <div>
            <div className="w-auto p-5">
                <div className="w-40 h-44 bg-white text-center rounded-lg p-2">
                    <div className="relative -top-4">
                    <button className="  text-2xl w-10 h-10 bg-red-400 rounded-full p-2 hover:animate-slide-out-blurred-tr">
                    <span >
                        {icon}
                    </span>
                    </button>
                     </div>

                <div className=" text-center max-w-10">
                    <h2 className="text-sm relative -top-3">
                        Upgrade Pro
                    </h2>
                    <p className="text-xs">
                    Increase your productivity
                    by upgrading to pro plan
                    </p>
                       
                </div>
                <div>
                <button className="bg-blue-500  px-5 py-2 relative top-5 text-sm ">
                    Upgrade Now
                </button>
                </div>
                
                </div>
            </div>

        </div>
    )
}

export default Card;