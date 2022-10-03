import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}
const Inputfield: React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  return (
   <form className='input ' onSubmit={handleAdd}>
        <input 
        value={todo}
        onChange = {
            (e)=>setTodo(e.target.value)
        }
        
        type="text" placeholder='Enter a task here ' className='relative left-5 w-64 h-10 border-blue-600 border-solid border-2 rounded bg-teal-50 p-2 sm:relative sm:left-0  xs:left-5 lw:top-0 lw:left-0'/>
        <button className='w-12 h-7 relative right-9 rounded-xl bg-blue-700 sm:relative sm:-right-24 sm:-top-9 xs:relative xs:top-0 xs:-left-10  lw:relative lw:-top-9 lw:left-24 do:left-0 do:top-0 do:bg-black' type='submit'>Go</button>
   </form>
  )
}

export default Inputfield