
import { useState, useContext } from "react";

import { products, statistics } from "../data";
import {SectionHeader, Product} from '../components'
import {  ProductCard } from "../components/MarketPlace";
import product1 from "../assets/img/product-1.JPG";
import CountUp from "react-countup";
import {ProductContext} from '../context/ProductContext'

const MarketPlace = () => {
  // get all products from the product context 
  const {productItem} = useContext(ProductContext)
  
  const [currentImg, setCurrentImg] = useState(product1);

  return (
    <main>
      <section className='mx-auto  max-w-[1200px] mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-20 justify-center items-center '>
          <div className='col-span-1 w-full h-full '>
            <p className='text-para text-textColor leading-7 font-thin'>
              Our Store
            </p>
            <h1 className='mt-[20px] text-8xl max-sm:text-[62px] max-sm:leading-[72px] font-bold'>
              <span className='xl:bg-white xl:whitespace-nowrap relative lg:text-[88px] rounded-lg z-10 pr-[110px]'>
                Marketplace
              </span>

              <span className=' inline-block mt-[-28px] text-5xl'>
                Universoul Store
              </span>
            </h1>

            <p className='font-montserrat text-slate-gray text-lg leading-8 mt-4 sm:max-w-sm'>
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
                    data-aos-delay='700'>
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
            <div
              className='w-full flex items-center justify-center md:justify-start lg:justify-start '
              data-aos='zoom-in'
              data-aos-duration='1200'
              data-aos-delay='600'>
              <button className='btn'>Shop</button>
            </div>
          </div>
          <div className='col-span-1  w-full h-[600px] my-[-70px] relative flex items-center justify-items-center '>
            <img src={product1} alt='' className='block rounded-lg ' />

            <div className='flex sm:gap-6 gap-4 absolute -bottom-[7%] sm:left-[10%] max-sm:px-6'>
              {products.map((image, index) => (
                <div key={index}>
                  {/* <div
                  className={`border-2 rounded-xl border-black
                       cursor-pointer max-sm:flex-1`}
                  onClick={()=>{}}>
                  <div className='flex justify-center items-center overflow-hidden bg-transparent bg-center bg-cover sm:w-[85px] sm:h-[85px] rounded-xl max-sm:p-4'>
                    <img src={image.product} alt="" className='w-full h-[100px] object-cover'/>
                  </div>
                </div> */}
                  <ProductCard
                    imgURL={image}
                    changeProductImage={(img) => {
                      setCurrentImg(img);
                      console.log(img);
                    }}
                    productImg={currentImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  {/* Product Lists  */}
  <section className="mx-auto my-10  max-w-[1200px] ">
   {/* section header  */}
   <SectionHeader title='Our Products' subTitle='Buy Now' />

    {/* Todo: Dynamic rendering of data from the mock you created in the context  */}

    <div  className='grid  md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-[32px] max-w-sm mx-auto md:max-w-none lg:max-w-none md:mx-0 ' >
      {
        productItem.map((item)=> {
          // console.log(item);
          
          return (
           <Product key={item.id} product={item}  />
          )
        })
      }
    </div>


  </section>

    </main>
  );
};

export default MarketPlace;
