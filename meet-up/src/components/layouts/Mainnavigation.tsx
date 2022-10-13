import React from 'react';
import {Link } from 'react-router-dom';



const Mainnavigation = (props:any) => {
  return (
    <header >
        
        <nav >

            <ul className='list-none float-left p-5 flex flex-row gap-5 bg-black w-full text-white justify-around  '>
            <li className='md:hidden'>
             MeetUps
                </li>
                <li className='hover:bg-yellow-500  hover:text-black '>
                <Link to='/' className='py-5 px-3'>
                    All MeetUps
                </Link>
                </li>
                <li className='hover:bg-yellow-500  hover:text-black'>
                <Link to='/new'  className='py-5 px-3'>
                    Add MeetUps
                </Link>
                </li>
                <li className='hover:bg-yellow-500  hover:text-black'>
                <Link to='/favorite'  className='py-5 px-3'>
                    Favorites MeetUps
                </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Mainnavigation