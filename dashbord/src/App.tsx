import React from 'react';
// import {AiFillEdit,AiFillDelete} from 'react-icons/ai';

import Nav from './components/Nav';
import Center from './components/Center';
import Left from './components/Left';


function App() {
  return (
    <div className="flex  h-screen overflow-scroll bg-slate-100 ">
      <div className='basis-1/4'>
      <Nav/>
      </div>
      <div className='basis-3/6 md:w-full md:flex md:justify-center'>
      <Center/>
      </div>
      <div className='basis-1/5 md:hidden'>
      <Left/>
      </div>
    </div>
  );
}

export default App;
