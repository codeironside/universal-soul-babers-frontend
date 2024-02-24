import React, { useState } from "react";
import { IoIosSend, IoIosCloseCircleOutline } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";

const Chat = ({ recipient }) => {
  const [showDisplayBox, setShowDisplayBox] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openModal = () => {
    setIsOpen(true);
    setShowDisplayBox(false); // Hide the display box when chat icon is clicked
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const sendMessage = () => {
    // Logic to send message
    // For demo purposes, let's just log the message
    console.log("Message sent:", message);
    setMessage("");
  };

  // Mock messages for demonstration
  const mockMessages = [
    { sender: "Recipient", message: "Hey there! How can I help you?" },
    { sender: "You", message: "Hi! I have a question about the product." },
    { sender: "Recipient", message: "Sure, go ahead and ask!" },
    { sender: "You", message: "Hi! I have a question about the product." },
    { sender: "Recipient", message: "Sure, go ahead and ask!" },
    { sender: "You", message: "Hi! I have a question about the product." },
    { sender: "Recipient", message: "Sure, go ahead and ask!" },
    { sender: "You", message: "Hi! I have a question about the product." },
    { sender: "Recipient", message: "Sure, go ahead and ask!" },
  ];

  return (
    <div className='fixed bottom-12 right-4'>
      {/* Display box */}
      {showDisplayBox && (
        <div className='fixed bottom-24 right-12 bg-white text-black shadow-lg px-4 py-2 rounded-lg'>
          <p>Hey, let's talk! 👋</p>
        </div>
      )}

      {/* Chat icon */}
      <button
        className='bg-primaryDark text-white rounded-full p-3 shadow-lg'
        onClick={openModal}>
        <IoChatbubblesOutline className='h-10 w-10' />
      </button>

      {/* Chat modal */}
      {isOpen && (
        <div className='fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 flex items-center justify-end'>
          <div className='relative bg-white shadow-md p-6 w-[450px] mx-3 rounded-lg lg:mr-4 md:mr-4'>
            {/* Header */}
            <div className='flex justify-between items-center mb-12'>
              <h2 className='text-lg font-semibold'>{`Chat with ${recipient}! 👋`}</h2>
              {/* Close button */}
              <button className='text-gray-500' onClick={closeModal}>
                <IoIosCloseCircleOutline className='h-6 w-6' />
              </button>
            </div>
            {/* Chat messages */}
            <div className='overflow-y-auto max-h-[500px] md:max-h-[300px] lg:max-h-[300px]'>
              {mockMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-8  text-[14px] ${
                    msg.sender === "Recipient" ? "text-left" : "text-right"
                  }`}>
                  <span
                    className={`inline-block p-3 rounded-lg ${
                      msg.sender === "Recipient"
                        ? "bg-gray-200 rounded-br-none"
                        : "bg-primaryDark rounded-bl-none text-white"
                    }`}>
                    {msg.message}
                  </span>
                </div>
              ))}
            </div>
            {/* Input field */}
            <div className='flex items-center mt-4'>
              <input
                type='text'
                className='border border-gray-300 p-2 w-full rounded-md mr-2'
                placeholder='Type your message...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className='bg-primaryDark text-white px-4 py-2 rounded-md'
                onClick={sendMessage}>
                <IoIosSend className='h-6 w-6' />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
