import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const CreateMeeting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('https://curiousconnect/');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleContinue = () => {
    const params = new URLSearchParams();
    params.append('title', title);
    params.append('url', url);
    params.append('date', date.toISOString());
    params.append('time', time);
    params.append('duration', duration);

    const queryString = params.toString();
    navigate(`/meetingDetails/meetingSetup?${queryString}`, {
      state: { title, url, date, time, duration },
    });
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-4'>
        <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-[1100px] h-[500px] relative'>
          <div className='absolute flex flex-col gap-4 inset-0 flex justify-center items-center'>
            <h2 className='text-xl font-bold text-white'>
              Get started by creating your first meeting!
            </h2>
            <p className='text-gray-400 font-semibold text-sm flex flex-col'>
              Your first meeting marks the beginning of productive
              collaborations or memorable gatherings.
            </p>
            <p className='text-gray-400 font-semibold text-sm flex flex-col mt-[-13px]'>
              Take the lead and initiate your event now!
            </p>
            <svg
              className='w-6 cursor-pointer h-6 mr-2 text-gray-400 dark:text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 4v16M4 12h16'
              />
            </svg>
            <button
              type='button'
              onClick={openDialog}
              className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
              Create
            </button>
            {isOpen && (
              <div
                className='fixed z-10 inset-1 overflow-y-clip '
                style={{
                  backdropFilter: 'blur(2px)',
                  opacity: isOpen ? '1' : '0',
                  transition: 'opacity 0.5s ease, backdrop-filter 0.9s ease',
                }}>
                <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                  <div className='fixed inset-0 transition-opacity'>
                    <div className='absolute inset-0 bg-gray-800 opacity-75'></div>
                  </div>
                  <span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
                  &#8203;
                  <div className='inline-block align-bottom bg-gray-900 rounded-lg text-left  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                    <div className='bg-gradient px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                      <div className='sm:flex sm:items-start'></div>
                      <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                        <h3 className='text-xl leading-6 font-bold text-gray-200'>
                          Add a new meeting
                        </h3>
                        <div>
                          <div className='mt-8'>
                            <div className='mb-4'>
                              <label
                                htmlFor='title'
                                className='block text-gray-100 text-sm font-semibold mb-2'>
                                Title
                              </label>
                              <input
                                type='text'
                                id='title'
                                className='w-full  border-gray-300 rounded-lg px-4 py-2 focus:outline-1 focus:border-gray-100'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                            </div>
                            <div className='mb-4'>
                              <label
                                htmlFor='url'
                                className='block text-gray-100 text-sm font-semibold mb-2'>
                                URL
                              </label>
                              <input
                                type='text'
                                id='url'
                                className='w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-100'
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                              />
                            </div>
                            <div className='mb-4'>
                              <label
                                htmlFor='date'
                                className='block text-gray-100 text-sm font-semibold mb-2'>
                                Date
                              </label>
                              <DatePicker
                                id='date'
                                selected={date}
                                onChange={handleDateChange}
                                className='w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-100'
                              />
                            </div>
                            <div className='mb-4'>
                              <label
                                htmlFor='time'
                                className='block text-gray-100 text-sm font-semibold mb-2'>
                                Time
                              </label>
                              <input
                                type='time'
                                id='time'
                                className='w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-100'
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                              />
                            </div>
                            <div className='mb-4'>
                              <label
                                htmlFor='duration'
                                className='block text-gray-100 text-sm font-semibold mb-2'>
                                Duration
                              </label>
                              <select
                                id='duration'
                                className='w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-100'
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}>
                                <option value=''>Select Duration</option>
                                {[...Array(12).keys()].map((index) => (
                                  <option
                                    key={index + 1}
                                    value={(index + 1) * 15}>
                                    {(index + 1) * 15} min
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-end '>
                        <div className='bg-gradient px-4 py-3  px-4 py-3 sm:px-6 sm:flex'>
                          <span className='mt-3 flex rounded-md  shadow-sm sm:mt-0 sm:w-auto'>
                            <button
                              type='button'
                              onClick={closeDialog}
                              className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 h-10 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
                              Close
                            </button>
                          </span>
                          {/* </div> */}
                          {/* <div className="bg-gradient px-4 py-3 sm:px-6 sm:flex"> */}
                          <span className='mt-3 flex rounded-md shadow-sm mr-[-30px] ml-3 sm:mt-0 sm:w-auto'>
                            <button
                              type='button'
                              onClick={handleContinue}
                              className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                              Continue
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMeeting;
