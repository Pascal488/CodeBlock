import React from 'react';

import { Todo } from './models';

import Singlecomponent from './Singlecomponent';

import { Droppable } from 'react-beautiful-dnd';




interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos:Todo[];
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosList:React.FC<Props> = ({ todos, setTodos,completedTodos,setCompletedTodos}) => {
  return (
      <div className="flex w-1/2 gap-5  justify-center mt-3 relative left-96 md:flex md:flex-col md:left-0 md:items-center  md:justify-center md:w-full md:p-7 lg:flex-col sm:w-2/4">
        <Droppable droppableId='TodosList'>
          {
            (provided) =>(
              <div className="flex flex-col w-2/4 p-2 rounded-l bg-yellow-100" ref={provided.innerRef} {...provided.droppableProps}>
              <span className='uppercase text-3xl'>
                Active Task
              </span>
              {
              todos.map((todo,index)=>(
                  <Singlecomponent 
                  index = {index}
                  todo = {todo} 
                  key= {todo.id} 
                  todos={todos}
                  setTodos = {setTodos}/>
              ))}
          {provided.placeholder}

          </div>
            )
          }
        </Droppable>
        <Droppable droppableId='TodosRemove'>
          {
            (provided) =>(
              <div className='flex flex-col w-2/4 p-2 rounded-l  bg-red-100' ref={provided.innerRef} {...provided.droppableProps}>
              <span className='uppercase text-3xl'>
                    Completed Task
                  </span>
            {
          completedTodos.map((todo,index)=>(
              <Singlecomponent 
              index = {index}
              todo = {todo} 
              key= {todo.id} 
              todos={completedTodos}
              setTodos = {setCompletedTodos}
              />
          ))
        }
          {provided.placeholder}

              </div>
            )
          }
        </Droppable>

        
        

      </div>
  );
};

export default TodosList