import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TiThMenu } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';
import logo from '../../../assets/Landing-Page-Assets/CDC.jpg';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const setActive = (item) => {
    setActiveItem(item);
  };

  const navItems = [
    { label: 'Home', path: '/', id: 'home' },
    { label: 'About', path: '/aboutUs', id: 'about' },
    { label: 'Contact', path: '/contactUs', id: 'contact' },
    { label: 'FAQ', path: '/faq', id: 'faq' },
  ];

  return (
    <nav className='h-20 flex gap-20 text-white items-center justify-between pt-8 md:px-20 px-2 relative'>
      <div className='flex items-center gap-6'>
        {/* Wrap the logo image in a Link component */}
        <Link to="/" className="cursor-pointer">
          <motion.img
            src={logo}
            className='size-16 rounded-full'
            alt='logo'
            whileHover={{ scale: 1.1, rotate: [0, -10, 0, 10, 0], transition: { duration: 0.3 } }}
          />
        </Link>
        <span className='font-bold text-xl md:text-3xl'>
          <span className='text-blue-400'>Curious</span> Connect
        </span>
      </div>
      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <MdClose size={20} />
          </motion.div>
        ) : (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <TiThMenu size={20} />
          </motion.div>
        )}
      </div>
      <motion.div
        className={
          nav
            ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-gradient z-50'
            : 'fixed top-0 left-[-100%] ease-in-out duration-500'
        }>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className='flex flex-col gap-6 py-12'>
          <img src={logo} className='size-16 rounded-full mx-auto' alt='logo' />
          {navItems.map((item) => (
            <Link to={item.path} key={item.id}>
              <motion.div
                className={`p-4 border-b-slate-500 border-b w-[100%] ${
                  activeItem === item.id ? 'font-semibold border-b-2 border-b-white pb-1' : ''
                }`}
                onClick={() => {
                  setActive(item.id);
                }}
                whileHover={{ scale: 1.05, x: 5 }}>
                {item.label}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
      <div className='hidden lg:flex justify-between gap-28 items-center z-20'>
        {navItems.map((item) => (
          <Link to={item.path} key={item.id}>
            <motion.span
              className={`${
                activeItem === item.id ? 'font-semibold border-b-2 border-b-white pb-1' : ''
              }`}
              onClick={() => {
                setActive(item.id);
              }}
              whileHover={{ scale: 1.05, x: 5 }}>
              {item.label}
            </motion.span>
          </Link>
        </div>
      </div>
      <div className='hidden lg:flex justify-between gap-28 items-center z-20'>
        <Link to={'/'}>
          <span
            className={home ? selectedClass : ''}
            onClick={() => {
              setActive(0);
            }}>
            <lord-icon
              style={{
                height: '20px',
                width: '20px',
                paddingTop: '2px',
              }}
              src='https://cdn.lordicon.com/wmwqvixz.json'
              trigger='hover'
              colors='primary:#ffffff'></lord-icon>{' '}
            Home
          </span>
        </Link>
        <Link to={'/aboutUs'}>
          <span
            className={about ? selectedClass : ''}
            onClick={() => {
              setActive(1);
            }}>
            <lord-icon
              style={{
                height: '20px',
                width: '20px',
                paddingTop: '2px',
              }}
              src='https://cdn.lordicon.com/jnzhohhs.json'
              trigger='hover'
              colors='primary:#ffffff'></lord-icon>{' '}
            About
          </span>
        </Link>
        <Link to={'/contactUs'}>
          <span
            className={contact ? selectedClass : ''}
            onClick={() => {
              setActive(2);
            }}>
            <lord-icon
              style={{
                height: '20px',
                width: '20px',
                paddingTop: '2px',
              }}
              src='https://cdn.lordicon.com/srsgifqc.json'
              trigger='hover'
              colors='primary:#ffffff'></lord-icon>{' '}
            Contact
          </span>
        </Link>
        <Link to={'/faq'}>
          <span
            className={faq ? selectedClass : ''}
            onClick={() => {
              setActive(3);
            }}>
            <lord-icon
              style={{
                height: '20px',
                width: '20px',
                paddingTop: '2px',
              }}
              src='https://cdn.lordicon.com/pyoiumqr.json'
              trigger='hover'
              colors='primary:#ffffff'></lord-icon>{' '}
            FAQ
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
