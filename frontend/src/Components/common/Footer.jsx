import React from 'react'
import Logo from '../../assets/OurTeam-Assets/CDC.jpg'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='flex flex-col lg:flex-row justify-between px-10 py-8 bg-zinc-800 text-white'>
      <div className='flex flex-col mx-auto'>
        <div className='flex gap-7 mb-7'>
          <img src={Logo} alt="Logo" className='h-24 w-24 rounded-full' />
          <div className='w-34 h-24 flex items-center text-xl font-bold'>
            <h1>Curious Connect</h1>
          </div>
        </div>
        <div className='w-96 h-24 flex-col items-center '>
          <h1 className='text-lg font-bold mb-1'>Subscribe To Our Newsletter</h1>
          <p className='text-sm text-slate-400'>Get the latest news, articles and resources directly in your Inbox weekly</p>
        </div>
        <div className='flex gap-4'>
          <input type="text" placeholder='Enter Email...' className='p-1 pl-3 w-64 rounded-lg  hover:scale-105 transition-scale duration-300 text-black' />
          <button className='p-3 font-bold bg-blue-500 rounded-xl hover:scale-105 transition-scale duration-300'>Subscribe</button>
        </div>
      </div>
      <div className='flex flex-row gap-4 sm:gap-0 justify-evenly'>
        <div className='mt-6'>
          <h1 className='font-bold text-lg mb-4 hover:text-cyan-500 hover:scale-101 transition-scale duration-300'>EXPLORE</h1>
          <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>Webinars</h1>
          <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>Events</h1>
          <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>Resources</h1>
          <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>Remote Team Interaction</h1>
          <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>One-on-One Live Session</h1>
        </div>
        <div className='mt-6 mr-8'>
          <h1 className='font-bold text-lg mb-4 hover:text-cyan-500 hover:scale-101 transition-scale duration-300'>ABOUT</h1>
          <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>About Us</h1>
          <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>Contact Us</h1>
          <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>FAQ</h1>
        </div>
      </div>
      <div className='flex flex-row gap-4 sm:gap-0 justify-evenly ml-14'>
        <div className='mt-6'>
          <h1 className='font-bold text-lg mb-4 hover:text-cyan-500 hover:scale-101 transition-scale duration-300'>LEGAL</h1>
          <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>Privacy Policy</h1>
          <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>Terms Of Service</h1>
        </div>
        <div className='gap-3 lg:items-center items-end flex flex-col'>
          <div className='mt-6'>
            <h1 className='font-bold text-lg mb-4 hover:text-cyan-500 hover:scale-101 transition-scale duration-300'>COLLABORATION</h1>
            <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>Virtual Team Interaction</h1>
            <h1 className='mb-3 hover:text-blue-500 cursor-pointer'>Webinar</h1>
            <h1 className='mb-12 hover:text-blue-500 cursor-pointer'>Virtual Meetings</h1>
          </div>
          <div className='flex gap-5 justify-center'>
            <div className='cursor-pointer h-14 w-14 bg-slate-700 rounded-full hover:bg-slate-600'>
              <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-auto my-4'>
                <path d="M27.1784 2.15193C25.1738 1.22256 23.0035 0.54801 20.7427 0.158272C20.7229 0.157642 20.7032 0.161341 20.6849 0.169111C20.6667 0.176881 20.6504 0.188532 20.6372 0.203242C20.3659 0.697909 20.0494 1.34248 19.8384 1.83714C17.4405 1.47738 15.0018 1.47738 12.6039 1.83714C12.3929 1.32749 12.0764 0.697909 11.79 0.203242C11.7749 0.173262 11.7297 0.158272 11.6845 0.158272C9.42373 0.54801 7.26845 1.22256 5.24882 2.15193C5.23374 2.15193 5.21867 2.16692 5.2036 2.18191C1.10405 8.28281 -0.0263422 14.2188 0.531317 20.0949C0.531317 20.1248 0.546389 20.1548 0.576533 20.1698C3.28947 22.1485 5.89691 23.3477 8.4742 24.1421C8.51941 24.1571 8.56463 24.1421 8.5797 24.1122C9.18258 23.2877 9.72516 22.4183 10.1924 21.5039C10.2225 21.4439 10.1924 21.384 10.1321 21.369C9.27301 21.0392 8.45913 20.6495 7.66032 20.1998C7.60003 20.1698 7.60003 20.0799 7.64524 20.0349C7.81103 19.915 7.97683 19.7801 8.14262 19.6602C8.17276 19.6302 8.21798 19.6302 8.24812 19.6452C13.4328 21.9986 19.0245 21.9986 24.149 19.6452C24.1791 19.6302 24.2243 19.6302 24.2545 19.6602C24.4202 19.7951 24.586 19.915 24.7518 20.0499C24.8121 20.0949 24.8121 20.1848 24.7368 20.2148C23.953 20.6795 23.1241 21.0542 22.265 21.384C22.2047 21.399 22.1896 21.4739 22.2047 21.5189C22.687 22.4333 23.2296 23.3027 23.8174 24.1271C23.8626 24.1421 23.9078 24.1571 23.953 24.1421C26.5454 23.3477 29.1528 22.1485 31.8657 20.1698C31.8959 20.1548 31.911 20.1248 31.911 20.0949C32.5741 13.3044 30.8107 7.41339 27.2387 2.18191C27.2236 2.16692 27.2085 2.15193 27.1784 2.15193ZM10.9761 16.5123C9.42373 16.5123 8.12754 15.0882 8.12754 13.3344C8.12754 11.5806 9.39358 10.1565 10.9761 10.1565C12.5737 10.1565 13.8398 11.5956 13.8247 13.3344C13.8247 15.0882 12.5587 16.5123 10.9761 16.5123ZM21.4812 16.5123C19.9288 16.5123 18.6326 15.0882 18.6326 13.3344C18.6326 11.5806 19.8987 10.1565 21.4812 10.1565C23.0788 10.1565 24.3449 11.5956 24.3298 13.3344C24.3298 15.0882 23.0788 16.5123 21.4812 16.5123Z" fill="white" />
              </svg>
            </div>
            <div className='cursor-pointer h-14 w-14 bg-slate-700 rounded-full hover:bg-slate-600'>
              <div>
                <svg width="16" height="25" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-auto my-4 '>
                  <path d="M8.24731 11.6136H10.9061L11.9696 7.61521H8.24731V5.61603C8.24731 4.58645 8.24731 3.61685 10.3743 3.61685H11.9696V0.258229C11.6229 0.215246 10.3137 0.118286 8.93114 0.118286C6.04371 0.118286 3.99327 1.77461 3.99327 4.81636V7.61521H0.802734V11.6136H3.99327V20.1101H8.24731V11.6136Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className='cursor-pointer h-14 w-14 bg-slate-700 rounded-full hover:bg-slate-600'>
              <svg width="32" height="25" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-auto my-4'>
                <path d="M13.695 -0.00292969H13.837C15.1483 0.00156846 21.7926 0.0465502 23.5841 0.499364C24.1257 0.63756 24.6192 0.90693 25.0153 1.28056C25.4114 1.65418 25.6963 2.11897 25.8414 2.62849C26.0025 3.19825 26.1158 3.95244 26.1924 4.73062L26.2083 4.88656L26.2434 5.2764L26.2562 5.43234C26.3599 6.80277 26.3726 8.08624 26.3742 8.36663V8.47908C26.3726 8.76996 26.3583 10.1404 26.2434 11.5678L26.2306 11.7252L26.2163 11.8812C26.1365 12.7388 26.0185 13.5905 25.8414 14.2172C25.6963 14.7267 25.4114 15.1915 25.0153 15.5652C24.6192 15.9388 24.1257 16.2082 23.5841 16.3463C21.7336 16.8142 14.7001 16.8471 13.7254 16.8486H13.4988C13.0059 16.8486 10.9671 16.8396 8.82949 16.7707L8.55829 16.7617L8.4195 16.7557L8.14671 16.7452L7.87392 16.7347C6.10318 16.6612 4.41698 16.5428 3.64009 16.3449C3.0987 16.2068 2.60532 15.9376 2.20922 15.5643C1.81311 15.1909 1.52815 14.7265 1.38279 14.2172C1.20571 13.592 1.08766 12.7388 1.0079 11.8812L0.995136 11.7237L0.982374 11.5678C0.903191 10.5519 0.859563 9.53372 0.851563 8.51507L0.851562 8.33064C0.854753 8.00828 0.867515 6.89423 0.95366 5.66474L0.964826 5.5103L0.969612 5.43234L0.982374 5.2764L1.01747 4.88656L1.03342 4.73062C1.11 3.95244 1.22326 3.19676 1.38438 2.62849C1.5295 2.11897 1.81436 1.65418 2.21047 1.28056C2.60659 0.90693 3.1001 0.63756 3.64168 0.499364C4.41858 0.304444 6.10477 0.184493 7.87552 0.109524L8.14671 0.0990283L8.4211 0.0900323L8.55829 0.0855342L8.83108 0.0750385C10.3493 0.0291625 11.8682 0.00367024 13.3872 -0.00143023L13.695 -0.00292969ZM11.0613 4.81009V12.0341L17.6928 8.42361L11.0613 4.81009Z" fill="white" />
              </svg>
            </div>
            <div className='cursor-pointer h-14 w-14 bg-slate-700 rounded-full hover:bg-slate-600'>
              <svg width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-auto my-4'>
                <path d="M1.22142 5.62602C2.10627 3.96995 3.4637 2.57779 5.14198 1.60514C6.82026 0.632502 8.75327 0.117703 10.7249 0.118287C13.5911 0.118287 15.9989 1.10888 17.8398 2.72222L14.7908 5.58904C13.6879 4.59845 12.2862 4.09365 10.7249 4.09365C7.9545 4.09365 5.60946 5.85293 4.77461 8.21496C4.56191 8.81471 4.44067 9.45445 4.44067 10.1142C4.44067 10.7739 4.56191 11.4136 4.77461 12.0134C5.61053 14.3764 7.9545 16.1347 10.7249 16.1347C12.1554 16.1347 13.3731 15.7799 14.326 15.1801C14.8784 14.8382 15.3514 14.3946 15.7162 13.8761C16.0811 13.3576 16.3303 12.7749 16.4488 12.1633H10.7249V8.29693H20.7411C20.8666 8.95066 20.9346 9.63238 20.9346 10.3411C20.9346 13.3858 19.7754 15.9488 17.7633 17.6881C16.0042 19.2154 13.5964 20.1101 10.7249 20.1101C9.32817 20.1106 7.94497 19.8524 6.65441 19.3503C5.36385 18.8481 4.19122 18.1118 3.20355 17.1835C2.21588 16.2552 1.43252 15.1531 0.898255 13.9401C0.363989 12.7271 0.0892856 11.427 0.0898446 10.1142C0.0898446 8.50084 0.50036 6.97547 1.22142 5.62602Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='pt-2'>
            <p className='text-slate-400 text-xs font-mono'>&copy; {year} CURIOUS CONNECT, ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer
