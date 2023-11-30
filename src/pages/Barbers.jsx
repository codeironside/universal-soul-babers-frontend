import { BarberCard, Testimonials } from "../components";
// import { barbers } from "../data";
import { BallTriangle } from "react-loader-spinner";
import React,{ useState, useEffect } from "react";
import axios from "axios";
const Barbers = () => {
  const [barbersData, setBarbersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://unique-barbers.onrender.com/api/v1/users/all");
        if (Array.isArray(response.data)) {
          const filteredBarbers = response.data.filter(item => item.category === 'barbers');
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
  }, []);
  return (
    <>
      {/* Existing code ... */}
      <section>
        <div className='container'>
          {/* Display filtered barber data */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[0px] lg:mt-[-38px]'>
            {barbersData.map((barber) => (
              <BarberCard key={barber._id} barber={barber} />
            ))}
          </div>

          {/* Loading spinner */}
          {loading && (
            <div className='flex justify-center mt-4'>
              <BallTriangle
                height={40}
                width={40}
                color='#000'
                visible={true}
              />
            </div>
          )}
        </div>
      </section>
      <section>
        {/* Render Testimonials component here */}
      </section>
    </>
  );
};

export default Barbers;
