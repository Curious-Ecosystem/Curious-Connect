import React from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from './Sidebar';

const MeetingDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Retrieve the parameters from the query string
  const title = queryParams.get('title');
  const url = queryParams.get('url');
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const duration = queryParams.get('duration');

  return (
    <div>
      <Sidebar />
      <div className='flex bg-gradient justify-center items-center h-screen'>
        <div className='p-4 bg-gradient w-96 flex flex-col place-items-center ml-72'>
          <div className='border  border-gray-400 rounded-xl px-4 w-[750px] h-auto'>
            <div className='mt-2 w-full p-4'>
              <div className='mb-4 w-full'>
                <h1 className='text-3xl  font-bold text-white mb-6 text-left w-full '>
                  {title}
                </h1>
                <label
                  htmlFor='title'
                  className='block text-gray-100 text-sm font-semibold mb-2'>
                  Title
                </label>
                <input
                  type='text'
                  id='title'
                  className='w-full font-semibold border-gray-300 rounded-lg px-4 py-2 focus:outline-1 focus:border-gray-100'
                  value={title}
                />
              </div>
              <div className='mb-4 w-full'>
                <label
                  htmlFor='url'
                  className='block text-gray-100 text-sm font-semibold mb-2'>
                  URL
                </label>
                <input
                  type='text'
                  id='url'
                  className='w-full font-semibold border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-100'
                  value={url}
                />
              </div>
              <div className='mb-4 w-full'>
                <label
                  htmlFor='date'
                  className='block text-gray-100 text-sm font-semibold mb-2'>
                  Date
                </label>
                <DatePicker
                  id='date'
                  selected={date}
                  className='w-full font-semibold border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-100'
                />
              </div>
              <div className='mb-4 w-full'>
                <label
                  htmlFor='time'
                  className='block text-gray-100 text-sm font-semibold mb-2'>
                  Time
                </label>
                <input
                  type='time'
                  id='time'
                  className='w-full font-semibold border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-100'
                  value={time}
                />
              </div>
              <div className=' w-full'>
                <label
                  htmlFor='duration'
                  className='block text-gray-100 text-sm font-semibold mb-2'>
                  Duration
                </label>
                <select
                  id='duration'
                  className='w-full font-semibold border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-100'
                  value={duration}>
                  <option value=''>Select Duration</option>
                  {[...Array(12).keys()].map((index) => (
                    <option key={index + 1} value={(index + 1) * 15}>
                      {(index + 1) * 15} min
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='flex justify-end mr-4'>
              <div className='bg-gradient px-4 py-3  px-4 py-3 sm:px-6 sm:flex'>
                <span className='mt-3 flex rounded-md  shadow-sm sm:mt-0 sm:w-auto'>
                  <button
                    type='button'
                    className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                    Delete
                  </button>
                </span>
                {/* </div> */}
                {/* <div className="bg-gradient px-4 py-3 sm:px-6 sm:flex"> */}
                <span className='mt-3 flex rounded-md shadow-sm mr-[-30px] ml-3 sm:mt-0 sm:w-auto'>
                  <button
                    type='button'
                    className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                    Save
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;
