import React, { useState } from 'react';
import logo from './logo.svg';

function App() {
  const [data,setData] = useState({
    Yourname:"",
    Loversname:""

  })
  const handle = (e:any)=>{
    const newdata:any = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '94509c7e82mshb6add7bfaecc75ap122b19jsna909a42423b8',
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
  };
  const handleSubmit =  (e:any) =>{
    e.preventDefault()
    let Yourname:string; 
    let Loversname:string; 

    Yourname =  e.target[1].value;
    Loversname = e.target[2].value;
    
  }




  fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname={Yourname}&fname={Loversname}', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  

 
 
  
  
  
  
  return (
    <div   className="flex  justify-center items-center w-screen h-screen bg-blue-200 sm:p-0">
                <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5 text-center bg-white p-16 text-black md:p-16 sm:p-5"    >
                <input type="text" name="Answer"className="outline-none p-1 text-center text-xl text-black">
                {/* {response} */}
                </input>

                    <h1>Get A %</h1>
                    <input onChange={(e) => handle(e)} type="text" name="Fname"  placeholder="Yourname"className="outline-none p-1 border border-sky-500"/>
                    <input onChange={(e) => handle(e)} type="text"name="Sname" placeholder="Loversname" className="outline-none p-1 border border-sky-500"/>     
                    <span>
                    <button className=" bg-sky-500 w-20 text-center text-black p-1">Calculate</button>
                    </span>
                </div>
                </form>

        </div>
  );
}

export default App;
