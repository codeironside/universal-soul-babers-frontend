import { useState, useContext, useEffect } from "react";
import { scrollToTop } from "../ScollToTop.js";
import { products, statistics } from "../data";
import { SectionHeader, Product } from "../components";
import { ProductCard } from "../components/MarketPlace";
import product1 from "../assets/img/product-1.JPG";
import CountUp from "react-countup";
import { ProductContext } from "../context/ProductContext";
import axios from 'axios';

const MarketPlace = () => {
 const { productItem, setProductItem } = useContext('');
  const [currentImg, setCurrentImg] = useState('');
  const apiUrl = 'http://localhost:5087/api/v1/shops/all'; // Replace with your API endpoint

// ... (other imports and code)

useEffect(() => {
  scrollToTop();
  // Fetch data using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        scrollToTop();
        const response = await axios.get(apiUrl);
        if (Array.isArray(response.data.shops)) {
          const filteredShops = response.data.shops.filter(shop => shop.category !== 'barbers');
          setProductItem(filteredShops);
        } else {
          console.error('Data structure is not as expected');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading state to false after fetching data (success or failure)
      }
    };

    fetchData();
  }, []);

  return (
    <main>
     {loading ? (
       
        <div>Loading...</div>
      ) : (
        // Render content once data has been fetched
      <section className='mx-auto  max-w-[1200px] mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-20 justify-center items-center '>
          <div className='col-span-1 w-full h-full '>
            {/* <p
              className='text-para text-textColor leading-7 font-thin'
              data-aos='fade-down'
              data-aos-duration='1200'>
              Our Store
            </p> */}
            <h1 className='mt-[20px] text-8xl max-sm:text-[50px] max-sm:leading-[72px] font-bold'>
              <span className='lg:bg-white w-auto bg-white shadow-xl lg:whitespace-nowrap relative lg:text-[88px] rounded-lg z-30 md:pr-[110px] lg:pr-[110px] lg:pl-[20px] pr-[19px]'>
                Marketplace
              </span>

              <span
                className=' inline-block mt-[-28px] text-4xl'
                data-aos='fade-up'
                data-aos-duration='1200'
                data-aos-delay='700'>
                Universoul Store
              </span>
            </h1>

            <p
              data-aos='fade-up'
              data-aos-duration='1500'
              data-aos-delay='900'
              className='font-montserrat text-slate-gray text-lg leading-8 my-8 sm:max-w-sm'>
              Get your equipment with ease. Super fast delivery and instant pay.
              get started now!!!
            </p>

            {/* counter  */}
            <div className='mt-[-10px] flex justify-center lg:justify-start md:justify-start lg:mt-[70px] lg:flex-row lg:items-center gap-5 lg:gap-[30px] '>
              {statistics.map((stats) => {
                const { value, label, suffix } = stats;
                return (
                  <div
                    key={value}
                    data-aos='fade-up'
                    data-aos-duration='1200'
                    data-aos-delay='800'>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[44px] font-[700] text-headingColor '>
                      <CountUp
                        start={0}
                        end={value}
                        suffix={suffix}
                        duration={5}
                      />
                    </h2>
                    <span className='h-2  w-[100px] bg-pink-700 rounded-full block mt-[-8px] '></span>
                    <p className='text-para'>{label}</p>
                  </div>
                );
              })}
            </div>

            {/* Button   */}
            {/* <div
              className='w-full flex items-center justify-center md:justify-start lg:justify-start '
              data-aos='zoom-in'
              data-aos-duration='1200'
              data-aos-delay='600'>
              <button className='btn'>Shop</button>
            </div> */}
          </div>
          <div
            data-aos='fade-right'
            data-aos-duration='1500'
            data-aos-delay='900'
            className='col-span-1  w-full h-[600px] my-[-70px] relative flex items-center justify-items-center '>
            <img src={product1} alt='' className='block rounded-lg ' />

          </div>
        </div>
      </section>

      {/* Product Lists  */}
      <section className='mx-auto my-10  max-w-[1200px] '>
        {/* section header  */}
        <SectionHeader title='Our Products' subTitle='Buy Now' />

        {/* Todo: Dynamic rendering of data from the mock you created in the context  */}

        <div className='grid  md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-[32px] max-w-sm mx-auto md:max-w-none lg:max-w-none md:mx-0 '>
          {productItem.map((item) => {
            console.log(item);
            return <Product key={item._id} product={item} />;
          })}
        </div>
      </section>
      )}
    </main>
  );
};

export default MarketPlace;
