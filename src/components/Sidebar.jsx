import { link } from 'react-router-dom'
import React from 'react'

const Sidebar = () => {
  return <>
  <DesktopSidebar />
  <MobileSidebar />
  
  </>
}

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block '>
      <div className='flex flex-col gap-20 sticky top-10 left-0'>
        <div className='w-full'>
          <img src="https://1drv.ms/i/c/002e07b621815684/EZ1205rGAxtHlNH6j5HmEEMBRCUUkizRYFCA-2k1WFWnWg?e=yEsyh0" alt="logo" className='hidden md:block'/>
          <img src="mobile logo.png" alt="logo" className='block md:hidden'/>

        </div>
        <ul className='flex flex-col items-center md:items-start gap-8'>
          <link to={"/"} className='flex gap-1'>
            <Home size={"24"} />
            <span className='font-bold hidden md:block'>Home</span>
          </link>
        </ul>
      </div>
    </div>
  )
}