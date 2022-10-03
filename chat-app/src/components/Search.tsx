import React from "react";

import Image from './images/Chat.jpeg';




const Search = () =>{
    return(
        <div>
            <div className="cursor-pointer border-b-2 border-sky-700 mb-1">
            <div className=" ">
            <div className="">
                <input type="text" name="" id="" placeholder="Search user"className="outline-none w-full p-3 bg-slate-50 border-b-2 border-sky-100" />
            </div>
            {/* User chat below */}
            <div className="flex gap-2 items-center bg-slate-300 p-3 hover:bg-slate-800 hover:text-white hover:font-bold md:p-0 md:gap-1">
            <img src={Image} alt="" className="w-8 h-8 rounded-full"/>
            <div>
                <span>
                    Juma
                </span>
                <p className='text-xs font-semibold'>
                  Hello kunte </p>
            </div>
            </div>
            {/* User chat below */}
            </div>

            </div>
        </div>
    )
}

export default Search;