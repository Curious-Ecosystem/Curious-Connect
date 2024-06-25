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
    // Perform actions when the "Join Room" button is clicked
    console.log('Joining room with code:', meetingCode);
  };

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
    padding: '20px',
    fontWeight: 'bold',
    color: 'white',
    background: '#1e2228',
    borderRadius: '20px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    maxWidth: '90%',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    textAlign: isMobile ? 'center' : 'left',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={containerStyle}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          marginRight: isMobile ? '0' : '20px',
          fontSize: '2rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
          marginBottom: isMobile ? '10px' : '0',
          flex: isMobile ? '1 1 100%' : 'none',
        }}
      >
        Paste the meeting code
      </motion.div>
      <motion.input
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '16px',
          fontSize: '1rem',
          borderRadius: '10px',
          border: '2px solid #4b5563',
          backgroundColor: '#222222',
          color: 'white',
          outline: 'none',
          transition: 'border-color 0.3s ease',
          marginBottom: isMobile ? '10px' : '0',
        }}
        placeholder='abc-def-xyz'
        value={meetingCode}
        onChange={handleInputChange}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleJoinRoom}
        style={{
          padding: '14px 28px',
          fontSize: '1rem',
          backgroundColor: '#1e90ff',
          borderRadius: '20px',
          border: 'none',
          cursor: 'pointer',
          marginLeft: isMobile ? '0' : '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          marginBottom: isMobile ? '10px' : '0',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Join Room
      </motion.button>
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        loading='lazy'
        src={img2}
        alt='Refresh'
        style={{
          width: '40px',
          height: '40px',
          marginLeft: '20px',
          backgroundColor: '#1e90ff',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
      />
    </motion.div>
  );
};

export default JoinWithCode;
