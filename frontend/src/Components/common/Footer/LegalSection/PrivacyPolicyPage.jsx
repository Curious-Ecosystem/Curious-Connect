import React, { useState } from 'react';
import { motion } from 'framer-motion';

const dataArray = [
  {
    title: '1. Introduction',
    para: `Welcome to Curious Connect's Privacy Policy. Your privacy is important to us. This policy explains how we collect, use, and safeguard your personal information. By using our website, you consent to the data practices described in this statement.`,
  },
  {
    title: '2. Information We Collect',
    para: ` We collect personal information when you register on our website, subscribe to our newsletter, or fill out a form. This information may include your name, email address, phone number, address, and other relevant details.`,
  },
  {
    title: '3. How We Use Your Information',
    para: ` We use the information we collect to personalize your experience, improve our website, and send periodic emails regarding our services. Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever without your consent.`,
  },
  {
    title: '4. Security of Your Information',
    para: ` We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.`,
  },
  {
    title: '5. Cookies',
    para: `We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.`,
  },
  {
    title: '6. Changes to This Privacy Policy',
    para: `We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page.`,
  },
  {
    title: '7. Contact Us',
    para: `If you have any questions or concerns about our Privacy Policy, please contact us.`,
  },
];

const PrivacyPolicyPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleBtn = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div // Wrap with motion.div for entry animation
      initial={{ opacity: 0, y: 60 }} // Initial animation properties
      animate={{ opacity: 10, y: 5 }} // Animation when component mounts
      transition={{ duration: 2 }} // Transition duration
      className='min-h-screen' style={{ backgroundColor: '#1d2026' }}>
      <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-[#2596be] mb-8'>
            Privacy Policy
        </h1>
        <div>
          {dataArray.map((data, index) => (
            <motion.div
              key={index}
              className={`shadow-lg cursor-pointer py-3 px-5 bg-white mt-6 rounded-lg`}
              // className={`shadow-lg cursor-pointer py-4 px-6 bg-white mt-6 rounded-lg`}
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleBtn(index)}>
              <div className='flex justify-between items-center'>
                <p className='text-lg md:text-xl font-semibold text-gray-800'>
                  {data.title}
                </p>
                <div>
                  <span className='text-xl md:text-2xl text-gray-600'>
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </div>
              </div>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className='overflow-hidden'>
                  <div className='py-4'>
                    <p className='text-gray-700 text-sm md:text-base leading-6'>
                      {data.para}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
