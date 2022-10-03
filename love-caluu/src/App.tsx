import React, { useState } from 'react';
import { ApiService } from './api.service';
import logo from './logo.svg';

function App() {

  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    let Yourname: string;
    let Loversname: string;

    Yourname = e.target[1].value;
    Loversname = e.target[2].value;
    console.log('Values ar here', Yourname, Loversname);
    const API = new ApiService();
    let data: any = await API.calculateValue(Yourname, Loversname);
    console.log(data.data);
    setResponse(data.data);
  }

  return (
    <div className="flex  justify-center items-center w-screen h-screen bg-blue-200 sm:p-0">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 text-center bg-white p-16 text-black md:p-16 sm:p-5"    >
          <input type="text" name="Answer" className="outline-none p-1 text-center text-xl text-black " placeholder="Percentage" value={response?.percentage}/>
          <span className='text-xs'>
          {response?.result}

          </span>

          <h1>Get A %</h1>
          <input type="text" name="Fname" placeholder="Yourname" className="outline-none p-1 border border-sky-500" />
          <input type="text" name="Sname" placeholder="Loversname" className="outline-none p-1 border border-sky-500" />
          <span>
            <button className=" bg-sky-500 w-20 text-center text-black p-1">Calculate</button>
          </span>
        </div>
      </form>

    </div>
  );
}

export default App;
