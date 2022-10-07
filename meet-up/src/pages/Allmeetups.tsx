import React from 'react';

import { useState,useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

import Image1 from '../images/Kilimanjaro.jpeg';




 const Dummy = [


  {
      id:'m1',
      title:'The second meet up',
      image:Image1,
      address:'Korea 69360 Meet-ups',
      discreption:'This is the second me'
  },

  {
    id:'m2',
    title:'The second meet up',
    image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address:'Korea 69360 Meet-ups',
    discreption:'This is the second me'
},
 
]

function Allmeetups() {

  const [isLoading, setIsloading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsloading(true)
    fetch('https://meet-19b09-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'GET'
      }
    ).then((response) => {
    

      return response.json();
    }
    ).then((data: any) => {
      console.log(data)
      const meetups: any = [];
      for (const key in data) {
        const meetup: any = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      console.log(meetups)

      setIsloading(false);
      setLoadedMeetups(meetups);

    });
  }, []);



  if (isLoading) {
    return (
      <p>
        Loading ..
      </p>
    );
  }
  return (

    <div className='flex flex-col items-center align-middle p-10 text-center text-black'>

        <h1 className='mb-5  font-semibold text-2xl'>All meet ups</h1>
        <ul>
          <MeetupList meetups={loadedMeetups} />

        </ul>

    </div>



  );
}

export default Allmeetups