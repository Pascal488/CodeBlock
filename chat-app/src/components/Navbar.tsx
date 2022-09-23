import React from "react";

import Image from './images/Chat.jpeg';

import {HiOutlineLogout} from 'react-icons/hi';



const Navbar = () =>{
    return(
        <div>
            <div className="flex justify-between text-sm bg-slate-800 p-3 text-white">
                <div>
                <span className="text-sm">
                    FaruApp
                </span>
                </div>
                
                <div className="flex flex-row text-xs gap-1 items-center">
                    <div>
                    <span>
                <img src={Image}  alt="" className="w-5 h-5 rounded-full" />
                </span>
                    </div>
                <div>
                <span>
                    Juma 
                </span>
                </div>
                
                <div>
                <span>
                    <button className="bg-slate-900  text-white p-1 text-xs h-5" name="Login" >
                    <HiOutlineLogout/>
                    </button>
                </span>
                </div>
                </div>
                
            </div>
            <div className="">
            </div>
        </div>
    )
}

export default Navbar;