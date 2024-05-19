import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="bg-gradient min-h-screen flex items-center justify-center">
      <motion.div
        className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-80 rounded-lg shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-gray-800 mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Have questions or feedback? We'd love to hear from you. Reach out to us using the contact information below or fill out the form and we'll get back to you as soon as possible.
        </motion.p>
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <svg className="h-6 w-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v6m0 0v6m0-6h6m-6 0H6a6 6 0 016-6zm0 12a6 6 0 100-12 6 6 0 000 12z"></path>
            </svg>
            <span className="text-gray-700">Email: info@curiousconnect.com</span>
          </div>
          <div className="flex items-center mb-4">
            <svg className="h-6 w-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10.083V3m-1 7.083a3 3 0 100-6 3 3 0 000 6zM20 14v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m0-4h16V3H4v7a7 7 0 007 7h2a7 7 0 007-7v0z"></path>
            </svg>
            <span className="text-gray-700">Phone: +1 (123) 456-7890</span>
          </div>
        </motion.div>
        <motion.form
          className="space-y-6"
          action="#"
          method="POST"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send us a Message</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="transition-transform duration-200"
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm border border-gray-300 rounded-md p-2"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="transition-transform duration-200"
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm border border-gray-300 rounded-md p-2"
                />
              </motion.div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm border border-gray-300 rounded-md p-2"
              ></textarea>
            </div>
            <motion.div
              className="mt-6"
            >
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200"
              >
                Send Message
              </button>
            </motion.div>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default Contact;
