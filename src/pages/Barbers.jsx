import { BarberCard, Testimonials } from "../components";
// import { barbers } from "../data";
import { scrollToTop } from '../ScollToTop.js';
import { BallTriangleAnim } from "./Home";
import { useState, useEffect } from "react";
import axios from "axios";
const Barbers = () => {
  const [barbersData, setBarbersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://unique-barbers.onrender.com/api/v1/shops/all");
        if (Array.isArray(response.data.data)) {
          const filteredBarbers = response.data.data.filter(item => item.category === 'barbers');
          console.log(filteredBarbers)
          setBarbersData(filteredBarbers);
        } else {
          console.error("Data received is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching barbers data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    scrollToTop();
  }, []);
  return (
    <>
      <section className='bg-[#fff9ea] '>
        <div className='container text-center relative '>
          <h2 className='heading'>Find A Barber</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto rounded-md flex items-center justify-between'>
            <input
              type='search'
              className='py-3 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer border-3 border-slate-400'
              placeholder='Search for A Barber'
            />
            <button className='btn mt-0 rounded-r-md rounded-[0px]  '>
              Search
            </button>
          </div>
        </div>
      </section>
      {/* Existing code ... */}
      <section>
        <div className='container'>
          {/* Display filtered barber data */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {barbersData.map((barber) => (
              <BarberCard key={barber._id} barber={barber} />
            ))}
          </div>

          {/* Loading spinner */}
          {loading && (
            <div className='flex justify-center mt-4'>
              <BallTriangleAnim />
            </div>
          )}
        </div>
      </section>
      <section>
        {/* Render Testimonials component here */}
        <Testimonials />
      </section>
    </>
  );
};

export default Barbers;
