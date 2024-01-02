import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import img from '../assets/img/product-2.jpg'



const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  // console.log(product);
  // destricture product
  const { _id, price, shop_name, images, category } = product;
  return (
    <div>
      <div className='rounded-lg h-fit mb-4 overflow-hidden relative group transition shadow-card'>
        <div className='flex justify-center items-center '>
          {/* image  */}

          <img
            className='w-full group-hover:scale-110 transition duration-300 '
            src={images || img}
            alt=''
          />
        </div>
        <div>
          {/* buttons  */}
          <div className='absolute top-2 -right-6 group-hover:right-5 bg-black rounded-lg p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
            <button onClick={() => addToCart(product)} >
              <div className='flex justify-center items-center text-white w-12 h-12 rounded-lg  '>
                <BsPlus className='text-3xl  ' />
              </div>
            </button>
            <Link
              to={`/product/${_id}`}
              className='w-12 h-12 bg-white rounded-lg flex items-center justify-center text-headingColor drop-shadow-xl '>
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/* name and Description  */}
      <Link to='#' className="text-primaryDark text-sm font-medium">{category}</Link>
      <Link to={`/product/${_id}`} className="flex justify-between">
        <h2 className='font-semibold mb-1'>{shop_name}</h2>
        <div className='font-semibold'>${price}</div>
      </Link>
    </div>
  );
};

export default Product;
