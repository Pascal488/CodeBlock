import React from 'react'

import {useNavigate} from 'react-router-dom';
import Newmeetupform from './Newmeetupform';

const Newmeetups = (props:any) => {
   const history = useNavigate()
  function addNewmeetup(meetupdata:any){
        fetch('https://meet-19b09-default-rtdb.firebaseio.com/meetups.json',
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