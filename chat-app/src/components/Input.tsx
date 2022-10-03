import React from 'react';
import {IoIosSend} from 'react-icons/io'
import {AiOutlineUserAdd} from 'react-icons/ai';
import {BsFillCameraVideoFill,BsImage} from 'react-icons/bs';
import{MdOutlineAttachFile} from 'react-icons/md';
const Input = () => {
  return (
    <div >

    <div className='h-10 w-full   border-b-2 border-sky-500 overflow-auto '>
      <div className='flex justify-between'>
      <input type="text" name="" id="" placeholder="Send message"className='w-full  p-2  outline-none bg-slate-900 text-white font-bold'/>
      <div className='flex bg-slate-900 text-white font-bold items-center gap-3 p-2 cursor-pointer text-xl'>
        <MdOutlineAttachFile/>
        <BsImage/>
        <IoIosSend/>
      </div>
        
      </div>
      <div>
      
      </div>

    </div>
    </div>

  )
}

export default Input