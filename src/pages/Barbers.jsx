import { BarberCard, Testimonials } from "../components";
// import { barbers } from "../data";
import { scrollToTop } from '../ScollToTop.js';
import { BallTriangleAnim } from "./Home";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImSpinner8 } from "react-icons/im";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Barbers = () => {
  const [barbersData, setBarbersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [shopResults, setShopResults] = useState([]);

  const handleSearch = async () => {
    if(query === ""){
      return ;
    } else {
      setSearchLoading(true);
      try {
        const response = await axios.get('https://unique-barbers.onrender.com/api/v1/shops/search', {
          params: { query },
        });
        
        let newData = response.data.data;
        setSearchLoading(false);
        setShopResults(newData);
         
        if(newData.length === 0){
          toast.error("Keyword not found");
        }
      } catch (error) {
        console.error('Error fetching shop results:', error);
      }
    }
  };

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
              onChange={(e)=> setQuery(e.target.value)}
              type='search'
              className='py-3 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer border-3 border-slate-400'
              placeholder='Search for A Barber'
            />
            <button onClick={handleSearch} className='btn mt-0 rounded-r-md rounded-[0px]  '>
              {
                searchLoading === true?
                <ImSpinner8 />:
                <span>Search</span>
              }
             
            </button>
          </div>
        </div>
      </section>
      {/* Existing code ... */}
      <section>
        <div className='container'>
          {/* Display filtered barber data */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
  shopResults.length !== 0 ?
    shopResults.map((barber) => (
      <BarberCard key={barber._id} barber={barber} />
    )) 
  :
    (barbersData?.map((barber) => (
      <BarberCard key={barber._id} barber={barber} />
    )))
}

          
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
      <ToastContainer position="top-center" />
    </>
  );
};

export default Barbers;
