import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaChartBar, FaComments, FaShieldAlt, FaCog } from 'react-icons/fa';

function AboutPage() {
  return (
    <div className='bg-gradient min-h-screen'>
      <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <motion.h1 
          className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-8'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Curious Connect
        </motion.h1>
        <motion.p 
          className='text-xl text-gray-100 mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Curious Connect is your go-to platform for revolutionizing virtual collaboration. Designed by Curious Ecosystem, it's a microservice-based video conferencing application aimed at enhancing remote team interactions, webinars, and online classes.
        </motion.p>
        <motion.p 
          className='text-xl text-gray-100 mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          With a focus on seamless user experiences, secure authentication, real-time communication, and optimized media processing, Curious Connect empowers teams to connect effortlessly and achieve their goals.
        </motion.p>
        <motion.p 
          className='text-xl text-gray-100 mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Explore Curious Connect to redefine how you collaborate online and unlock new levels of productivity and engagement.
        </motion.p>
        <motion.div 
          className='bg-white rounded-lg shadow-md p-8'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className='text-3xl font-semibold text-gray-900 mb-6'>
            Key Features
          </h2>
          <ul className='space-y-4'>
            <motion.li 
              className='flex items-center text-lg text-gray-700 hover:text-teal-400 transition-colors duration-300'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <FaVideo className='h-6 w-6 text-teal-400 mr-3' />
              High-quality video conferencing
            </motion.li>
            <motion.li 
              className='flex items-center text-lg text-gray-700 hover:text-teal-400 transition-colors duration-300'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <FaChartBar className='h-6 w-6 text-teal-400 mr-3' />
              Screen sharing capabilities
            </motion.li>
            <motion.li 
              className='flex items-center text-lg text-gray-700 hover:text-teal-400 transition-colors duration-300'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <FaComments className='h-6 w-6 text-teal-400 mr-3' />
              Real-time chat and messaging
            </motion.li>
            <motion.li 
              className='flex items-center text-lg text-gray-700 hover:text-teal-400 transition-colors duration-300'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <FaShieldAlt className='h-6 w-6 text-teal-400 mr-3' />
              Secure end-to-end encryption
            </motion.li>
            <motion.li 
              className='flex items-center text-lg text-gray-700 hover:text-teal-400 transition-colors duration-300'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <FaCog className='h-6 w-6 text-teal-400 mr-3' />
              Customizable meeting settings
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
