import React from 'react';

function Contact() {
  return (
    <div className='bg-gradient min-h-screen'>
      <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-extrabold text-gray-100     mb-4'>
          Contact Us
        </h1>
        <p className='text-lg text-gray-100 mb-6'>
          Have questions or feedback? We'd love to hear from you. Reach out to
          us using the contact information below or fill out the form and we'll
          get back to you as soon as possible.
        </p>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>
            Contact Information
          </h2>
          <div className='flex items-center mb-2'>
            <svg
              className='h-5 w-5 text-gray-600 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 3v6m0 0v6m0-6h6m-6 0H6a6 6 0 016-6zm0 12a6 6 0 100-12 6 6 0 000 12z'></path>
            </svg>
            <span className='text-gray-700'>
              Email: info@curiousconnect.com
            </span>
          </div>
          <div className='flex items-center mb-2'>
            <svg
              className='h-5 w-5 text-gray-600 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 10.083V3m-1 7.083a3 3 0 100-6 3 3 0 000 6zM20 14v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m0-4h16V3H4v7a7 7 0 007 7h2a7 7 0 007-7v0z'></path>
            </svg>
            <span className='text-gray-700'>Phone: +1 (123) 456-7890</span>
          </div>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>
              Send us a Message
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border border-2 sm:text-sm border-gray-300 rounded-md p-1'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'>
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block border border-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1'
                />
              </div>
            </div>
            <div className='mt-6'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border border-2 sm:text-sm border-gray-300 rounded-md'></textarea>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
