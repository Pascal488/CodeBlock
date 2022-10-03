import React from 'react';
import Image from './images/Chat.webp';



const Message = () => {
  return (
    <div className='p-3 '>
        <div className='flex gap-3 flex-row-reverse'>
                <div>
                <img src={Image} alt="" className="w-8 h-8 rounded-full"/>
                </div>

                <div className='bg-slate-900  w-max p-2 rounded-br-lg'>
                <div className='text-xs font-semibold text-white'>
                  <p>
                  Hello kunte
                   </p>
                </div>
                <div>
                <img src={Image} alt="" className='w-40 h-40'  />

                </div>
                
                </div>
        

        </div>
            


    </div>
    
  )
}

export default Message;