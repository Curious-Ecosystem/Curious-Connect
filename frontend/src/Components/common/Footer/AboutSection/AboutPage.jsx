import React from 'react';
import { useState } from 'react';
function AboutPage() {
  const features = [
    {
      question: 'High-Quality Video Conferencing',
      answer:
        'Experience crystal-clear video calls that make you feel like youre in the same room.',
    },
    {
      question: 'Screen Sharing Capabilities',
      answer:
        'Share your screen with ease to present documents, slideshows, or any other content in real-time.',
    },
    {
      question: 'Real-Time Chat and Messaging',
      answer:
        'Communicate instantly with participants through integrated chat and messaging features.',
    },
    {
      question: 'Secure End-to-End Encryption',
      answer:
        ' Ensure your meetings are private and secure with robust end-to-end encryption.',
    },
    {
      question: 'Customizable Meeting Settings',
      answer:
        ' Tailor your meetings to fit your specific needs with customizable settings, from participant permissions to meeting layouts.',
    },
    {
      question: 'Cross-Platform Compatibility',
      answer:
        'Access Curious Connect from any device, whether its a desktop, laptop, tablet, or smartphone.',
    },
    {
      question: 'Recording and Playback',
      answer:
        ' Record your sessions for future reference or sharing with team members who couldnt attend.',
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Accordion = ({ data }) => {
    return (
      <div>
        {data.map((el, i) => (
          <AccordionItem
            key={i}
            question={el.question}
            answer={el.answer}
            isOpen={openIndex === i}
            onClick={() => handleToggle(i)}
          />
        ))}
      </div>
    );
  };

  const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
      <div
        className={`border border-gray-300 bg-white shadow-md rounded-md mb-4 p-4 transition-all duration-200 ${
          isOpen ? 'border-t-4 border-t-gray-400' : ''
        }`}
        style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <button
          className='w-full text-left flex justify-between items-center text-lg font-medium text-gray-700'
          onClick={onClick}>
          <span>{question}</span>
          <span className='ml-2'>{isOpen ? '-' : '+'}</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-400 ease-in-out ${
            isOpen ? 'max-h-screen mt-4' : 'max-h-0'
          }`}
          style={{ maxHeight: isOpen ? '200px' : '0px' }}>
          <p className='text-base text-gray-800'>{answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className='bg-gradient min-h-screen'>
        <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl mb-8 font-extrabold text-center text-gray-100 '>
            About Curious Connect
          </h1>
          <p className='text-lg text-center text-gray-100 mb-6'>
            Curious Connect is your go-to platform for revolutionizing virtual
            collaboration. Designed by Curious Ecosystem, it's a
            microservice-based video conferencing application aimed at enhancing
            remote team interactions, webinars, and online classes.
          </p>
          <p className='text-lg text-center text-gray-100 mb-6'>
            With a focus on seamless user experiences, secure authentication,
            real-time communication, and optimized media processing, Curious
            Connect empowers teams to connect effortlessly and achieve their
            goals.
          </p>
          <p className='text-lg text-center text-gray-100 mb-6'>
            Explore Curious Connect to redefine how you collaborate online and
            unlock new levels of productivity and engagement.
          </p>
          <div className=' rounded-lg shadow-md p-6'>
            <h2 className='text-4xl font-semibold  text-center text-gray-100 mb-4'>
              Key Features
            </h2>
            <Accordion data={features} />
          </div>
          <p className='text-lg text-center text-gray-100 mb-6'>
            Curious Connect is more than just a video conferencing tool—it's a
            comprehensive solution for modern, efficient, and secure online
            collaboration. Join us and see how we can transform your virtual
            meetings into productive, engaging experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
