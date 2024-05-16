import React from 'react';

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
        'To get started with Curious Connect, simply sign up for an account on our website. Once youre signed in, you can create or join meetings, webinars, or classes.',
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

  return (
    <div className='bg-gradient min-h-screen'>
      <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-extrabold text-gray-100 mb-8'>
          Frequently Asked Questions
        </h1>
        <div className='divide-y divide-gray-200'>
          {faqs.map((faq, index) => (
            <div key={index} className='py-6'>
              <dt className='text-lg leading-6 font-medium text-gray-100'>
                {faq.question}
              </dt>
              <dd className='mt-2 text-base text-gray-100'>{faq.answer}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
