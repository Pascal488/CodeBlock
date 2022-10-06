import React, { useEffect } from 'react';
import image from '../images/Kilimanjaro.jpeg';


const Meetups = (props:any) => {
    
    
  return (
    <div className='max-w-[300px] bg-white  border-2 border-gray-100 text-black'>

    <ul>

 
    <li>
        <div className='max-w-[500px] '>
            <img src={props.image.Image1} className="max-w-[100%] p-2"/>
        </div>
        <div>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.discreption}</p>
        </div>
        <div className='p-2'>
            <button className='py-1 px-5 bg-yellow-500 text-black font-bold hover:bg-black hover:border-2 hover:border-yellow-500 hover:text-white'>
                To Favorite
            </button>
        </div>
    </li>
    </ul>
    </div>

  )
}

export default Meetups