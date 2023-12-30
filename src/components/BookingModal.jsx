import React, { useState,useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


     const mockData = [
       {
         _id: "658e0ce752d50b25110bf0095",
         shop_name: "ima and caleb stores",
         description: "Teusday stores",
         workinghours: {
           Monday: ["10:00 AM", "12:30 PM", "03:00 PM"],
           Tuesday: ["08:30 AM", "11:00 AM"],
           Wednesday: ["02:00 PM", "04:30 PM", "07:00 PM","2:00 PM"],
           Thursday: ["06:30 PM", "08:00 PM"],
           Friday: ["12:00 PM", "02:30 PM"],
           Saturday: ["08:30 PM", "10:00 PM"],
           Sunday: ["09:00 AM", "11:30 AM"],
         },
         category: "barbers",
         owner: "65659eea6c68adee2fc9220a",
         contact_number: "0908795123",
         contact_email: "fury25423@gmail.cm",
         price: 900,
         availabilty: false,
         subscriptionType: "basic",
       },
     ];
    

const BookingModal = ({ open, onClose }) => {
  
  const [selectedTime, setSelectedTime] = useState([]);
 const [selectedDay, setSelectedDay] = useState(null);
 const [selectedTab, setSelectedTab] = useState("Morning");
 const [timeSlots, setTimeSlots] = useState([]);





useEffect(() => {
  if (open && !selectedDay) {
    // Set the initial selected day when the modal opens
    const today = new Date().toLocaleDateString("en-US", { weekday: "short" });
    const defaultDay = daysOfWeek.find((day) =>
      today.toLowerCase().startsWith(day.toLowerCase())
    );
    setSelectedDay(defaultDay || daysOfWeek[0]);
  }

  if (selectedDay) {
    // Treat mockData as a single object
    const singleObject = mockData[0];

    // Find the correct day key based on the abbreviated day
    const matchingDayKey = Object.keys(singleObject.workinghours).find((key) =>
      key.toLowerCase().startsWith(selectedDay.toLowerCase())
    );

    // Get the working hours for the selected day
    const workingHours = singleObject.workinghours[matchingDayKey];

    if (workingHours) {
      // Categorize time slots into Morning, Afternoon, and Evening
      const MorningSlots = workingHours.filter(
        (time) =>
          parseInt(time.split(":")[0]) < 12 && time.toLowerCase().includes("am")
      );
      const AfternoonSlots = workingHours.filter(
        (time) =>
          (parseInt(time.split(":")[0]) >= 12 &&
            parseInt(time.split(":")[0]) < 5) ||
          (parseInt(time.split(":")[0]) === 12 &&
            time.toLowerCase().includes("pm"))
      );
      const EveningSlots = workingHours.filter(
        (time) =>
          parseInt(time.split(":")[0]) >= 5 ||
          (parseInt(time.split(":")[0]) === 12 &&
            time.toLowerCase().includes("pm"))
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
              <div className='bg-white p-4 sm:p-6'>
                {/* Heading */}
                <h2 className='text-lg font-semibold my-4 leading-6 text-gray-900'>
                  Drax Barbershop
                </h2>

                {/* Days of the Week */}
                <div className='flex mt-4 mb-8 space-x-2 overflow-x-auto'>
                  {daysOfWeek.map((day) => (
                    <button
                      key={day}
                      className={`flex-1 p-2 border border-gray-300 rounded ${
                        selectedDay === day
                          ? "bg-primaryDark text-white"
                          : ""
                      }`}
                      onClick={() => handleDayClick(day)}>
                      {day}
                    </button>
                  ))}
                </div>

                {/* Tabs */}
                <div className='mb-8 mt-12 space-x-2 mx-auto w-full  flex items-center justify-center'>
                  <div className='flex px-2 items-center justify-evenly py-2 bg-gray-200 w-[98%] rounded-lg'>
                    {["Morning", "Afternoon", "Evening"].map((tab) => (
                      <button
                        key={tab}
                        className={`p-3 px-4 border w-full  rounded ${
                          selectedTab === tab ? "bg-primaryDark text-white" : ""
                        }`}
                        onClick={() => handleTabClick(tab)}>
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div className='grid grid-cols-3 gap-2 mt-4 mb-12'>
                  {timeSlots.length > 0 ? (
                    timeSlots.map((time) => (
                      <button
                        key={time}
                        className={`p-2 border border-gray-300 rounded ${
                          selectedTime === time
                            ? "bg-primaryDark text-white"
                            : ""
                        }`}
                        onClick={() => handleTimeClick(time)}>
                        {time}
                      </button>
                    ))
                  ) : (
                    <div className='text-gray-500 mx-auto'>Not available</div>
                  )}
                </div>

                {/* Details Box */}
                <div className='my-8  bg-gray-100 p-4 rounded-lg'>
                  <div className='flex justify-between items-center'>
                    <div className='font-semibold'>Appointment</div>
                    <div>
                      <div>
                        <span className='font-semibold mr-2'>Price :</span> $400
                      </div>
                      <div>
                        <span className='font-semibold mr-2'>Time :</span>
                        {selectedTime}
                      </div>
                    </div>
                  </div>
                  <div className='border-t border-gray-300 mt-4 pt-4'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8 rounded-full bg-gray-500'></div>
                      <div className='ml-2'>Drax BarberShop</div>
                    </div>
                  </div>
                </div>

                <h2 className='text-lg  my-8 leading-5 text-right text-gray-900'>
                  <span className='font-semibold mr-2'>Total :</span>$ 400
                </h2>

                {/* Book Appointment Button */}
                <div className='mt-4'>
                  <button
                    type='button'
                    className='w-full px-4 py-4 text-sm font-medium text-white bg-primaryDark border border-transparent rounded-md hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-primaryDark'
                    onClick={onClose}>
                    Book Appointment
                  </button>
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
