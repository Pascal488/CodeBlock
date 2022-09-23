import React from "react";
import Navbar from "../components/Navbar";
import Search from './Search';
import Chats from "./Chats";


const Sidebar = () =>{
    return(
        <div className="w-1/4   border-r-2 border-sky-600 bg-slate-50">
            <Navbar/>
            <Search />
            <Chats/>

        </div>
    )
}

export default Sidebar;