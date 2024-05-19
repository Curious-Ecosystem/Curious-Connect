import React from 'react';
import icon1 from '../../../assets/Landing-Page-Assets/ai.png';

const featuresData = [
  {
    // icon: "../../../assets/Landing-Page-Assets/ai.png",
    icon: '/src/assets/Landing-Page-Assets/ai.png',
    title: 'AI Chatbot',
    description:
      'Engage with our AI chatbot directly inside the meet and get your doubt clarified',
  },
  {
    icon: '/src/assets/Landing-Page-Assets/letter.png',
    title: 'Interactive White Board',
    description: 'Have realistic interaction with interactive white board',
  },
  {
    icon: '/src/assets/Landing-Page-Assets/encrypted.png',
    title: 'End to End Encryption',
    description: 'Enjoy seamless collaboration with end to end encryption',
  },
  {
    icon: '/src/assets/Landing-Page-Assets/privacy.png',
    title: 'Privacy Protection',
    description:
      'Enjoyseamless collaboration without compromising on privacy or security concerns',
  },
];
const Feature = () => {
  return (
    <div className='w-full h-full text-cyan-50 text-2xl text-center p-4 sm:p-5 md:p-5 mt-5'>
      <h5 className='w-full h-full text-cyan-50 text-2xl md:text-3xl leading-8 md:leading-3 tracking-normal p-2 sm:p-3 font-semibold text-center'>
        Curious Connect Unique Attributes
      </h5>
      <p className='text-sm md:text-xl font-normal tracking-normal text-gray-500 p-3 w-[98%] md:w-[70%] mx-auto'>
        With SFU integrated server. We engineered a platform with maximum video
        quality lowest latency that makes your calls crystal clear. Compatible
        with all browsers and platforms!
      </p>
      <div className='m-0 sm:m-4 flex flex-row justify-between flex-wrap'>
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className='p-2 sm:p-5 my-6 bg-white xl:my-0 xl:w-[22%] w-[48%] sm:w-[45%] transition-all duration-[0.5s] select-none ease-in-out delay-0 rounded-lg shadow hover:scale-105'>
            <img
              className='sm:w-20 sm:h-20 sm:p-3 w-12 h-12 p-2'
              src={feature.icon}
              alt={feature.title}
            />
            <h5 className='mb-1 sm:mb-2 sm:text-lg text-[10px] text-left md:text-xl font-semibold tracking-tight text-[#000000]'>
              {feature.title}
            </h5>
            <p className='mb-1 sm:mb-3 font-normal text-[8px] leading-4 sm:text-sm md:text-base text-[#818181] text-ellipsis sm:leading-6 text-left'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
