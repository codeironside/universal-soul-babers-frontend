import React, {useEffect} from 'react'
import { makeBooking } from '../api/booking'
import { css, keyframes } from '@emotion/react';
const styles = {
  card: {
    border: '2px solid #008080', // Teal color
    borderRadius: '5px',
    padding: '1em',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    animation: 'breatheBorder 4s ease-in-out infinite',
  },
  movingBorder: `
    @keyframes breatheBorder {
      0% {
        transform: scale(1);
        border-color: #FFD700; /* Golden color */
      }
      50% {
        transform: scale(1.1);
        border-color: #008080; /* Teal color */
      }
      100% {
        transform: scale(1);
        border-color: #FFD700; /* Golden color */
      }
    }
  `,
};
;
const WorkingHours = ({ hours }) => {
  const styles = {
    workingHours: {
      listStyleType: 'none',
      padding: 0,
      margin: '1em 0',
    },
    day: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '1em',
      backgroundColor: '#A9A9A9', // Darker grey background
      padding: '10px', // Some padding to prevent text from sticking to the edges
      borderRadius: '5px', // Rounded edges
    },
    dayName: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      color: '#333',
    },
    times: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '0.5em',
      color: '#666',
      backgroundColor: '#F5F5F5', // Very light grey background
      borderRadius: '5px', // Rounded edges
      padding: '10px', // Some padding to prevent text from sticking to the edges
      border: '2px solid #000', // Solid border
    },
  };

  return (
    <ul style={styles.workingHours}>
      {Object.entries(hours).map(([day, times]) => {
        if (Array.isArray(times) && times.length > 0) {
          return (
            <li key={day} style={styles.day}>
              <p style={styles.dayName}>{day}</p>
              <div style={styles.times}>
                {times.join(' ')}
              </div>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

const SidePanel = ({ setModalShow, data }) => {
  console.log(data);

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

  const { hours = {} } = data?.whours || {};

  return (
    <div style={styles.card}>
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
        <WorkingHours hours={hours} />
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
export default SidePanel
