import avatar from "../assets/img/avatar-icon.png";
import { MdVerified } from "react-icons/md";
import { useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState("profile");

  return (
    <section className='container mx-auto h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 '>
      <div className='col-span-1 flex items-center justify-center flex-col '>
        <div className='w-[150px] h-[150px] rounded-full mb-3  '>
          <img src={avatar} alt='' className='w-full block rounded-full' />
        </div>
        <div className='flex flex-col justify-center items-center flex-1'>
          <p className='text-textColor leading-5'>Ryan Scott</p>
          <div className='flex justify-center items-center gap-1'>
            <p>Profesional Barber</p>
            <MdVerified />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full mt-12'>
          <button className='bg-black rounded-lg p-3 text-white my-3 w-[90%]'>
            Edit Profile
          </button>
          <button className='bg-red-500 rounded-lg p-3 text-white my-0 w-[90%]'>
            Delete Account
          </button>
        </div>
      </div>

      {/* Profile Tab  */}
      <div className=' col-span-1 md:col-span-2 lg:col-span-2'>
        <div className=' border-b border-solid border-[#0066ff34]  '>
          <button
            onClick={() => {
              setTab("profile");
            }}
            className={` ${
              tab === "profile" && "border-b border-solid border-primaryColor"
            }  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
            My Profile
          </button>
          <button
            onClick={() => {
              setTab("bookings");
            }}
            className={`
              ${
                tab === "bookings" &&
                "border-b border-solid border-primaryColor"
              }
              py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
            Bookings
          </button>
          <button
            onClick={() => {
              setTab("shop");
            }}
            className={`
              ${tab === "shop" && "border-b border-solid border-primaryColor"}
              py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
            Shop(2)
          </button>
          <button
            onClick={() => {
              setTab("store");
            }}
            className={`
              ${tab === "store" && "border-b border-solid border-primaryColor"}
              py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
            My Store
          </button>
        </div>
        {/* Tab conditional rendering  */}
        <div className='mt-[50px] '>
          {tab === "profile" && <BarberProfile />}
          {tab === "bookings" && <BarberBookings />}
          {tab === "shop" && <BarberShop />}
          {tab === "store" && <BarberStore />}
        </div>
      </div>
    </section>
  );
};

export default Profile;
