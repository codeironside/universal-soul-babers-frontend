import React, { useState } from "react";

const CheckOptions = ({ question, options }) => {
  const [checkedIndex, setCheckedIndex] = useState(-1);

  const handleOptionChange = (index) => {
    setCheckedIndex(index);
  };

  return (
    <div className='flex flex-col w-full justify-start space-y-2'>
      <p className='text-gray-700'>{question}</p>
      {options.map((option, index) => (
        <label key={index} className='inline-flex items-center'>
          <input
            type='checkbox'
            checked={checkedIndex === index}
            onChange={() => handleOptionChange(index)}
            className='h-4 w-4 text-black focus:outline-none border-gray-300 rounded'
          />
          <span className='ml-2 text-gray-700'>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckOptions;
