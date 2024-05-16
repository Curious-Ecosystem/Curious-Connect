import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from 'flowbite-react';

const MeetingAvailability = () => {
  const [startIndex, setStartIndex] = useState(0);
  const currentDate = new Date();
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const data = [];
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonId) => {
    // Check if the button is already selected
    const isSelected = selectedButtons.includes(buttonId);

    if (isSelected) {
      // If selected, remove it from the list
      setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
    } else {
      // If not selected, add it to the list
      setSelectedButtons([...selectedButtons, buttonId]);
    }
  };

  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);

    data.push({
      date: date.toLocaleDateString(),
      day: daysOfWeek[date.getDay()],
    });
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const slideContainerStyle = {
    height: 'auto',
    padding: '20px',
    margin: '0 10px',
    marginRight: '20px',
    borderRadius: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'middle',
    transition: 'transform 0.5s ease', // Add transition for smooth movement
  };

  const slideContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const dateStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const dayStyle = {
    fontSize: '16px',
    color: '#666666',
  };

  const handleNext = () => {
    if (startIndex + 3 < data.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div>
      <style>
        {`
                .slick-prev, .slick-next {
                    display: none !important;
                }
                `}
      </style>
      <Sidebar />
      <div className='flex justify-center items-center h-screen'>
        <div className='p-4 bg-gradient w-96 flex flex-col place-items-center ml-60'>
          <div className='border text-white border-gray-400 rounded-xl px-4 w-[700px] h-auto p-3'>
            <div className='flex flex-row justify-between'>
              <h1 className='text-xl px-2 font-bold text-white mb- text-left w-full p-4'>
                Availabile Dates{' '}
              </h1>
              <div className='flex justify-end mr-[-10px]'>
                <div className='bg-gradient px-4 py-3 sm:px-6 sm:flex'>
                  <span className='mt-3 flex rounded-md p-[-10px] shadow-sm sm:mt-0 sm:w-auto'>
                    <button
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 font-semibold rounded-lg h-10  mt-1  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                      onClick={handlePrevious}>
                      Previous
                    </button>
                  </span>
                  <span className='mt-3 flex rounded-md p-[-10px] shadow-sm sm:mt-0 sm:w-auto'>
                    <button
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 font-semibold rounded-lg h-10  mt-1 text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                      onClick={handleNext}>
                      Next
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <Slider {...settings}>
                {data.slice(startIndex, startIndex + 3).map((d, index) => (
                  <div
                    key={index}
                    style={{
                      ...slideContainerStyle,
                      transform: `translateX(${index * 100}%)`,
                    }}>
                    <div
                      style={slideContainerStyle}
                      className='bg-white  h-28 flex flex-col align-center items-center rounded-lg mt-16'>
                      <div style={slideContentStyle}>
                        <div className='text-center'>
                          <div
                            style={dateStyle}
                            className='text-gray-900 font-bold'>
                            {d.date}
                          </div>
                          <div
                            style={dayStyle}
                            className='text-gray-600 font-bold'>
                            {d.day}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className='border-b border-gray-700 mt-10'></div>

            <div className='flex items-center mt-6'>
              <h1 className='text-xl px-2 font-bold text-white p-2'>
                Availabile Slots
              </h1>
              <p className='text-xs font-normal  text-white ml-[-10px] mt-[4px] p-3'>
                Click on the time slot to select
              </p>
            </div>

            <div className='flex flex-col justify-center'>
              <div className='flex justify-center gap-4 p-4'>
                <Button
                  color={
                    selectedButtons.includes('button1') ? 'light' : 'primary'
                  }
                  className='font-semibold border border-2'
                  onClick={() => handleButtonClick('button1')}>
                  09:15 AM
                </Button>
                <Button
                  color={
                    selectedButtons.includes('button2') ? 'light' : 'primary'
                  }
                  className='font-semibold border border-2'
                  onClick={() => handleButtonClick('button2')}>
                  09:45 AM
                </Button>
                <Button
                  color={
                    selectedButtons.includes('button3') ? 'light' : 'primary'
                  }
                  className='font-semibold border border-2'
                  onClick={() => handleButtonClick('button3')}>
                  10:15 AM
                </Button>
                <Button
                  color={
                    selectedButtons.includes('button4') ? 'light' : 'primary'
                  }
                  className='font-semibold border border-2'
                  onClick={() => handleButtonClick('button4')}>
                  10:45 AM
                </Button>
                <Button
                  color={
                    selectedButtons.includes('button5') ? 'light' : 'primary'
                  }
                  className='font-semibold border border-2'
                  onClick={() => handleButtonClick('button5')}>
                  11:15 AM
                </Button>
              </div>
              <div className='flex justify-center gap-4 mt-[-18px] p-4'>
                <Button
                  color={
                    selectedButtons.includes('button6') ? 'light' : 'primary'
                  }
                  className='font-semibold border border-2'
                  onClick={() => handleButtonClick('button6')}>
                  11:45 AM
                </Button>
                <Button
                  color={
                    selectedButtons.includes('button7') ? 'light' : 'primary'
                  }
                  className='font-semibold border border-2'
                  onClick={() => handleButtonClick('button7')}>
                  12:15 PM
                </Button>
                <Button
                  color={
                    selectedButtons.includes('button8') ? 'light' : 'primary'
                  }
                  className='font-semibold border border-2'
                  onClick={() => handleButtonClick('button8')}>
                  12:45 PM
                </Button>
                <Button
                  color={
                    selectedButtons.includes('button9') ? 'light' : 'primary'
                  }
                  className='font-semibold border border-2'
                  onClick={() => handleButtonClick('button9')}>
                  01:15 PM
                </Button>
                <Button
                  color={
                    selectedButtons.includes('button10') ? 'light' : 'primary'
                  }
                  className='font-semibold border border-2'
                  onClick={() => handleButtonClick('button10')}>
                  01:45 PM
                </Button>
              </div>
            </div>

            <div className='flex justify-center p-2 '>
              <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 font-semibold rounded-lg h-10 w-96 mt-1 text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                Save Your Availability Details on {data[startIndex].date}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingAvailability;
