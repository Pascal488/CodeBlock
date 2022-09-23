import React from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'
import {AiOutlineUserAdd} from 'react-icons/ai';
import {BsFillCameraVideoFill} from 'react-icons/bs';

import Messages from './Massages';
import Input from './Input';
const Chat = () => {
  return (
    <div className='w-4/5'>
      <div className='relative flex flex-col justify-between  h-full'>
        <div className='sticky top-0 z-10 p-2 flex justify-between items-center bg-slate-300'>
          {/* Chat info */}
          <div className=''>
            <span>Juma</span>
          </div>

          {/* Icons */}
          <div className='flex text-xl gap-3 cursor-pointer'>
            <AiOutlineUserAdd/>
            <BsFillCameraVideoFill/>
            <FiMoreHorizontal/>
          </div>
        </div>

        <div className='max-h-max overflow-y-scroll py-10'>
          <Messages/>   
        </div>
        
        <div className='absolute bottom-0 z-10 w-full'>
        <Input />
        </div>
     </div>


      </div>



  )
}

export default Chat