import React from "react";

const ShopCard = ({ shop }) => {
  const {
    shop_name,
    price,
    description,
    contact_email,
    contact_number,
    category,
    workinghours,
    _id,
  } = shop;
  
  return (
    <div className='p-6 lg:p-5 flex items-center justify-center shadow-card'>
      <div
        className='md:min-w-[300px]'
        data-aos='zoom-in'
        data-aos-duration='750'
        data-aos-delay='500'>
        <div className='h-48 w-full flex items-center justify-center lg:justify-center md:justify-center'>
          <img
            src='https://i.imgur.com/h9YQFtC.jpg'
            alt={shop_name}
            className='h-full rounded-lg '
          />
        </div>
        <h2 className='text-[18px] leading-[24px] lg:text-[26px] lg:leading-10 text-headingColor font-[700] mt-4 '>
          {shop_name}
        </h2>

        <div className='flex w-full mt-[16px] lg:mt-3  items-center justify-center flex-col  '>
          <div className='flex w-full items-center justify-between'>
            <p className='text-para mt-0 font-semibold'>Booking Price</p>
            <span className='text-[16px] lg:text-[20px] lg:leading-6 text-headingColor font-bold  '>
              $ {price}
            </span>
          </div>
          <div className='mt-[30px] w-full'>
            <p className='text-para mt-0 font-semibold text-headingColor '>
              Working Hours:
            </p>
            <ul className='mt-3'>
              {Object.entries(workinghours).map(([day, hours]) => (
                <li
                  className='flex items-center justify-between mb-2'
                  key={day}>
                  <p className='text-[15px] leading-6 text-textColor  font-semibold'>
                    {day}
                  </p>
                  <p className='text-[15px] leading-6 text-textColor font-semibold'>
                    {hours[0]} - {hours[hours.length - 1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className='my-[30px] w-full flex justify-between  '>
            <button className='w-[35%] bg-green-600 text-white py-2 rounded-lg '>
              Edit
            </button>
            <button className='w-[35%] bg-red-600 text-white py-2 rounded-lg '>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
