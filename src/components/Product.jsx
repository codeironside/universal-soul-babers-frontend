import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  // console.log(product);
  // destricture product
  const { id, categories, price, title, description, img } = product;
  return (
    <div>
      <div className='border border-black rounded-lg h-[300px] mb-4 overflow-hidden relative  group transition '>
        <div className=' w-full h-full flex justify-center items-center '>
          {/* image  */}
          <div className='w-[200px] mx-auto flex justify-center items-center '>
            <img
              className='max-h-[200px] group-hover:scale-110 transition duration-300 '
              src={img}
              alt=''
            />
          </div>
        </div>
        <div>
          {/* buttons  */}
          <div className='absolute top-2 -right-6 group-hover:right-5 bg-black rounded-lg p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
            <button>
              <div className='flex justify-center items-center text-white w-12 h-12 rounded-lg  '>
                <BsPlus className='text-3xl  ' />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className='w-12 h-12 bg-white rounded-lg flex items-center justify-center text-headingColor drop-shadow-xl '>
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/* Title and Description  */}
      <div>
        <p className=' capitalize text-textColor mb-1'>{description}</p>
      </div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <div className='font-semibold'>${price}</div>
    </div>
  );
};

export default Product;
