import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Curious Connect?',
      answer:
        'Curious Connect is a microservice-based video conferencing application designed by Curious Ecosystem. It aims to enhance remote team interactions, webinars, and online classes.',
    },
    {
      question: 'How does Curious Connect work?',
      answer:
        'Curious Connect focuses on providing seamless user experiences, secure authentication, real-time communication, and optimized media processing. It empowers teams to connect effortlessly and achieve their goals.',
    },
    {
      question: 'How can I get started with Curious Connect?',
      answer:
        "To get started with Curious Connect, simply sign up for an account on our website. Once you're signed in, you can create or join meetings, webinars, or classes.",
    },
    {
      question: 'Is Curious Connect secure?',
      answer:
        'Yes, security is a top priority for Curious Connect. We use industry-standard encryption protocols to ensure that your data remains safe and secure.',
    },
    {
      question: 'Can I use Curious Connect for personal use?',
      answer:
        'While Curious Connect is primarily designed for professional use, individuals can also use it for personal video calls or online gatherings.',
    },
    {
      question: 'How does Curious Connect support students and organizations?',
      answer:
        'Curious Connect provides a platform for live streaming sessions where students can receive personalized guidance and support. Organizations can use it to conduct training, workshops, and seminars, enabling effective knowledge transfer and skill development.',
    },
    {
      question: ' How can I join a live streaming session on Curious Connect?',
      answer:
        'You can join a live streaming session by registering on the Curious Connect platform. Once registered, you can browse upcoming sessions, register for those that interest you, and join using the provided link.',
    },
    {
      question: 'Can I host my own live streaming sessions on Curious Connect?',
      answer:
        'Yes, you can host your own sessions. To become a host, sign up on Curious Connect, complete your profile, and follow the instructions to create and schedule live streaming sessions.',
    },
    {
      question: ' Can sessions be recorded for later viewing?',
      answer:
        'Yes, sessions can be recorded and saved for later viewing. Hosts have the option to enable recording for their sessions, allowing participants to access the content at their convenience.',
    },
    {
      question: 'How do I get support if I encounter issues?',
      answer:
        'If you encounter any issues, you can reach out to our support team via the help section on the Curious Connect platform. We also have a comprehensive FAQ and knowledge base to assist with common questions and troubleshooting.',
    },
    {
      question:
        ' How can I provide feedback or suggest improvements for Curious Connect?',
      answer:
        'We welcome feedback and suggestions! You can provide feedback through our platform or by opening an issue on our GitHub repository.',
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
      <motion.div
        className={`border border-gray-300 bg-white shadow-md rounded-md mb-4 p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105`}
        style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        onClick={onClick}>
        <button
          className='w-full text-left flex justify-between items-center text-lg font-medium text-gray-700'>
          <span>{question}</span>
          <span className='ml-2'>{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='overflow-hidden mt-4'>
            <p className='text-base text-gray-800'>{answer}</p>
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <motion.div // Wrap with motion.div for entry animation
      initial={{ opacity: 0, y: 60 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation when component mounts
      transition={{ duration: 2 }} // Transition duration
      className='min-h-screen' style={{ backgroundColor: '#1d2026' }}>
      <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-5xl md:text-4xl lg:text-5xl text-center font-extrabold text-[#2596be] mb-12'>
          Frequently Asked Questions
        </h1>
        <Accordion data={faqs} />
      </div>
    </motion.div>
  );
};

export default FAQ;
