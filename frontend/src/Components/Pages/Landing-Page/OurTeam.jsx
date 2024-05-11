import React from 'react'
// Importing our team members data
import {OurTeamMembers} from '../../../Data/ourTeam-data'
const OurTeam = () => {

  return (
    <div>
      <h1 className='text-[40px] font-bold text-center'>Our Team</h1>
      <div className='w-full flex flex-wrap justify-evenly p-8'>
        {/*Our Team Members Cards*/}
        {OurTeamMembers.map((member,index) => {
          return (
            <div key={index}
            className='w-[200px] h-[200px] flex flex-col items-center justify-center'
            >
              <img src={member.image} alt={member.name} 
              className='w-[150px] h-[150px] rounded-full'
              />
              <p
              className='text-[23px] text-center font-serif font-bold my-3'
              >{member.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurTeam
