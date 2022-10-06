import React from 'react'

import {useNavigate} from 'react-router-dom';
import Newmeetupform from './Newmeetupform';

const Newmeetups = (props:any) => {
   const history = useNavigate()
  function addNewmeetup(meetupdata:any){
        fetch('https://meet-up-a040c-default-rtdb.firebaseio.com/meetup.json',
        {
          method:'POST',
          body:JSON.stringify(meetupdata),
          headers:{
            'Content-Type':'application/json'
          }
        }
        ).then(()=>{
          history('/', {replace: true})
        })
    //props.newMeetups(meetupdata)

   }

   
  
  return (
    <div>
      <Newmeetupform Newmeetup={addNewmeetup}/>
    </div>
  )
}

export default Newmeetups;