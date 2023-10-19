import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const CartItem = ({ item }) => {
  const { id, title, img, price, amount } = item;
  return (
    <div  className='flex' >
      <div className='w-full min-h-[150px] flex items-center gap-x-4 ' >
        {/* images */}
        <Link to={`/product/${id}`} >
          <img className='max-w-[80px]' src={img} alt='' />
        </Link>
      </div>
      <div className='w-full flex flex-col' >
        {/* title and remove icon  */}
        <div className='flex justify-between w-full items-center mb-2 ' >
          <Link className='text-sm uppercase font-medium max-w-[240px] text-textColor hover:underline ' to={`/product/${id}`} >{title}
          </Link>
          {/* remove icon  */}
          <div className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition-all ' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
