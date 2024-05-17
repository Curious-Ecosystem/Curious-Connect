import React from 'react';
import { useState } from 'react';

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
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-medium text-gray-100 mb-8'>
            Privacy Policy
          </h1>
          <div className=''>
            {dataArray.map((data, index) => (
              <div
                key={index}
                className='shadow-md cursor-pointer py-2 px-3 bg-white mt-8 rounded-md'>
                <div
                  className='flex flex-row justify-between items-center'
                  onClick={() => toggleBtn(index)}>
                  <p className='text-sm md:text-lg text-[#353b48] font-bold tracking-normal md:tracking-wider'>
                    {data.title}
                  </p>
                  <div>
                    <span className='text-xl md:text-3xl text-[#2f3640]'>
                      {activeIndex === index ? `-` : `+`}
                    </span>
                  </div>
                </div>
                {activeIndex === index ? (
                  <div className='py-5'>
                    <p className='text-[#718093] text-xs sm:text-sm md:text-base leading-6 sm:leading-7 md:leading-8 tracking-wide md:tracking-wider text-justify px-3'>
                      {data.para}
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;