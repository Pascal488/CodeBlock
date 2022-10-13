import React from 'react'
import Meetups from './Meetups'

const MeetupList:any = (props:any) => {
  return (
    <ul >
    <li className='flex flex-wrap  gap-5 text-white'>
           
           {
          props.meetups.map((meetup:any)=>{
            return(
              <Meetups
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                discreption ={meetup.discreption}
              />
              
            ) 
          })
         }
      </li>
    </ul>
  )
}

export default MeetupList