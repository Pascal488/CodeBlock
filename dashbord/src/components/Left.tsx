import React, { useState } from "react";


import { BsBell,BsLink } from 'react-icons/bs';

import Image from "./images/Dashboard.jpeg";

import { TbMessageDots } from 'react-icons/tb';

import {BiAlarmExclamation} from 'react-icons/bi';
import {FiLink} from 'react-icons/fi'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const icon1 = <BsBell />;

const icon2 = <TbMessageDots />;

const icon3 = <BiAlarmExclamation/>;

const icon4 = <FiLink/>





const Left = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="bg-white  flex  flex-col m-0 w-full fixed h-full overflow-auto  align-center text-xl  do:hidden">
            <div className="flex  justify-around  border-b-2 max-w-sm pb-5 p-2">
                <span className="text-2xl w-11 h-11 border-2 border-gray-200 rounded-full p-2 cursor-pointer hover:rotate-45">
                    {icon1}
                </span>
                <span className="text-2xl w-11 h-11 border-2 border-gray-200  rounded-full p-2 cursor-pointer hover:animate-vibrate-1">
                    {icon2}
                </span>
                <span className="text-xl">
                    <img src={Image} alt="" className="w-10 h-10 rounded-full" />
                </span>
                <span className="text-2xl w-11 h-11 bg-red-400">
                    <img src="./images/Dashboard.jpeg" alt="" />

                </span>
            </div>


            <div>
                <div className="p-2 " >
                    <Calendar onChange={onChange} value={value} className="max-w-[350px]   p-2 text-center  border-none" />
                </div>
            </div>

            <div className="p-5">

                <div className=" bg-slate-200 p-3 w-64 h-20  text-xs ">

                    <span className="border-l-4 border-sky-500 p-6 relative top-5">

                    </span>


                    <div className="ml-5 -mt-2">
                        <span>
                            <h1 className="mb-3">Meet with Potential client</h1>
                        </span>
                        <span>
                            <ul className="list-none flex gap-2">
                                <li className="flex gap-1 text-xs align-middle">
                                    {icon3}09.00pm
                                </li>
                                <li className="flex gap-1 text-xs align-middle hover:cursor-pointer">
                                    {icon4}https://github.com/...
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-5">

                <div className=" bg-slate-200 p-3 w-64 h-20  text-xs ">

                    <span className="border-l-4 border-sky-500 p-6 relative top-5">

                    </span>


                    <div className="ml-5 -mt-2">
                        <span>
                            <h1 className="mb-3">Meet with Potential client</h1>
                        </span>
                        <span>
                            <ul className="list-none flex gap-2">
                                <li className="flex gap-1 text-xs align-middle">
                                    {icon3}11:00pm
                                </li>
                                <li className="flex gap-1 text-xs align-middle hover:cursor-pointer">
                                    {icon4}https://github.com/...
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>


        </div>

    )
}


export default Left;