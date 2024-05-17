import React, { useState } from 'react';
import logo from '../../../assets/Landing-Page-Assets/CDC.jpg';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';
const Navbar = () => {
  const [home, setHome] = useState(1);
  const [about, setAbout] = useState(0);
  const [contact, setContact] = useState(0);
  const [faq, setFaq] = useState(0);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const setActive = (id) => {
    const funcArray = [setHome, setAbout, setContact, setFaq];
    funcArray.map((item) => {
      item(0);
    });
    funcArray[id](1);
  };

  const selectedClass = 'font-semibold border-b-2 border-b-white pb-1';

  return (
    <div className='h-20 flex gap-20 text-white items-center justify-between pt-8 md:px-20 px-2 relative'>
      <div className='flex items-center gap-6'>
        <img src={logo} className='size-16 rounded-full ' />
        <span className='text-center font-bold'>
          Curious<span className='text-blue-400'> Connect</span>
        </span>
      </div>
      <div onClick={handleNav} className='block lg:hidden'>
        {!nav ? <TiThMenu size={20} /> : <MdClose size={20} />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-gradient z-50'
            : 'fixed left-0 top-0 left-[-100%] ease-in-out duration-500'
        }>
        <div className=' flex flex-col gap-6 py-12'>
          <img src={logo} className='size-16 rounded-full mx-auto' />
          <Link to={'/'}>
            <div
              className='p-4 border-b-slate-500 border-b w-[100%]'
              onClick={() => {
                setActive(0);
              }}>
              Home
            </div>
          </Link>
          <Link to={'/aboutUs'}>
            <div
              className='p-4 border-b-slate-500 border-b'
              onClick={() => {
                setActive(1);
              }}>
              About
            </div>
          </Link>
          <Link to={'/contactUs'}>
            <div
              className='p-4 border-b-slate-500 border-b'
              onClick={() => {
                setActive(2);
              }}>
              Contact
            </div>
          </Link>
          <Link to={'/faq'}>
            <div
              className='p-4 border-b-slate-500 border-b'
              onClick={() => {
                setActive(3);
              }}>
              FAQ
            </div>
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
            Home
          </span>
        </Link>
        <Link to={'/aboutUs'}>
          <span
            className={about ? selectedClass : ''}
            onClick={() => {
              setActive(1);
            }}>
            About
          </span>
        </Link>
        <Link to={'/contactUs'}>
          <span
            className={contact ? selectedClass : ''}
            onClick={() => {
              setActive(2);
            }}>
            Contact
          </span>
        </Link>
        <Link to={'/faq'}>
          <span
            className={faq ? selectedClass : ''}
            onClick={() => {
              setActive(3);
            }}>
            FAQ
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
