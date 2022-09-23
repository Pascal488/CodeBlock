import React from "react";

import {GoCalendar} from 'react-icons/go';
import {BsArrowRight,BsPauseCircleFill,BsPlayCircleFill,BsArrowUpShort,BsArrowDownShort} from 'react-icons/bs';
import {MdOutlineMoreHoriz} from 'react-icons/md'

import {TbMessageDots} from 'react-icons/tb';
import {FiLink2} from 'react-icons/fi';
const icon = <GoCalendar/>;

const more = <MdOutlineMoreHoriz/>;

const projects = 12;

const tasks = 125;

const hours = "60:30:05";
const style1 = { backgroundColor:"#FF4500",borderRadius:"50%",color:"white"};

const Pauseicon = <BsPauseCircleFill style={style1}/>;

const style2 = { backgroundColor:"#0000FF",borderRadius:"50%",color:"white"};
const Pauseicon2 = <BsPlayCircleFill style={style2}/>;


const messageicon = <TbMessageDots/>;



const Center = () =>{
    return(
        <div >
            <div className="flex flex-col gap-4">
            <div className="flex justify-between p-4 border-b-2 -ml-32 bg-slate-100">
                <div>
                <h1 className="text-2xl cursor-pointer ">Dashboard</h1>   
                </div>
                <div className="bg-white flex flex-row px-5 py-2 cursor-pointer shadow-2xl">
                <span className="text-2xl ">
                    {icon} 
                </span>
                <span className="relative left-1 ">
                16 Sep 2022
                </span>
                </div>
            </div>
             <div className="text-sm">
            <h1 className="font-bold">Project Summary </h1>
            <h3 className="text-xs text-gray-500">Let's finish your project for today</h3>
            </div> 
            
            <div className="flex gap-4 ">  
            <div >
                <div className="w-52 h-36 bg-blue-400  mb-4">
                    <div className="flex  align-middle p-8 text-white text-xs">
                    <span className="text-2xl w-10 h-10 bg-blue-500  p-2 cursor-pointer">
                            {icon}
                        </span> 
                         <span className="p-2">
                            {projects}<br/>
                            In progress projects
                        </span>  
                    </div>
                    <div className="flex justify-between relative -top-5 p-3 bg-blue-500  text-sm text-white cursor-pointer">
                    <span>
                    View Details
                    </span>
                    <span className="text-xl ">
                    <BsArrowRight/>
                    </span>
                    </div>
                </div>  
                <div className="w-52 h-40 bg-blue-400  ">
                <div className="flex   align-middle p-8 text-white text-xs">
                    <span className="text-2xl w-10 h-10 bg-blue-500  p-2 cursor-pointer">
                            {icon}
                        </span> 
                         <span className="p-2">
                            {projects}<br/>
                            In progress projects
                        </span>
                    </div>
                </div>
                    <div className="flex justify-between relative -top-7 p-3 bg-blue-500  text-white text-sm cursor-pointer">
                    <span>
                    View Details
                    </span>
                    <span className="text-xl ">
                    <BsArrowRight/>
                    </span>
                    </div>
                </div>
                <div>
                <div className="w-96 h-64 bg-white mb-4 flex flex-col justify-between">
                    <div className="flex justify-between p-3">
                        <div>
                            <span>
                            Project statistics
                            </span>
                        </div>
                        <div>
                            <span className="text-2xl cursor-pointer">
                                {more}
                            </span>
                        </div>
                    </div>
                    {/* <div className="flex justify-between p-4 hidden">
                        <div>
                            <span>
                            Project statistics
                            </span>
                        </div>
                        <div>
                            <span className="text-2xl cursor-pointer">
                                {more}
                            </span>
                        </div>
                    </div> */}

                    <div className="flex justify-around p-4 -ml-10">

                    <div className="w-2 h-2 bg-blue-500 float-left ">
                    <span className="relative -top-2 left-5 text-xs">
                            Tasks 
                        </span>
                    </div>
                    
                        <div className="w-2 h-2 bg-black ">
                        <span className="relative -top-2 left-5 text-xs">
                            Tasks
                        </span>
                         </div>
                       
                        <div className="w-2 h-2 bg-orange-500">
                        <span className="relative -top-2 left-5 text-xs">
                            Tasks
                        </span>
                        </div>
                    </div>
                </div>
                <div className=" w-96 h-16 bg-white text-sm text-black">

                <div className="flex justify-around ">
                <div className="flex  p-2">
                    <div className="flex-col">
                    <h2 className="mb-2 text-xs text-gray-500">
                        Total working hour
                        </h2>
                        <span className="text-xl">
                        {hours}
                        </span>
                    </div>
                        <div className="relative top-6 -left-1 ">
                        <span className=" cursor-pointer">
                        <BsArrowUpShort/> 
                        <span>
                        
                        </span>
                        
                        </span>
                        </div>
                    </div>
                    {/* A vertical line */}
                    <div className="relative top-3 -left-3 border-l-2 border-gray-100  h-10">
                    </div>
                    {/* A vertical line */}

                    <div className="flex  p-2">
                    <div className="flex-col">
                        <h2 className="mb-2 text-xs text-gray-500">
                        Total Task Activity
                        </h2>
                        <span className="text-xl ">
                        {tasks} Task
                        </span>
                    </div>
                        <div className="relative top-6 -left-1">
                        <span className="bg-blue-500 cursor-pointer">
                        <BsArrowDownShort/> 
                        </span>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>

            <div className="">
                <div >
                    <ul className="flex justify-between p-5 max-w-xl ">
                        <li className="-ml-5">Projects List</li>
                        <li className="underline text-blue-500 ">
                            <span className="flex gap-x-4">
                            <span >
                            <a href="" className="-ml-10">See all tasks</a>
                                </span>
                        <span className="text-xl">
                    <BsArrowRight/>

                        </span>
                            </span>
                            
                        
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5  text-black ">
                <div>
                <div className="w-5/6 h-20 bg-white mb-5 shadow-lg">
                    <div className="flex gap-5">
                    <div className="flex gap-3 p-4">
                        <span className="text-5xl ">
                        
                        {Pauseicon}
                        </span>
                        <span className="font-semibold">
                        Time to work <br />
                        <span className="text-xs text-gray-400">
                         12 Aug - 26 Aug
                            </span> 
                        </span>
                       
                    </div>
                    <div className="flex  p-4 ">
                        <div className="flex-col">
                        <div className="">
                        <span className="font-semibold text-sm">
                            PreCorp Web design 
                            </span>
                        </div>
                        <div className="flex flex-row text-xs p-2 gap-2 -ml-2 text-gray-400">
                        <span className="text-sm ">
                            {messageicon} 
                            </span>
                            <span>
                                26 Comments
                            </span>
                            <span className="border-r-2 border-gray-400 text-xs">

                            </span>
                            <span className="text-sm">
                                <FiLink2/>
                            </span>
                            <span>
                                2 Documents
                            </span>
                        </div>
                        </div>
                        
                    
                    </div>
                    <div className="flex  p-3 -ml-7">
                        <div className="flex-col relative top-3">
                        <div className="">
                        <span className="text-xs">
                            75% Completed 
                            </span>
                        </div>
                        <div className="flex flex-row text-xs p-1 gap-2 -ml-2 text-gray-400">    
                        <span className="w-full h-2   bg-gray-200 rounded-lg">
                                <div className="bg-orange-600 h-2 w-9/12 rounded-lg">
                                </div>
                        </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="w-5/6 h-20 bg-white mb-5 shadow-lg">
                    <div className="flex gap-5">
                    <div className="flex gap-3 p-4">
                        <span className="text-5xl ">
                        {Pauseicon2}
                        </span>
                        <span className="font-bold" >
                        Time to work <br />
                        <span className="text-xs text-gray-400">
                         12 Aug - 26 Aug
                            </span> 
                        </span>
                       
                    </div>
                    <div className="flex  p-4 ">
                        <div className="flex-col">
                        <div className="">
                        <span className="font-semibold text-sm">
                            PreCorp Web design 
                            </span>
                        </div>
                        <div className="flex flex-row text-xs p-2 gap-2 -ml-2 text-gray-400">
                        <span className="text-sm ">
                            {messageicon} 
                            </span>
                            <span>
                                26 Comments
                            </span>
                            <span className="border-r-2 border-gray-400 text-xs">

                            </span>
                            <span className="text-sm">
                                <FiLink2/>
                            </span>
                            <span>
                                2 Documents
                            </span>
                        </div>
                        </div>
                        
                    
                    </div>
                    <div className="flex  p-3 -ml-7">
                        <div className="flex-col relative top-3">
                        <div className="">
                        <span className="text-xs">
                            40% Completed 
                            </span>
                        </div>
                        <div className="flex flex-row text-xs p-1 gap-2 -ml-2 text-gray-400">    
                        <span className="w-full h-2   bg-gray-200 rounded-lg">
                                <div className="bg-blue-600 h-2 w-2/5 rounded-lg">
                                </div>
                        </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="w-5/6 h-20 bg-white mb-5 shadow-lg">
                    <div className="flex gap-5">
                    <div className="flex gap-3 p-4">
                        <span className="text-5xl ">
                        {Pauseicon2}
                        </span>
                        <span className="font-bold" >
                        Time to work <br />
                        <span className="text-xs text-gray-400">
                         12 Aug - 26 Aug
                            </span> 
                        </span>
                       
                    </div>
                    <div className="flex  p-4 ">
                        <div className="flex-col">
                        <div className="">
                        <span className="font-semibold text-sm">
                            PreCorp Web design 
                            </span>
                        </div>
                        <div className="flex flex-row text-xs p-2 gap-2 -ml-2 text-gray-400">
                        <span className="text-sm ">
                            {messageicon} 
                            </span>
                            <span>
                                26 Comments
                            </span>
                            <span className="border-r-2 border-gray-400 text-xs">

                            </span>
                            <span className="text-sm">
                                <FiLink2/>
                            </span>
                            <span>
                                2 Documents
                            </span>
                        </div>
                        </div>
                        
                    
                    </div>
                    <div className="flex  p-3 -ml-7">
                        <div className="flex-col relative top-3">
                        <div className="">
                        <span className="text-xs">
                            40% Completed 
                            </span>
                        </div>
                        <div className="flex flex-row text-xs p-1 gap-2 -ml-2 text-gray-400">    
                        <span className="w-full h-2   bg-gray-200 rounded-lg">
                                <div className="bg-blue-600 h-2 w-2/5 rounded-lg">
                                </div>
                        </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>

                </div>
                

                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Center;