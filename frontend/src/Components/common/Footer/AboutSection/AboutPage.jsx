import React from 'react';

import videoConf from '../../../../assets/About-Page-Assets/videoConf.png';
import screenShare from '../../../../assets/About-Page-Assets/screenShared.svg';
import chatMsg from '../../../../assets/About-Page-Assets/chatMsg.svg';
import encrypt from '../../../../assets/About-Page-Assets/encrypt.svg';
import customMeet from '../../../../assets/About-Page-Assets/customMeet.svg';

const curiousFeatures = [
  {
    'name': 'High-quality video conferencing',
    src: videoConf,
  },
  {
    'name': 'Screen sharing capabilities',
    src: screenShare,
  },
  {
    'name': 'Real-time chat and messaging',
    src: chatMsg,
  },
  {
    'name': 'Secure end-to-end encryption',
    src: encrypt,
  },
  {
    'name': 'Customizable meeting settings',
    src: customMeet,
  },
]

function AboutPage() {
  return (
    <div>
      <div className='bg-gradient min-h-screen'>
        <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-extrabold text-gray-100 mb-4'>
            About Curious Connect
          </h1>
          <p className='text-lg text-gray-100 mb-6'>
            Curious Connect is your go-to platform for revolutionizing virtual
            collaboration. Designed by Curious Ecosystem, it's a
            microservice-based video conferencing application aimed at enhancing
            remote team interactions, webinars, and online classes.
          </p>
          <p className='text-lg text-gray-100 mb-6'>
            With a focus on seamless user experiences, secure authentication,
            real-time communication, and optimized media processing, Curious
            Connect empowers teams to connect effortlessly and achieve their
            goals.
          </p>
          <p className='text-lg text-gray-100 mb-6'>
            Explore Curious Connect to redefine how you collaborate online and
            unlock new levels of productivity and engagement.
          </p>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Key Features
            </h2>
            <ul className='list-none list-inside text-lg flex flex-wrap justify-center text-center text-gray-700'>
              {curiousFeatures.map((i, key) => {
                return (
                  <li key={key} className='w-48 mb-6 flex justify-center items-center flex-col'>
                    <img className='h-28 mb-2' src={i.src} alt={i.name} />
                    <span>
                      {i.name}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}

export default AboutPage;
