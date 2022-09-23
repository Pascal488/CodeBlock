import React from "react";


import {BsBell} from 'react-icons/bs';

import Image from "./images/Dashboard.jpeg";

import {TbMessageDots} from 'react-icons/tb'

const icon1 = <BsBell/>;

const icon2 = <TbMessageDots/>;





const Left = () =>{
    return(
        <div className="bg-slate-400  flex  flex-col m-0 w-full fixed h-full overflow-auto  align-center text-xl gap-5">
            <div className="flex  justify-around  border-b-2 max-w-sm pb-5 p-2">
                <span className="text-2xl w-11 h-11 border-2 border-white rounded-full p-2 cursor-pointer hover:rotate-45">
                    {icon1}
                </span>
                <span className="text-2xl w-11 h-11 border-2 border-white rounded-full p-2 cursor-pointer hover:animate-vibrate-1">
                {icon2}
                </span>
                <span className="text-xl">
                <img src={Image} alt="" className="w-10 h-10 rounded-full" />
                </span>   
                <span className="text-2xl w-11 h-11 bg-red-400">
                 <img src="./images/Dashboard.jpeg" alt=""  /> 
                   
                </span>       
            </div>  


            <div className="">

            </div>
            </div>
    )
}


export default Left;