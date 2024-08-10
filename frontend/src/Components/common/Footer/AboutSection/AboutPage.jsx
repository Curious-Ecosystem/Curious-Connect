import React, { useState } from 'react';
import { motion } from 'framer-motion';

import encrypt from '../../../../assets/About-Page-Assets/encrypt.svg';
import chatMsg from '../../../../assets/About-Page-Assets/chatMsg.svg';
import videoConf from '../../../../assets/About-Page-Assets/videoConf.png';
import customMeet from '../../../../assets/About-Page-Assets/customMeet.svg';
import screenShare from '../../../../assets/About-Page-Assets/screenShared.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typewriter } from 'react-simple-typewriter';

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true, // Disable pausing on hover
    cssEase: 'linear', // Add linear CSS easing
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const curiousFeatures = [
    {
      name: 'High-quality video conferencing',
      src: videoConf,
    },
    {
      name: 'Screen sharing capabilities',
      src: screenShare,
    },
    {
      name: 'Real-time chat and messaging',
      src: chatMsg,
    },
    {
      name: 'Secure end-to-end encryption',
      src: encrypt,
    },
    {
      name: 'Customizable meeting settings',
      src: customMeet,
    },
  ];

  const centerIndex =
    (currentIndex + Math.floor(settings.slidesToShow / 2)) %
    curiousFeatures.length;

  const sliderStyle = { cursor: 'grab' };

  // const aboutHeading= document.querySelector('.aboutHeading');

  return (
    <>
      <style>
        {`        
          .aboutHeading {
            font-size: 1.75rem;
            margin-bottom: 1rem;
            letter-spacing: widest;
            color: #f3f4f6;
            font-weight: 700;
            text-align: center;            
          }          
          .center-slide {
            transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
            transform: scale(1.1);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
          .slick-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .slick-track {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding-top: 12px;
            padding-bottom: 12px;
          }
        `}
      </style>
      <div className='bg-gradient min-h-screen flex items-center justify-center'>
        <div className='max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto py-12 sm:px-5 md:px-6 lg:px-8 h-full '>
          <div className='mb-10'>
            <motion.h1
              className='aboutHeading'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.58 }}>
              Our Mission
            </motion.h1>
            <motion.div
              className='space-y-5 text-center'
              initial={{ opacity: 0.8, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}>
              <p className='tracking-wider text-3xl md:text-4xl lg:text-6xl mb-6 text-blue-400 leading-tight'>
                Empowering teams to{' '}
                <span className='text-gray-100'>
                  <Typewriter
                    words={['Connect', 'Achieve']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    cursorColor='yellow'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={850}
                  />
                </span>
                <br /> their <span className='text-gray-100'>goals</span>{' '}
                effortlessly.
              </p>
            </motion.div>
            <motion.h1
              className='aboutHeading text-gray-800'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.58 }}>
              Our Identity
            </motion.h1>
            <motion.div
              className='bg-white rounded-lg shadow-md p-6 max-h-full max-w-full'
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}>
              <div className='flex flex-col gap-3 text-lg text-gray-800 text-justify'>
                <p>
                  <span className='font-bold text-[#2563eb]'>
                    Curious Connect{' '}
                  </span>
                  is your go-to platform for revolutionizing virtual
                  collaboration. <br />
                </p>
                <p>
                  Designed by{' '}
                  <span className='font-bold text-[#2563eb]'>
                    Curious Ecosystem
                  </span>
                  , it's a microservice-based video conferencing application
                  aimed at enhancing remote team interactions, webinars, and
                  online classes.
                </p>
                <p>
                  With a focus on seamless User Experiences, Secure
                  Authentication, Real-time Communication and Optimized Media
                  processing. Explore Curious Connect to redefine how you{' '}
                  <span className='font-bold text-[#2563eb]'>collaborate</span>{' '}
                  online and unlock new levels of productivity and engagement.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.h2
            className='aboutHeading'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.58 }}>
            Key Features
          </motion.h2>
          <motion.div
            className='bg-white rounded-lg shadow-md p-6 max-h-full'
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}>
            <Slider {...settings}>
              {curiousFeatures.map((feature, index) => (
                <div
                  key={index}
                  style={sliderStyle}
                  onMouseDown={(e) =>
                    (e.currentTarget.style.cursor = 'grabbing')
                  }
                  onMouseUp={(e) => (e.currentTarget.style.cursor = 'grab')}
                  onMouseLeave={(e) => (e.currentTarget.style.cursor = 'grab')}
                  className={`flex justify-center items-center flex-col mx-auto bg-white p-4 rounded-lg ${
                    index === centerIndex ? 'centerSlide' : ''
                  }`}>
                  <div className='flex text-center items-center flex-col'>
                    <img
                      className='h-28 mb-2'
                      src={feature.src}
                      alt={feature.name}
                    />
                    <span>{feature.name}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;



// ! Erorr COde
// import React from 'react';
// import { useState } from 'react';
// function AboutPage() {
//   const features = [
//     {
//       question: 'High-Quality Video Conferencing',
//       answer:
//         'Experience crystal-clear video calls that make you feel like youre in the same room.',
//     },
//     {
//       question: 'Screen Sharing Capabilities',
//       answer:
//         'Share your screen with ease to present documents, slideshows, or any other content in real-time.',
//     },
//     {
//       question: 'Real-Time Chat and Messaging',
//       answer:
//         'Communicate instantly with participants through integrated chat and messaging features.',
//     },
//     {
//       question: 'Secure End-to-End Encryption',
//       answer:
//         ' Ensure your meetings are private and secure with robust end-to-end encryption.',
//     },
//     {
//       question: 'Customizable Meeting Settings',
//       answer:
//         ' Tailor your meetings to fit your specific needs with customizable settings, from participant permissions to meeting layouts.',
//     },
//     {
//       question: 'Cross-Platform Compatibility',
//       answer:
//         'Access Curious Connect from any device, whether its a desktop, laptop, tablet, or smartphone.',
//     },
//     {
//       question: 'Recording and Playback',
//       answer:
//         ' Record your sessions for future reference or sharing with team members who couldnt attend.',
//     },
//   ];
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const Accordion = ({ data }) => {
//     return (
//       <div>
//         {data.map((el, i) => (
//           <AccordionItem
//             key={i}
//             question={el.question}
//             answer={el.answer}
//             isOpen={openIndex === i}
//             onClick={() => handleToggle(i)}
//           />
//         ))}
//       </div>
//     );
//   };

//   const AccordionItem = ({ question, answer, isOpen, onClick }) => {
//     return (
//       <div
//         className={`border border-gray-300 bg-white shadow-md rounded-md mb-4 p-4 transition-all duration-200 ${
//           isOpen ? 'border-t-4 border-t-gray-400' : ''
//         }`}
//         style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//         <button
//           className='w-full text-left flex justify-between items-center text-lg font-medium text-gray-700'
//           onClick={onClick}>
//           <span>{question}</span>
//           <span className='ml-2'>{isOpen ? '-' : '+'}</span>
//         </button>
//         <div
//           className={`overflow-hidden transition-all duration-400 ease-in-out ${
//             isOpen ? 'max-h-screen mt-4' : 'max-h-0'
//           }`}
//           style={{ maxHeight: isOpen ? '200px' : '0px' }}>
//           <p className='text-base text-gray-800'>{answer}</p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//     <div>
//       <div className='bg-gradient min-h-screen'>
//         <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
//           <h1 className='text-5xl mb-8 font-extrabold text-center text-gray-100 '>
//             About Curious Connect
//           </h1>
//           <p className='text-lg text-center text-gray-100 mb-6'>
//             Curious Connect is your go-to platform for revolutionizing virtual
//             collaboration. Designed by Curious Ecosystem, it's a
//             microservice-based video conferencing application aimed at enhancing
//             remote team interactions, webinars, and online classes.
//           </p>
//           <p className='text-lg text-center text-gray-100 mb-6'>
//             With a focus on seamless user experiences, secure authentication,
//             real-time communication, and optimized media processing, Curious
//             Connect empowers teams to connect effortlessly and achieve their
//             goals.
//           </p>
//           <p className='text-lg text-center text-gray-100 mb-6'>
//             Explore Curious Connect to redefine how you collaborate online and
//             unlock new levels of productivity and engagement.
//           </p>
//           <div className=' rounded-lg shadow-md p-6'>
//             <h2 className='text-4xl font-semibold  text-center text-gray-100 mb-4'>
//               Key Features
//             </h2>
//             <Accordion data={features} />
//           </div>
//           <p className='text-lg text-center text-gray-100 mb-6'>
//             Curious Connect is more than just a video conferencing tool—it's a
//             comprehensive solution for modern, efficient, and secure online
//             collaboration. Join us and see how we can transform your virtual
//             meetings into productive, engaging experiences.
//           </p>