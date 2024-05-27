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
    <>
      <div className='bg-gradient'>
        <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-[#2596be] mb-8'>
            Privacy Policy
          </h1>

          <div className=''>
            {dataArray.map((data, index) => (
              <motion.div
                key={index}
                className='shadow-md cursor-pointer py-2 px-3 bg-white mt-8 rounded-md'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className='flex flex-row justify-between items-center'
                  onClick={() => toggleBtn(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <p className='text-lg md:text-xl text-[#353b48] font-bold tracking-normal md:tracking-wider'>
                    {data.title}
                  </p>
                  <div>
                    <span className='text-xl md:text-3xl text-[#2f3640]'>
                      {activeIndex === index ? '-' : '+'}
                    </span>
                  </div>
                </div>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='overflow-hidden'
                  >
                    <p className='text-[#718093] text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 tracking-wide md:tracking-wider text-justify px-3'>
                      {data.para}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
