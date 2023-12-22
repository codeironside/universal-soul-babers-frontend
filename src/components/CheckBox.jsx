import {useState} from 'react'

const CheckBox = () => {
   const [isChecked, setIsChecked] = useState(false);

   const handleCheckboxChange = () => {
     setIsChecked(!isChecked);
   };

   return (
     <div className='flex items-center'>
       <input
         type='checkbox'
         id='privacyCheckbox'
         checked={isChecked}
         onChange={handleCheckboxChange}
         className='h-4 w-4 text-black focus:outline-none border-gray-300 rounded'
       />
       <label htmlFor='privacyCheckbox' className='ml-2 text-sm text-gray-700'>
         Agree to privacy and policy terms
       </label>
     </div>
   );
}

export default CheckBox