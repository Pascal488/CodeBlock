import React from "react";

import {IoIosRocket} from 'react-icons/io';

const icon = <IoIosRocket/>;

const Card = () =>{
    return(
        <div>
            <div className="w-auto p-5">
                <div className="w-40 h-44 bg-gray-800 text-center rounded-lg p-2">
                    <div className="relative -top-4">
                    <button className="  text-2xl w-10 h-10 bg-gray-700 rounded-full p-2 hover:animate-slide-out-blurred-tr">
                    <span className="text-white">
                        {icon}
                    </span>
                    </button>
                     </div>

                <div className=" text-center max-w-10">
                    <h2 className="text-sm relative -top-3 text-white">
                        Upgrade Pro
                    </h2>
                    <p className="text-xs font-semibold">
                    Increase your productivity
                    by upgrading to pro plan
                    </p>
                       
                </div>
                <div>
                <button className="bg-cyan-500  px-5 py-2 relative top-5 text-sm text-white">
                    Upgrade Now
                </button>
                </div>
                
                </div>
            </div>

        </div>
    )
}

export default Card;