import React, { useEffect, useState } from 'react';
import { Todo } from './models';

import {AiFillEdit,AiFillDelete} from 'react-icons/ai';

import {MdOutlineDone } from 'react-icons/md';

import { Draggable } from 'react-beautiful-dnd';

import { useRef } from "react";
interface Props{
    index:number;
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;} 



const Singlecomponent = ({index,todo,todos,setTodos}:Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const  [state, setState] = useState<boolean>(false);


    const changebgcolor = () =>{
        setState(!state);
    }
    
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);

    const handeleDone = (id:number) =>{
        setTodos(todos.map((todo)=>
        todo.id === id? {...todo, isDone:!todo.isDone}:
        todo))
        

        
        //console.log("Hello there")
    };

    const handeleDelete = (id:number) => {
        setTodos(todos.filter((todo)=> todo.id !== id ))
    };
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
      };

      console.log(todo)
 
  return (
    <Draggable draggableId={todo.id.toString()} index= {index}>
        {
            (provided)=>(
                <form  className='flex flex-row rounded-xl m-1 cursor-pointer  w-full h-11 bg-blue-700 md:m-auto'
                 onSubmit={(e)=>handleEdit(e,todo.id)}
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}
                 ref= {provided.innerRef}
                 >
    {edit?(
        <input type="text" value={editTodo} onChange={
            (e)=>setEditTodo(e.target.value)} className='p-2 w-full'/>
    ):todo.isDone?(
            <s className={'p-2 text-xl text-left flex-1 ' + 'bg-red-500 '}>
                {todo.todo}
                </s>

        ):(
    <span onClick={changebgcolor} className='p-2.5 text-xs text-left flex-1'>{todo.todo}</span>

        )
    }
    
    
    <div className='flex flex-row m-2 g-2 justify-around w-auto'>
        <span className='text-xl cursor-pointer m-1 ' onClick ={() =>{
            if(!edit && !todo.isDone){
                setEdit(!edit);
            }
                }}
                >
            <AiFillEdit />
        </span>


        <span className='text-xl cursor-pointer m-1'onClick={()=>handeleDelete(todo.id)}>
            <AiFillDelete />
        </span>
        <span className='text-xl cursor-pointer m-1 ' onClick={()=>handeleDone(todo.id)}>
            <MdOutlineDone />
        </span>

    </div>
   </form>
            )
        }
        
    </Draggable>
   
  );
};

export default Singlecomponent