import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const AccountActivated = () => {
  const { width, height } = useWindowSize();
  return (
    <section
      aria-labelledby='summary-heading'
      className=' rounded-lg my-[30px] lg:w-1/2 md:w-1/2  w-[80%] h-full mx-auto bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-12 lg:p-8'>
      {/* <Confetti width="100%" height="100%" /> */}
      <h2
        id='summary-heading'
        className='text-[1.4rem] lg:text-[2.4rem] font-medium text-center text-gray-900'>
        Account Activated!
      </h2>

      <p className='font-medium text-green-600 text-center my-12'>
        Your account has been successfully activated.
      </p>

      <div className='mt-6'>
        <Link to='/'>
          <button
            type='submit'
            className='w-full rounded-md border border-transparent bg-primaryDark py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2 focus:ring-offset-gray-50'>
            Proceed To Login
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AccountActivated;
