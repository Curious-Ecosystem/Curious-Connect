import React from 'react'
import 'remixicon/fonts/remixicon.css'

const IndividualCard = (props) => {
    const {logo,heading,desc} = props.dataProps; 
  return (
    <div className='w-full border-2 border-cyan-900 p-5 rounded-lg shadow-xl'>
      <div className="logo text-4xl font-bold text-blue-600">{logo}</div>
      <h3 className="card-heading font-bold text-3xl">{heading}</h3>
      <p className="card-desc text-gray-600">{desc}</p>
    </div>
  )
}

export default IndividualCard
