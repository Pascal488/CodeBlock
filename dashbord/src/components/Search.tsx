import React from "react";
import {FiSearch} from 'react-icons/fi'

const name = 'Search here';

const icon = <FiSearch/>;


const Search = () =>{
    return(
        <div>
        <div className="pr-9 w-full" >
         <input type="text" name="" id="" className="pb-2 pt-2 pr-5 pl-9 w-40  text-sm bg-neutral-800 outline-none" placeholder={name} />
        <span className="relative bottom-7 left-3 decoration-white text-xl">
            {icon}
        </span>
        </div>
        </div>
    )
}


export default Search;