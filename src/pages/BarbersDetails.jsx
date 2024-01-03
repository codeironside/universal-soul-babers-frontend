import React from "react";
import { useState, useEffect } from "react";
import baberImg from "../assets/img/about-1.jpg";
import star from "../assets/img/Star.png";
import BarbersAbout from './BarbersAbout'
import Feedback from './Feedback'
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import {SidePanel, BookingModal} from '../components'
import { useParams } from 'react-router-dom';
import { fetchDataOne } from "../api/booking";
import { ToastContainer } from "react-toastify";
import { scrollToTop } from '../ScollToTop.js';

 const BarbersDetails = () => {

 const [tab, setTab] = useState("about");
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
        // console.log("this is data", response.data); // Log the fetched data
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
    
    <>
      <section className='px-5 mx-auto container'>
        <div className='grid md:grid-cols-3 gap-[50px] '>
          <div className='md:col-span-2'>
            <div className='flex flex-col md:flex-row lg:flex-row items-center  gap-5'>
              <figure className='max-w-[200px] max-h-[200px] rounded-lg '>
               {/*<img src={} alt=''  /> */}
                     <img
  src={data.images || baberImg}
  alt={data.shop_name}
  className='w-full rounded-lg'
/>
              </figure>
              <div>
                <span
                  className='bg-[#CCF0F3] text-textColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px]
        lg:leading-7 font-semibold rounded
        '>
                  Professional
                </span>
                
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold '>
  {data && data.owner ? data.shop_name: 'Loading...'}
</h3>

                <div className='flex items-center gap-2 '>
                  <span className='flex items-center text-[14px] leading-5 gap-[6px] lg:text-[16px] lg:leading-7 font-semibold text-headingColor '>
                    <img src={star} alt='' /> 4.6
                  </span>
                  <span
                    className='
                 text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor
                 '>
                    (272)
                  </span>
                </div>
                <p className='text-para text-[14px] leading-6 md:text-[15px] lg:max-w-[300px] '>
{data  ? `${data.description}` : 'Loading...'}
                </p>

                {/* social links  */}
{/*                 <div className='flex items-center gap-3 mt-4'>
                  <a
                    href='https://www.youtube.com/@universoulbarbers'
                    target='_blank'
                    className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                    <RiYoutubeFill className='group-hover:text-white w-4 h-5' />
                  </a>
                  <a
                    href='https://www.linkedin.com/company/universoulbarbers'
                    target='_blank'
                    className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                    <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
                  </a>
                  <a
                    href='https://www.instagram.com/universoulbarbers'
                    target='_blank'
                    className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                    <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
                  </a>
                </div> */}
              </div>
            </div>
            <div className='mt-[50px] border-b border-solid border-[#0066ff34]  '>
              <button
                onClick={() => {
                  setTab("about");
                  console.log(tab);
                }}
                className={` ${
                  tab === "about" && "border-b border-solid border-primaryColor"
                }  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                About
              </button>
{/*               <button
                onClick={() => {
                  setTab("reviews");
                  console.log(tab);
                }}
                className={`
              ${
                tab === "reviews" && "border-b border-solid border-primaryColor"
              }
              py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                Reviews
              </button> */}
            </div>
            <div className='mt-[50px] '>
              {tab === "about" && <BarbersAbout />}
             
            </div>
          </div>
           {/* needs to be worked on by the devs devs */}
{/*           <div className='md:col-span-1'>
            <SidePanel setModalShow={setModalShow} data={data} />
          </div> */}
        </div>
      </section>
       {/*{showModal && (
      //   <BookingModal open={showModal}  onClose={()=> setModalShow(false)} />
      // )}
      // <ToastContainer position='top-center' /> */}
    </>
  );
};

export default BarbersDetails;
