import React from 'react'


const Newmeetupform = (props:any) => {
  const handleSubmit =  (e: any) => {
    e.preventDefault()

    const Title = e.target[0].value;
    const Image = e.target[1].value;
    const Address = e.target[2].value;
    const TextArea = e.target[3].value;

    //console.log("Values are",Title,Image,Address,TextArea)
     const meetupdata = {
          title:Title,
          image:Image,
          address:Address,
          TextArea:TextArea,
     }
     props.Newmeetup(meetupdata)
     //console.log(meetupdata)
   
  }
  
  return (
    <div className='flex items-center flex-col justify-center text-center p-20'>
      <div className='bg-black w-[300px] p-5 gap-5 rounded-sm'>

        <h3 className='text-white mb-2 text-xl '>Add new meetup </h3>
        <form action="" className='gap-5 ' onSubmit={handleSubmit}>
          <p className='text-left ml-9'><label htmlFor="" className='text-white '>Meetup Title</label></p>
          <input type="text" placeholder='Add title'id='title' className='border-2 border-black outline-none p-2' />
          <p className='text-left ml-9'><label htmlFor="" className='text-white '>Meetup Image Url</label></p>
          <input type="url" placeholder='Add image url' className='border-2 border-black outline-none p-2'/>
          <p className='text-left ml-9'><label htmlFor="" className='text-white '>Address</label></p>
          <input type="text" placeholder='Address ' className='border-2 border-black outline-none p-2'/>
          <p className='text-left ml-9'><label htmlFor="" className='text-white '>Description</label></p>
          <textarea  placeholder='Add new meet up' className='border-2 border-black outline-none p-2'/>
            <br/>
          <button className='bg-yellow-500 w-2/5 p-1 border-none rounded-sm'
            
          >
            Add Meetup
          </button>

          
        </form>
      </div>
    </div>
  )
}

export default Newmeetupform;