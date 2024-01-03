import React, { useState, useEffect } from "react";
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
      Wednesday: ["02:00 PM", "04:30 PM", "07:00 PM"],
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
      // Treat mockData as a single object
      const singleObject = mockData[0];

      // Find the correct day key based on the abbreviated day
      const matchingDayKey = Object.keys(singleObject.workinghours).find(
        (key) => key.toLowerCase().startsWith(selectedDay.toLowerCase())
      );

      // Get the working hours for the selected day
      const workingHours = singleObject.workinghours[matchingDayKey];

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

  const handleBookAppointment = () => {
    // Handle booking appointment logic
    console.log("Booking details:", {
      selectedDay,
      selectedTab,
      selectedTime,
    });

    // Close the modal after handling booking logic
    onClose();
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
              <div className='bg-white p-8'>
                <div className='flex items-center justify-between'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                    Drax Barbershop
                  </Dialog.Title>
                </div>
                <div className='mt-6'>
                  {/* Days of the Week */}
                  <div className='flex mt-4 mb-12 space-x-2'>
                    {daysOfWeek.map((day) => (
                      <button
                        key={day}
                        className={`flex-1 p-2 border border-gray-300 rounded ${
                          selectedDay === day ? "bg-primaryDark text-white" : ""
                        }`}
                        onClick={() => handleDayClick(day)}>
                        {day}
                      </button>
                    ))}
                  </div>

                  {/* Time Tabs */}
                  <div className='flex  mb-4 w-full  items-center bg-gray-200 justify-center rounded-lg p-2'>
                    {["Morning", "Afternoon", "Evening"].map((tab) => (
                      <div className=' flex w-full '>
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
                  <div className='flex flex-wrap space-x-2'>
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
                      <p className='text-gray-500'>Not available</p>
                    )}
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
                        <span className='ml-2  text-sm'>Price : $400</span>
                      </div>
                    </div>
                    <div className='flex items-center gap-2 mt-2 border-t border-gray-300'>
                     <div className="mt-4 flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                      <h3 className="text-md font-medium">
                        Drax BarberShop
                      </h3>
                     </div>


                    </div>
                  </div>

                  {/* Book Appointment Button */}
                  <div className='mt-6'>
                    <button
                      onClick={handleBookAppointment}
                      className='w-full p-2 bg-primaryDark text-white rounded'>
                      Book Appointment
                    </button>
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
