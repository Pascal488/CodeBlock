import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

import Image1 from '../images/Kilimanjaro.jpeg';





const Dummy = [

  {
      id:'m1',
      title:'The first meet up',
      image:{Image1},
      address:'Kilimanjaro 12986 Meet-ups',
      discreption:'This is the first meet up'

  },
  {
      id:'m3',
      title:'The second meet up',
      image:{Image1},
      address:'Korea 69360 Meet-ups',
      discreption:'This is the second meet up'

  },
  {
    id:'m4',
    title:'The second meet up',
    image:{Image1},
    address:'Korea 69360 Meet-ups',
    discreption:'This is the second meet up'

}
]

const Allmeetups = (props:any) => {
  return (

  
      <div className='flex flex-col items-center align-middle p-10 text-center'>
        <h1 className='mb-5  font-semibold text-2xl'>All meet ups</h1>
       <ul>
              <MeetupList meetups={Dummy}/>
                
      </ul>
      </div>
      
      
  

  )
}

export default Allmeetups