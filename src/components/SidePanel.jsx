import React, {useEffect} from 'react'
import { makeBooking } from '../api/booking'

const SidePanel = ({ setModalShow, data }) => {
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

   const { workinghours } = mockData[0];
   const getDefaultHours = () => {
    const defaultHours = {
      Monday: ['Closed'],
      Tuesday: ['Closed'],
      Wednesday: ['Closed'],
      Thursday: ['Closed'],
      Friday: ['Closed'],
      Saturday: ['Closed'],
      Sunday: ['Closed'],
    };
    return defaultHours;
  };
console.log(data)
   return (
    <div className='shadow-panelShadow p-4 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text-para mt-0 font-semibold'>Booking Price</p>
        <span className='text-[16px] lg:text-[20px] lg:leading-6 text-headingColor font-bold'>
          $ {data ? `${data.price}` : "not available"}
        </span>
      </div>
      
      {/* Working hours */}
      <div className='mt-[30px] p-4'>
        <p className='text-para mt-0 font-semibold text-headingColor'>
          Working Hours:
        </p>
        <ul className='mt-3'>
          {Object.entries(workingHours || getDefaultHours()).map(([day, hours]) => (
            <li key={day} className='flex flex-col w-full mb-2'>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                {day}
              </p>
              <div className='flex flex-wrap'>
                {hours.length > 0 ? (
                  hours.map((timeSlot, index) => (
                    <span
                      key={index}
                      className='text-[13px] lg:text-[15px] leading-6 text-textColor bg-gray-200 rounded-md px-2 py-1 mr-2 mb-2'
                    >
                      {timeSlot}
                    </span>
                  ))
                ) : (
                  <span className='text-[13px] lg:text-[15px] leading-6 text-textColor'>
                    Not available
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setModalShow(true)}
        className='btn px-2 w-full rounded-md'
      >
        Hire Me
      </button>
    </div>
  );
};


//   return (
//     <div className='shadow-panelShadow p-4 lg:p-5 rounded-md'>
//       <div className='flex items-center justify-between'>
//         <p className='text-para mt-0 font-semibold'>Booking Price</p>
//         <span className='text-[16px] lg:text-[20px] lg:leading-6 text-headingColor font-bold  '>
//           $ {data ? `${data.price}` : "not available"}
//         </span>
//       </div>
      
//       {/* working hours  */}
//       <div className='mt-[30px] p-4'>
//         <p className='text-para mt-0 font-semibold text-headingColor '>
//           Working Hours:
//         </p>
//         <ul className='mt-3 '>
//           {Object.entries(workinghours).map(([day, hours]) => (
//             <li
//               key={day}
//               className='flex items-center  w-full justify-between mb-2'>
//               <p className='text-[15px] leading-6 text-textColor font-semibold'>
//                 {day}
//               </p>
//               <p className='text-[15px] leading-6 text-textColor font-semibold'>
//                 {hours.length > 0
//                   ? `${hours[0]} - ${hours[hours.length - 1]}`
//                   : "not available"}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <button
//         onClick={() => setModalShow(true)}
//         className='btn px-2 w-full rounded-md'>
//         Hire Me
//       </button>
//     </div>
//   );
// }

export default SidePanel
