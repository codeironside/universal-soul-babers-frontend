import React from "react";
import { useState } from "react";
import baberImg from "../assets/img/about-1.jpg";
import star from "../assets/img/Star.png";
import BarbersAbout from './BarbersAbout'
import Feedback from './Feedback'

const BarbersDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section className='px-5 mx-auto container'>
      <div className='grid md:grid-cols-2 gap-[50px] '>
        <div className='md:col-span-1'>
          <div className='flex items-center  gap-5'>
            <figure className='max-w-[200px] max-h-[200px] rounded-lg '>
              <img src={baberImg} alt='' className='w-full rounded-lg' />
            </figure>
            <div>
              <span
                className='bg-[#CCF0F3] text-textColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px]
        lg:leading-7 font-semibold rounded
        '>
                Professional
              </span>
              <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold '>
                Ryan Scott
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, possimus.
              </p>
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
            <button
              onClick={() => {
                setTab("reviews");
                console.log(tab);
              }}
              className={`
              ${tab === "reviews" && "border-b border-solid border-primaryColor"}
              py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
              Reviews
            </button>
          </div>
          <div className="mt-[50px] ">
                {
                  tab === 'about' && <BarbersAbout/>
                }
                {
                  tab === 'reviews' && <Feedback/>
                }
          </div>
        </div>
        <div className='md:col-span-1'></div>
      </div>
    </section>
  );
};

export default BarbersDetails;
