import React from 'react';
import Image from './images/Chat.jpeg';


const Chats = () => {
  return (
    <div className='cursor-pointer '>
        <div className="flex gap-2 items-center bg-gray-300 p-3 hover:bg-slate-800 hover:text-white hover:font-bold mb-1">
            <img src={Image} alt="" className="w-8 h-8 rounded-full"/>
            <div >
                <span>
                    Juma
                </span>
                <p className='text-xs font-semibold'>
                  Hello how are you </p>
            </div>
            </div>
            <div className="flex gap-2 items-center bg-gray-300 p-3 hover:bg-slate-800 hover:text-white hover:font-bold mb-1">
            <img src={Image} alt="" className="w-8 h-8 rounded-full"/>
            <div >
                <span>
                    Juma
                </span>
                <p className='text-xs font-semibold'>
                  Hello how are you </p>
            </div>
            </div>
            <div className="flex gap-2 items-center bg-gray-300 p-3 hover:bg-slate-800 hover:text-white hover:font-bold mb-1">
            <img src={Image} alt="" className="w-8 h-8 rounded-full"/>
            <div >
                <span>
                    Juma
                </span>
                <p className='text-xs font-semibold'>
                  Hello how are you </p>
            </div>
            </div>
    </div>
  )
}

export default Chats;
