import React from 'react';
import Image from './images/Chat.jpeg';


const Message = () => {
  return (
    <div className='p-1'>
        <div className='flex gap-3'>
                <div>
                <img src={Image} alt="" className="w-8 h-8 rounded-full"/>
                </div>

                <div className='bg-slate-900  w-max'>
                <div className='text-xs font-semibold text-white'>
                <p >
                  Hello kunte
                   </p>
                </div>
                
                </div>
        

        </div>
            


    </div>
    
  )
}

export default Message;