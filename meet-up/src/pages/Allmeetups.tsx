import React from 'react';

import { useState,useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

//import Image1 from '../images/Kilimanjaro.jpeg';





// const Dummy = [

//   {
//       id:'m1',
//       title:'The first meet up',
//       image:{Image1},
//       address:'Kilimanjaro 12986 Meet-ups',
//       discreption:'This is the first meet up'

//   },
//   {
//       id:'m3',
//       title:'The second meet up',
//       image:{Image1},
//       address:'Korea 69360 Meet-ups',
//       discreption:'This is the second meet up'

//   },
//   {
//     id:'m4',
//     title:'The second meet up',
//     image:{Image1},
//     address:'Korea 69360 Meet-ups',
//     discreption:'This is the second meet up'

// }
// ]

const Allmeetups = () => {

    const [isLoading, setIsloading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(()=>{
      fetch('https://meet-up-a040c-default-rtdb.firebaseio.com/meetup.json',
      ).then(response=>{
        return response.json
      }
      ).then((data:any) =>{

        const meetups:any = [];
        for(const key in data){
          const meetup:any = {
            id:key,
            ...data[key],
          };
          meetups.push(meetup)

        }
        setIsloading(false);
        setLoadedMeetups(meetups)

      })
    },[])

  

  if(isLoading){
    return(
      <p>
        Loading ..
      </p>
    )
  }
  return (

  
      <div className='flex flex-col items-center align-middle p-10 text-center'>
        <h1 className='mb-5  font-semibold text-2xl'>All meet ups</h1>
       <ul>
              <MeetupList meetups={loadedMeetups}/>
                
      </ul>
      </div>
      
      
  

  )
}

export default Allmeetups