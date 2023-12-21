import formatDate from "../utils/formatDate";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchDataOne } from "../api/booking";
import { scrollToTop } from '../ScollToTop.js';
const BarbersAbout = () => {
    const [showModal, setModalShow] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const params = useParams();
  const shopId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataOne(shopId); // Fetch the data
        setData(response.data); // Store the fetched data in state
        console.log("this is about", response.data); // Log the fetched data
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false on error
      }
    };

    fetchData();
    scrollToTop();
  }, [shopId]);

  if (isLoading) {
    return <p>Loading...</p>; // Display a loading message until data is fetched
  }
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 '>
          About
          <span className='text-headingColor font-semibold text-[24px] leading-9 '>
           {data ?`${data.shop_name}` : 'Loading...'}
          </span>
        </h3>
        <p className='text-para  '>
       {data ? `${data.description}` : 'Loading...'}
        </p>
 </div>
        {/*      
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>
          Qualifications
        </h3>
        <ul className='pt-4 md:p-5 '>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
            <div
              className='
                '>
              <span className='text-headingColor text-[15px] leading-6 font-semibold '>
                {formatDate("04-04-2017")} - {formatDate("06-04-2017")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor '>
                Barber Award
              </p>
            </div>
            <p className='text-[16px] leading-6 font-medium text-textColor '>
              Barber Award Name
            </p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
            <div
              className='
                '>
              <span className='text-headingColor text-[15px] leading-6 font-semibold '>
                {formatDate("12-04-2017")} - {formatDate("08-04-2018")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor '>
                Barber Award
              </p>
            </div>
            <p className='text-[16px] leading-6 font-medium text-textColor '>
              Barber Award Name
            </p>
          </li>
        </ul>
      </div> */}

      {/* Experience  */}

{/*       <div className='mt-'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 '>
          <li className='p-4 rounded bg-yellow-100 '>
            <span className='text-yellow-400 leading-6 font-semibold text-[13px] '>
              {formatDate("07-04-2019")} - {formatDate("07-04-2020")}
            </span>
            <p className='text-[14px] leading-6 font-medium text-textColor '>
              Barber Title
            </p>
            <p className='text-[16px] leading-6 font-medium text-textColor '>
              Atlanta Georgia
            </p>
          </li>
          <li className='p-4 rounded bg-yellow-100 '>
            <span className='text-yellow-400 leading-6 font-semibold text-[13px] '>
              {formatDate("07-04-2019")} - {formatDate("07-04-2020")}
            </span>
            <p className='text-[14px] leading-6 font-medium text-textColor '>
              Barber Title
            </p>
            <p className='text-[16px] leading-6 font-medium text-textColor '>
              Atlanta Georgia
            </p>
          </li>

        </ul>
      </div> */}
    </div>
  );
};

export default BarbersAbout;
