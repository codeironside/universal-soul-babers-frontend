import React from "react";
import img from '../assets/img/Messages.gif'

const EntityPage = () => {
  return (
    <div className='flex flex-col items-center justify-start h-screen p-8'>
      <img
        src={img}
        alt='Placeholder'
        className=' w-[35%] object-cover'


      />
      <p className='mt-4 text-center text-gray-700'>
        SInce you identify as an entity, we give special service to your type. Click on the button below to get started. We are committed to getting you the best service for your and your peers!
      </p>
      <button className='mt-4 px-4 py-2 bg-primaryDark text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-primaryDark'>
        Request For Service
      </button>
    </div>
  );
};

export default EntityPage;
