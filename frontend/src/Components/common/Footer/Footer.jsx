import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='flex md:flex-wrap lg:flex-nowrap gap-5 items-start px-7 pt-10 pb-6 max-md:flex-wrap max-md:px-5'>
      <div className='flex flex-col'>
        <div className='flex gap-4 text-xl font-bold tracking-wide text-center text-white'>
          <img
            loading='lazy'
            src='https://lh3.googleusercontent.com/pw/AP1GczN_OhGK6i9fSwFhRHN26Oyy7wBqKwiicj9UEFEK5hYKnc9TZTwlQvvewSPpX2DJdvO1ZAnrPltIAGqqRqAT-8g6cIdZ97I69m-dplI7voq9GLhr_NLH1dLDHbaJQWqcdWn39u3ShkkudNoSCzOpeNuZ=w65-h68-s-no-gm?authuser=0'
            className='shrink-0 aspect-[0.95] w-[65px]'
          />
          <div className='flex-auto lg:pr-52 my-auto pr-[19vw] md:pr-52'>
            Curious Connect
          </div>
        </div>
        <div className='mt-8 text-xl font-bold tracking-wide leading-10 text-white'>
          Subscribe To Our Newsletter
          <br />
        </div>
        <div className='mt-4 text-sm font-light tracking-wide leading-5 text-zinc-400'>
          Get the latest news, articles and resources directly in your Inbox
          weekly
        </div>
        <div className='flex flex-wrap gap-5 mt-6'>
          <input
            type='text'
            placeholder='Enter email..'
            className='grow justify-center p-5 items-start w-[281.86px] h-[45.94px] text-[16px] leading-8 bg-[#FFFFFF] rounded-md text-black text-opacity-60 border-none max-md:pr-5'
          ></input>
          <a href='#'>
            <button className='justify-center text-lg w-[115.94px] h-[45.94px] font-semibold tracking-wide leading-5 text-white whitespace-nowrap hover:border-[1px] hover:bg-transparent cursor-pointer hover:border-[#408ACD] bg-[#408ACD] rounded-[10px]'>
              Subscribe
            </button>
          </a>
        </div>
      </div>
      <div className='flex-auto mt-3.5 lg:pl-8 text-[16px] font-normal  tracking-wide leading-10 text-white'>
        <span className='font-bold hover:text-[#408ACD] pointer-events-none'>
          EXPLORE
        </span>
        <br />
        <span className='text-white hover:text-[#408ACD] cursor-pointer'>
          Webinars
        </span>
        <br />
        <span className='text-white hover:text-[#408ACD] cursor-pointer'>
          Events
        </span>
        <br />
        <span className='text-white hover:text-[#408ACD] cursor-pointer'>
          Resources
        </span>
        <br />
        <span className='text-white hover:text-[#408ACD] cursor-pointer'>
          Remote Team Interaction
        </span>
        <br />
        <span className='text-white hover:text-[#408ACD] cursor-pointer'>
          One-on-One Live Session
        </span>
      </div>
      <div className='pr-16 mt-3.5 text-[16px] font-normal tracking-wide leading-10 text-white max-sm:pr-9'>
        <span className='text-white font-bold hover:text-[#408ACD] pointer-events-none'>
          ABOUT
        </span>
        <br />

        <div>
          <Link
            to='/aboutUs'
            className='text-white hover:text-[#408ACD]'
            onClick={scrollToTop}
          >
            About
          </Link>
          <br />
          <Link
            to='/contactUs'
            className='text-white hover:text-[#408ACD]'
            onClick={scrollToTop}
          >
            Contact Us
          </Link>
          <br />
          <Link
            to='/faq'
            className='text-white hover:text-[#408ACD]'
            onClick={scrollToTop}
          >
            FAQ
          </Link>
        </div>
      </div>
      <div className='mt-3.5 lg:mr-10 text-[16px] font-normal tracking-wide leading-10 text-white'>
        <span className='font-bold hover:text-[#408ACD] pointer-events-none'>
          LEGAL
        </span>
        <br />
        <Link
          to='/PrivacyPolicyPage'
          className='text-white hover:text-[#408ACD]'
          onClick={scrollToTop}
        >
          Privacy Policy
        </Link>
        <br />
        <Link
          to='/termsOfService'
          className='text-white hover:text-[#408ACD]'
          onClick={scrollToTop}
        >
          Terms Of Service
        </Link>
      </div>
      <div className='flex flex-col mt-3 font-normal'>
        <div className='text-[16px] tracking-wide leading-10 text-white'>
          <span className='font-bold hover:text-[#408ACD] pointer-events-none'>
            COLLABORATION
          </span>
          <br />
          <span className='text-white hover:text-[#408ACD] cursor-pointer'>
            Virtual Team Interaction
          </span>
          <br />
          <span className='text-white hover:text-[#408ACD] cursor-pointer '>
            Webinar
          </span>
          <br />
          <span className='text-white hover:text-[#408ACD] cursor-pointer'>
            Virtual Meetings
          </span>
        </div>
        <div className='flex self-center gap-2 mt-14 max-w-full aspect-[4.76] w-[225px] max-md:mt-10'>
          <div className='flex self-center rounded-full bg-[#42454A] h-[50px] w-[50px] max-w-full '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
              className='p-2'
            >
              <path
                fill='#ffffff'
                d='M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z'
              />
            </svg>
          </div>
          <div className='flex self-center rounded-full bg-[#42454A] h-[50px] w-[50px] max-w-full '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
              className='p-1 ml-3'
            >
              <path
                fill='#ffffff'
                d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z'
              />
            </svg>
          </div>
          <div className='flex self-center rounded-full bg-[#42454A] h-[50px] w-[50px] max-w-full '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              className='p-2.5'
            >
              <path
                fill='#ffffff'
                d='M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z'
              />
            </svg>
          </div>
          <div className='flex self-center rounded-full bg-[#42454A] h-[50px] w-[50px] max-w-full '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 488 512'
              className='p-2.5'
            >
              <path
                fill='#ffffff'
                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
              />
            </svg>
          </div>
        </div>
        <div className='mt-5 text-xs uppercase text-zinc-500'>
          © 2024 CURIOUS CONNECT, all rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
