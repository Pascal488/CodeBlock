import React from 'react'
import Meetups from './Meetups'

const MeetupList = (props:any) => {
  return (
    <ul >
    <li className='flex flex-wrap  gap-5 text-white'>
           
           {
          props.meetups.map((meetups:any)=>{
            return(
              <Meetups
                key={meetups.id}
                id={meetups.id}
                image={meetups.image}
                title={meetups.title}
                discreption ={meetups.discreption}
              />
              
            ) 
          })
         }
    </li>
    </ul>
  )
}

export default MeetupList