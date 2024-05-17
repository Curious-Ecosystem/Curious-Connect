import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-80 h-screen border-r border-gray-600 transition-transform -translate-x-full sm:translate-x-0 shadow-right bg-white'
        aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-gradient dark:bg-gray-700'>
          <a href='/' className='flex items-center ps-2.5 mb-5 p-2'>
            <img
              src='https://inspirationapp.org/assets/inspiration_logo-4b9341b4.png'
              className='h-14 mt-1 w-10 me-3 sm:h-7'
              alt='Flowbite Logo'
            />
            <span className='self-center text-3xl font-semibold whitespace-nowrap text-white'>
              CuriousConnect
            </span>
          </a>
          <ul className='space-y-2 font-medium text-lg mt-8 p-1'>
            <li>
              <Link to='/meetingDetails/meetingSetup'>
                <a
                  href='#'
                  className='flex items-center p-2 text-gray-100 h-12 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-500 group'>
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-700 group-hover:text-gray-100 dark:group-hover:text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 18'>
                    <path d='M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z' />
                  </svg>
                  <span className='ms-3'>Meeting Setup</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to='/meetingDetails/meetingAvailaibility'>
                <a
                  href='#'
                  className='flex items-center p-2 text-gray-100 h-12 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-500 group'>
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-700 group-hover:text-gray-100 dark:group-hover:text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 18 18'>
                    <path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
                  </svg>
                  <span className='ms-3'>Availability</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
