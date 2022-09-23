import React from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'
import {AiOutlineUserAdd} from 'react-icons/ai';
import {BsFillCameraVideoFill} from 'react-icons/bs';

import Messages from './Massages';
import Input from './Input';
const Chat = () => {
  return (
    <div className='w-4/5'>

      <div className='  p-3 flex justify-between items-center bg-slate-300'>
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

      
     
        <Messages/>
      
     
        <Input/>
      

      </div>



  )
}

export default Chat