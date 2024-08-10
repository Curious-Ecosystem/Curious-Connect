import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img2 from '../../../assets/Landing-Page-Assets/refresh.png';

const JoinWithCode = () => {
  const [meetingCode, setMeetingCode] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleInputChange = (e) => {
    setMeetingCode(e.target.value);
  };

  const handleJoinRoom = () => {
    console.log('Joining room with code:', meetingCode);
  };

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className='flex tracking-wide justify-center mb-20 items-center px-16 py-6 lg:m-10 m-3 font-bold text-white normal rounded-xl bg-transparent border-2 border-zinc-400 max-md:px-5 bg-[#15181D]'
    >
      <motion.div
        className='flex gap-3 w-full max-w-screen-lg max-md:flex-wrap max-md:justify-center max-md:max-w-[500px]'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className='flex-auto my-auto text-3xl whitespace-nowrap text-center'
        >
          Paste the meeting code
        </motion.div>
        <motion.input
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='justify-center lg:mr-7 md:w-fit lg:w-[400px] px-6 py-6 text-md whitespace-nowrap rounded-xl bg-zinc-800 max-md:px-5 bg-[#242830]'
          placeholder='abc-def-xyz'
          value={meetingCode}
          onChange={handleInputChange}
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleJoinRoom}
          className='justify-center self-center p-3 text-md bg-[#077BE7] rounded-xl cursor-pointer hover:bg-transparent hover:border-[1px] hover:border-[#077BE7]'
        >
          Join Room
        </motion.div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          loading='lazy'
          src={img2}
          alt='Refresh'
          className='flex justify-center items-center self-center cursor-pointer w-[40px] h-[40px] p-2 bg-[#077BE7] rounded-xl hover:bg-transparent hover:border-[1px] hover:border-[#077BE7]'
        />
      </motion.div>
    </motion.div>
  );
};

export default JoinWithCode;
