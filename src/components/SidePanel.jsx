import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md' >
        <div className="flex items-center justify-between">
            <p className="text-para mt-0 font-semibold">
                Booking Price
            </p>
            <span className="text-[16px] lg:text-[20px] lg:leading-6 text-headingColor font-bold  ">200 USDT</span>
        </div>
        <div className="mt-[30px]">
          <p className='text-para mt-0 font-semibold text-headingColor ' >Working Hours: </p>
          <ul className="mt-3">
            <li className="flex items-center justify-between mb-2">
                <p className='text-[15px]  leading-6 text-textColor  font-semibold' >Sunday</p>
                <p className='text-[15px]  leading-6 text-textColor font-semibold' >4:00 PM - 10:00 PM</p>
            </li>
            <li className="flex items-center justify-between mb-2">
                <p className='text-[15px]  leading-6 text-textColor font-semibold' >Monday</p>
                <p className='text-[15px]  leading-6 text-textColor font-semibold' >4:00 PM - 10:00 PM</p>
            </li>
            <li className="flex items-center justify-between mb-2">
                <p className='text-[15px]  leading-6 text-textColor font-semibold' >Teusday</p>
                <p className='text-[15px]  leading-6 text-textColor font-semibold' >4:00 PM - 10:00 PM</p>
            </li>
            <li className="flex items-center justify-between mb-2">
                <p className='text-[15px]  leading-6 text-textColor font-semibold' >Wednesday</p>
                <p className='text-[15px]  leading-6 text-textColor font-semibold' >4:00 PM - 10:00 PM</p>
            </li>
            <li className="flex items-center justify-between mb-2">
                <p className='text-[15px]  leading-6 text-textColor font-semibold' >Thursday</p>
                <p className='text-[15px]  leading-6 text-textColor font-semibold' >4:00 PM - 10:00 PM</p>
            </li>
          </ul>
        </div>
        <button className='btn px-2 w-full rounded-md' >Hire Me</button>
    </div>
  )
}

export default SidePanel
