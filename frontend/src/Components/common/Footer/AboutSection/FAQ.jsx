import React, { useState } from 'react';

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
    <div className='bg-gradient min-h-screen'>
      <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-5xl font-extrabold text-gray-100 mb-14'>
          Frequently Asked Questions
        </h1>
        <Accordion data={faqs} />
      </div>
    </div>
  );
};

export default FAQ;
