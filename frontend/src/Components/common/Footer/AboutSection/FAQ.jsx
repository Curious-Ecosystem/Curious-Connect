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
