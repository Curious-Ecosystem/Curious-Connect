import React from 'react'
import IndividualCard from './IndividualCard'

const MeetingCards = () => {
  const data = [
    {
      logo:<i class="ri-add-line"></i>,
      heading:"Video",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, non!"
    },
    {
      logo:<i class="ri-user-add-fill"></i>,
      heading:"Video",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, non!"
    },
    {
      logo:<i class="ri-calendar-line"></i>,
      heading:"Video",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, non!"
    },
    {
      logo:<i class="ri-live-line"></i>,
      heading:"Video",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, non!"
    }
  ]
  return (
    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5'>
      {data.map((ele, index) =>{
        return <IndividualCard dataProps={ele} key={index}/>
      })}
    </div>
  )
}

export default MeetingCards
