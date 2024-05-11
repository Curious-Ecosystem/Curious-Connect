import React from 'react'
import Logo from '../../assets/Footer-Assets/Footer-logo.png'
import Discord from '../../assets/Footer-Assets/Discord.png'
import Facebook from '../../assets/Footer-Assets/Facebook F.png'
import Youtube from '../../assets/Footer-Assets/YouTube.png'
import Google from '../../assets/Footer-Assets/Google.png'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='flex justify-between px-10 py-8' style={{ backgroundColor: '#000000' }}>
      <div>
        <img src={Logo} alt="Logo" />
        <div className='pt-2'>
          <p className='text-slate-400 text-xs md:text-lg'>&copy; {year} CURIOUS CONNECT, ALL RIGHTS RESERVED.</p>
        </div>
      </div>
      <div className='gap-3 sm:flex'>
        <div className='cursor-pointer p-2 sm:p-0'>
          <img src={Discord} alt="Discord" />
        </div>
        <div className='cursor-pointer p-2 sm:p-0'>
          <img src={Facebook} alt="Facebook" />
        </div>
        <div className='cursor-pointer p-2 sm:p-0'>
          <img src={Youtube} alt="Youtube" />
        </div>
        <div className='cursor-pointer p-2 sm:p-0'>
          <img src={Google} alt="Google" />
        </div>
      </div>
    </div >
  )
}

export default Footer
