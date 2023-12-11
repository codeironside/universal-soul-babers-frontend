import React, {useEffect} from 'react'
import { makeBooking } from '../api/booking'

const SidePanel = () => {

  useEffect(()=> {
    const values = JSON.stringify({
      service: 'MyService',
     date: '01-12-2003',
    no_persons: 2,
    time: '15:03pm',
    shop_id: '652403697ee3e611c69abe1d',
    });

      makeBooking(values)
  },[])
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
