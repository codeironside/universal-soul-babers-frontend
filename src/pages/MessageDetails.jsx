import React from "react";
import { FiChevronLeft, FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

const MessageDetails = () => {
  return (
    <div className='lg:max-w-4xl xl:max-w-6xl w-full h-screen flex flex-col relative'>
      {/* Header */}
      <Link to={"/messages"}>
        <div className='bg-gray-200 flex items-center p-4'>
          <FiChevronLeft className='text-gray-600 mr-2' />
          <span className='text-gray-600'>Back to Messages</span>
        </div>
      </Link>

      {/* Chat area */}
      <div className='flex-grow p-4 overflow-y-auto'>
        {/* Sender message */}
        <div className='flex  justify-end mb-4'>
          <div className='bg-primaryDark w-[70%] lg:w-full  text-white rounded-br-lg rounded-tl-lg p-2 max-w-md'>
            <p className='mb-2'>Hello there!</p>
            <p className='text-xs text-right'>Jan 23, 2024 12:23:00 AM</p>
          </div>
        </div>

        {/* Recipient message */}
        <div className='flex justify-start mb-4'>
          <div className='bg-gray-300 w-[70%] lg:w-full  text-black rounded-bl-lg rounded-tr-lg p-2 max-w-md'>
            <p className='mb-2'>Hi! How can I help you?</p>
            <p className='text-xs text-right'>Jan 23, 2024 12:24:00 AM</p>
          </div>
        </div>

        {/* Add more messages here */}
      </div>

      {/* Input field */}
      <div className='bg-gray-200 flex items-center p-4 fixed bottom-0 lg:left-60 left-0 right-0 z-10'>
        <input
          type='text'
          placeholder='Type your message...'
          className='flex-grow border rounded-full py-2 px-4 mr-4 focus:outline-none'
        />
        <FiSend className='text-gray-600 cursor-pointer' />
      </div>
    </div>
  );
};


export default MessageDetails
