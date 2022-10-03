import React from "react";
import Search from "./Search";

import {IoIosStats } from 'react-icons/io'
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Calender from "./Calender";
import Invoices from    "./Invoices";
import Teams from "./Teams";
import Setting from "./Setting";
import Card from "./Card";
import Logout from "./Logout";

const style = {color:"#171710"};

const color = {style}

const Nav = () => {
    return(
        <div className="bg-neutral-900 text-gray-400 flex  flex-col m-0 w-60 fixed h-full overflow-auto  align-center text-xl basis-1/4 ">
            <div className="flex p-5">
                <span className="text-2xl text-cyan-500">
                <IoIosStats/>
                </span>
                <h2 className="text-white font-extrabold ml-3">
                 TASKION
                </h2>
            </div>
            <div >
            <ul className="list-none p-5"> 
            <li >
                <Search/>
            </li>
            <li >
                <Dashboard/>
            </li>
            <li >
                <Projects />
            </li>
            <li >
                <Calender />
            </li>

            <li >
                <Invoices />
            </li>
            <li >
                <Teams />
            </li>
            <li >
             <Setting />
            </li>
            <li className="fixed bottom-0">
             <Logout />
            </li>
           </ul>
           <Card/>

            </div>

        </div>
    )   
}

export default Nav;