import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";


const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


const BookingModal = ({ open, onClose, data }) => {
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Morning");
  const [timeSlots, setTimeSlots] = useState([]);

  const page = "booking";
  const [service, setService] =useState('service')
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  useEffect(() => {
    console.log(data);
    // Set the initial selected day when the modal opens
    if (open && !selectedDay) {
      const today = new Date().toLocaleDateString("en-US", {
        weekday: "short",
      });
      const defaultDay = daysOfWeek.find((day) =>
        today.toLowerCase().startsWith(day.toLowerCase())
      );
      setSelectedDay(defaultDay || daysOfWeek[0]);
    }

    if (selectedDay) {
    

      // Find the correct day key based on the abbreviated day
      const matchingDayKey = Object.keys(data?.whours.hours).find((key) =>
        key.toLowerCase().startsWith(selectedDay.toLowerCase())
      );
      console.log(matchingDayKey);

      // Get the working hours for the selected day
      const workingHours = data?.whours.hours[matchingDayKey];

      if (workingHours) {
        // Categorize time slots into Morning, Afternoon, and Evening
        const MorningSlots = workingHours.filter(
          (time) => parseInt(time.split(":")[0]) < 12
        );
        const AfternoonSlots = workingHours.filter(
          (time) =>
            parseInt(time.split(":")[0]) >= 12 &&
            parseInt(time.split(":")[0]) < 17
        );
        const EveningSlots = workingHours.filter(
          (time) => parseInt(time.split(":")[0]) >= 17
        );

        // Set the time slots based on the selected tab
        switch (selectedTab) {
          case "Morning":
            setTimeSlots(MorningSlots);
            break;
          case "Afternoon":
            setTimeSlots(AfternoonSlots);
            break;
          case "Evening":
            setTimeSlots(EveningSlots);
            break;
          default:
            setTimeSlots([]);
        }
      }
    }
  }, [open, selectedDay, selectedTab]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedTab("Morning");
    setSelectedTime([]);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = (amount, date) => {
    localStorage.setItem("booking", JSON.stringify({
      shop: data._id,
      service: "barb",
      time: selectedTime,
      date: date,
      no_persons: "1",
      amount: amount,
    }));    
    // Close the modal after handling booking logic
    // onClose();
  };

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 overflow-y-auto mt-24'
        onClose={onClose}>
        <div className='flex items-center justify-center min-h-screen pt-4 px-8 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 z-60 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='bg-white p-4'>
                <div className='flex items-center justify-between'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg my-3 font-medium leading-6 text-capitalize text-gray-900'>
                    {data.shop_name}
                  </Dialog.Title>
                </div>
                <div className='mt-6'>
                  {/* Days of the Week */}
                  <div className='flex mt-4 mb-12 space-x-2'>
                    <Swiper
                      modules={{ Pagination }}
                      spaceBetween={1}
                      slidesPerView={4}
                      pagination={{
                        clickable: true,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 6,
                          spaceBetween: 1,
                        },
                        760: {
                          slidesPerView: 6,
                          spaceBetween: 1,
                        },
                        1024: {
                          slidesPerView: 6,
                          spaceBetween: 1,
                        },
                      }}>
                      {daysOfWeek.map((day) => (
                        <SwiperSlide key={day}>
                          <button
                            className={`flex-1 p-2 h-14 w-14 border border-gray-300 rounded-full  items-center justify-center  ${
                              selectedDay === day
                                ? "bg-primaryDark text-white"
                                : ""
                            }`}
                            onClick={() => handleDayClick(day)}>
                            {day}
                          </button>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Time Tabs */}
                  <div className='flex  mb-4 w-full  items-center bg-gray-200 justify-center rounded-lg p-2'>
                    {["Morning", "Afternoon", "Evening"].map((tab, i) => (
                      <div className=' flex w-full ' key={i}>
                        <button
                          key={tab}
                          className={`flex-1 p-2  rounded w-full ${
                            selectedTab === tab
                              ? "bg-primaryDark text-white"
                              : ""
                          }`}
                          onClick={() => handleTabClick(tab)}>
                          {tab}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Time Slots */}
                  <div className='grid grid-cols-3 gap-2 w-full mt-6'>
                    {timeSlots.length > 0 ? (
                      timeSlots.map((time) => (
                        <button
                          key={time}
                          className={`p-1 border border-gray-300 rounded col-span-1 ${
                            selectedTime === time
                              ? "bg-primaryDark text-white"
                              : ""
                          }`}
                          onClick={() => handleTimeClick(time)}>
                          {time}
                        </button>
                      ))
                    ) : (
                      <p className='text-gray-500 col-span-3'>Not available</p>
                    )}
                  </div>

                  {/* Service */}
                  <div className='flex  my-4 w-full  items-center justify-start rounded-lg p-2'>
                    <div className='w-full'>
                      <p className='text-lg mb-3'>{service}:</p>
                      <p className='rounded-lg  p-2 bg-gray-200  '>
                        Barber Service
                      </p>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className='my-12 w-full bg-gray-200 p-4 rounded-lg '>
                    <div className='flex items-center justify-between w-full my-3'>
                      <h4 className='text-sm font-medium text-gray-900'>
                        Appointment
                      </h4>

                      <div className='flex flex-col'>
                        <span className='font-semibold text-sm mb-2'>
                          Time: {selectedTime}
                        </span>
                        <span className='ml-2  text-sm'>
                          Price : ${data.price}
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center gap-2 mt-2 border-t border-gray-300'>
                      <div className='mt-4 flex items-center gap-2'>
                        <img
                          className='w-8 h-8 rounded-full'
                          src={data?.owner.pictureUrl}
                          alt=''
                        />
                        <h3 className='text-md font-medium'>{data.shop_name}</h3>
                      </div>
                    </div>
                  </div>

                  <p className='text-sm text-right mb-3'>
                    Date :{" "}
                    <span className='ml-2 font-bold'>{formattedDate}</span>
                  </p>

                  {/* Book Appointment Button */}
                  <div className='mt-6'>
                  <Link to={`/payment/${page}/${data._id}/${data.price}`}>
                    <button
                      onClick={()=> handleBookAppointment(data.price, formattedDate)}
                      className='w-full p-2 bg-primaryDark text-white rounded'>
                      Book Appointment
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BookingModal;
