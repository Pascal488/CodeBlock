import React from 'react';
import logo from './logo.svg';

function App() {
  const handleSubmit =  (e:any) =>{
    e.preventDefault()
    const Yourname = e.target[1].value;
    const Loversname = e.target[2].value;

    console.log(Yourname)
    console.log(Loversname)

    const Answer = e.target[0].value = Yourname + Loversname

    console.log(Answer)
    

  }
  return (
    <div   className="flex  justify-center items-center w-screen h-screen bg-blue-200 sm:p-0">
                <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5 text-center bg-white p-24 text-black md:p-16 sm:p-5"    >
                <input type="text" name="Answer"className="outline-none p-1 text-center text-xl"/>

                    <h1>Get A %</h1>
                    <input type="text" name="Fname"  placeholder="Yourname"className="outline-none p-1 border border-sky-500"/>
                    <input type="text"name="Sname" placeholder="Loversname" className="outline-none p-1 border border-sky-500"/>     
                    <span>
                    <button className=" bg-sky-500 w-20 text-center text-black p-1">Calculate</button>
                    </span>
                </div>
                </form>

        </div>
  );
}

export default App;
