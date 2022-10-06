import React from 'react';
import {Link } from 'react-router-dom';



const Mainnavigation = () => {
  return (
    <header >
        
        <nav>

            <ul className='list-none float-left p-5 flex flex-row gap-5 bg-black w-full text-white justify-around  '>
            <li >
             Meet-Ups
                </li>
                <li className='hover:bg-yellow-500  hover:text-black'>
                <Link to='/' className='py-5 px-3'>
                    All Meet-Ups
                </Link>
                </li>
                <li className='hover:bg-yellow-500  hover:text-black'>
                <Link to='/new'  className='py-5 px-3'>
                    Add Meet-Ups
                </Link>
                </li>
                <li className='hover:bg-yellow-500  hover:text-black'>
                <Link to='/favorite'  className='py-5 px-3'>
                    Favorites Meet-Ups
                </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Mainnavigation