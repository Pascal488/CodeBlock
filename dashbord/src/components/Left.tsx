import React, { useState } from "react";


import { BsBell } from 'react-icons/bs';

import Image from "./images/Dashboard.jpeg";

import { TbMessageDots } from 'react-icons/tb';

import { BiAlarmExclamation } from 'react-icons/bi';
import { FiLink } from 'react-icons/fi';
import { CgMore } from 'react-icons/cg';
import { FcAbout } from "react-icons/fc";


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const icon1 = <BsBell />;

const icon2 = <TbMessageDots />;

const icon3 = <BiAlarmExclamation />;

const icon4 = <FiLink />;
const more = <CgMore />;






const Left = () => {
    //const [value, onChange] = useState(new Date());
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

            {/* Here to add a calender component */}
            <div>
                <div className="p-5" >
                    {/* <Calendar onChange={onChange} value={value} className="max-w-[350px]   p-2 text-center  border-none" /> */}
                    <div className=" w-80 h-32 bg-black">

                    </div>
                </div>
            </div>
            {/* Here to add a calender component */}

            <div className="p-11 gap-3 flex flex-col relative -top-8">
                <div>
                    <div className=" bg-slate-200 p-3 w-64 h-20  text-xs ">
                        <span className="border-l-4 border-sky-500 p-6 relative top-5">
                        </span>
                        <div className="ml-5 -mt-2">
                            <span>
                                <h1 className="mb-3 font-extrabold">Meet with Potential client</h1>
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
                <div>
                    <div className=" bg-slate-200 p-3 w-64 h-20  text-xs ">
                        <span className="border-l-4 border-black p-6 relative top-5">
                        </span>
                        <div className="ml-5 -mt-2">
                            <span>
                                <h1 className="mb-3 font-extrabold">Brainstorm with Michael</h1>
                            </span>
                            <span>
                                <ul className="list-none flex gap-2">
                                    <li className="flex gap-1 text-xs align-middle">
                                        {icon3}11.00pm
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
            <div className="border-b-2 border-slate-200  w-80 ml-5 relative -top-8">
            </div>

            <div className="p-5 max-w-[355px] relative -top-8">
                <div className="flex justify-between mb-7">
                    <span>
                        Activity
                    </span>
                    <span className="text-2xl cursor-pointer">
                        {more}
                    </span>
                </div>
                <div >
                    <div className="bg-slate-300 w-80 h-24 mb-5 flex gap-5">
                        <div className="p-4 max-w-[50%]" >
                            <img src={Image} alt="" className="w-10 h-10 rounded-full  " />
                            <span className="bg-white">
                                <FcAbout className="rounded-full relative -top-4 left-6 bg-slate-300" />
                            </span>
                        </div>
                        <div>
                            <div className="flex flex-col text-xs  gap-2  mt-4 ">
                                <div>
                                    <span>Ronald Brown Add a comment on Project Management Dashboard!</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Good Job Dude.We Grateful to have you in this team.Hope we can work again in ....  </span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="bg-slate-300  w-80 h-16 flex mb-5">
                        <div className="p-3 " >
                            <img src={Image} alt="" className="w-8 h-8 rounded-full  " />
                            <span className="bg-white">
                                <FcAbout className=" rounded-full relative -top-4 left-5 bg-slate-300" />
                            </span>
                        </div>
                        <div>
                            <div className="flex flex-col text-xs  gap-2  mt-4 ">
                                <div>
                                    <span className="relative left-3">Afred Invite you to Project Infinify<br /> Web design !</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bg-slate-300 w-80 h-24 flex gap-5">
                        <div className="p-4 max-w-[50%]" >
                            <img src={Image} alt="" className="w-10 h-10 rounded-full  " />
                            <span className="bg-white">
                                <FcAbout className="rounded-full relative -top-4 left-6 bg-slate-300" />
                            </span>
                        </div>
                        <div>
                            <div className="flex flex-col text-xs  gap-2  mt-4 ">
                                <div>
                                    <span>Dylon Ahmed Add a comment on Project Management Dashboard!</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Good Job Dude.We Grateful to have you in this team.Hope we can work again in ....  </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}


export default Left;