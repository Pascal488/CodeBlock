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
        
        type="text" placeholder='Enter a task here ' className='relative left-5 w-64 h-10 border-blue-600 border-solid border-2 rounded bg-teal-50 p-2 sm:relative sm:left-0'/>
        <button className='w-12 h-7 relative right-9 rounded-xl bg-blue-700 sm:relative sm:-right-24 sm:-top-9' type='submit'>Go</button>
   </form>
  )
}

export default Inputfield