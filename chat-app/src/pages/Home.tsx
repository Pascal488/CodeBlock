import React from "react";

import Sidebar from "../components/Siderbar";
import Search from "../components/Search";
import Chats from "../components/Chats";
import Chat from "../components/Chat";
import Input from "../components/Input";
import Massages from "../components/Massages";





const Home = () =>{
    return(
        <div className="flex  justify-center items-center w-screen h-screen flex-row bg-blue-200">
                <div className="border border-sky-500 w-3/5 h-3/5 flex">
                <Sidebar/>
                <Chat/>
                </div>
        </div>
    )
}

export default Home;