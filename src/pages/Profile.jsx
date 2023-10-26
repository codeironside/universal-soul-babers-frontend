import avatar from '../assets/img/avatar-icon.png'
import { MdVerified } from "react-icons/md";
import { useState } from "react";

const Profile = () => {
    const [tab, setTab] = useState('Bookings')


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
       <div className="col-span-2">

      <div className=' border-b border-solid border-[#0066ff34]  '>
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
              ${
                tab === "reviews" && "border-b border-solid border-primaryColor"
              }
              py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
          Reviews
        </button>
      </div>
       </div>

    </section>
  );
}

export default Profile