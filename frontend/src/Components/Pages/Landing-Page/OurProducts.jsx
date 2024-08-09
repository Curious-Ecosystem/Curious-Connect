
import { motion } from 'framer-motion';
import React from 'react';
import CDC from '../../../assets/Landing-Page-Assets/CDC.jpg';
import Curious from '../../../assets/Landing-Page-Assets/Curious Ecosystem.png';
import Inspiration from '../../../assets/Landing-Page-Assets/Inspiration.jpg';

const OurProducts = () => {
  // Product Data
  const ProductData = [
    {
      productImg: Curious,
      productName: 'Curious Ecosystem',
    },
    {
      productImg: CDC,
      productName: 'Curious Community',
    },
    {
      productImg: Inspiration,
      productName: 'Inspiration App',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 1000,
        damping: 20,
      },
    },
  };

  return (
    <div className='w-full h-full text-cyan-50 text-center py-10 flex flex-col items-center'>
      <motion.h1
        className='font-bold text-4xl font-poppins p-3'
        variants={container}
        initial="hidden"
        animate="visible"
      >
{/* 	      After Website Domain Register Add this here at href section */}
        <a href="#"> 
          <img
            src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=650&size=36&pause=1000&color=F7F7F7&random=false&width=610&height=60&lines=Explore+More+of+Our+Products"
            alt="Typing SVG"
          />
        </a>
      </motion.h1>
      <motion.div
        className='flex justify-center flex-wrap mt-4 gap-24' // Decreased mt (margin-top) value
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {ProductData.map((product, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center'
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ margin: '30px' }} // Increased margin around images
          >
            <img
              src={product.productImg}
              alt={product.productName}
              className='w-44 h-44 rounded-full shadow-lg'
            />
            <p className='mt-1 text-2xl font-bold'>{product.productName}</p> {/* Adjusted mt value */}
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default OurProducts;
