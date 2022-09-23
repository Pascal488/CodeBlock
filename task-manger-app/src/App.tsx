import React ,{ useState } from 'react';

import InputField from './components/inputfield';
import { Todo } from './components/models';
import TodosList from './components/TodosList';

import {DragDropContext, DropResult} from 'react-beautiful-dnd';

// TODO: 2. add tailwind css

const  App: React.FC = () =>  {
  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);
  const [completedTodos,setCompletedTodos] = useState<Todo[]>([])
  //console.log(todo)

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()

    if(todo){
    settodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      settodo("")
    }
  };
  
  const onDragEnd = (result:DropResult) =>{   
     const { destination, source } = result;


  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  let add;
  let active = todos;
  let complete = completedTodos;
  // Source Logic
  if (source.droppableId === "TodosList") {
    add = active[source.index];
    active.splice(source.index, 1);
  } else {
    add = complete[source.index];
    complete.splice(source.index, 1);
  }

  // Destination Logic
  if (destination.droppableId === "TodosList") {
    active.splice(destination.index, 0, add);
  } else {
    complete.splice(destination.index, 0, add);
  }

  setCompletedTodos(complete);
  settodos(active);
};


  
  return (
    <DragDropContext onDragEnd = {onDragEnd}>
          <div className='flex flex-col item-center w-screen h-screen bg-white-100 text-center'>
              <span className='uppercase text-3xl m-7 text-blue-700' >
                Task Manager
              </span>
              <InputField todo = {todo} setTodo= {settodo} handleAdd = {handleAdd}/>
              {/* Displaying the list of todos */}

              <TodosList 
              todos={todos} 
              setTodos={settodos}
              completedTodos = {completedTodos}
              setCompletedTodos = {setCompletedTodos}
              />
            </div>

    </DragDropContext>
 
  );};


export default App;
