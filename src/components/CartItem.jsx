import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove,IoMdAdd } from "react-icons/io";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  const { id, title, img, price, amount } = item;
  console.log();
  return (
    <div className='flex  gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 '>
      <div className='w-full min-h-[150px] flex items-center gap-x-4 '>
        {/* images */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px] rounded-lg' src={img} alt='' />
        </Link>
        <div className='w-full flex flex-col'>
          {/* title and remove icon  */}
          <div className='flex justify-between w-full items-center mb-2 '>
            <Link
              className='text-sm uppercase font-medium max-w-[240px] text-textColor hover:underline '
              to={`/product/${id}`}>
              {title}
            </Link>
            {/* remove icon  */}
            <div
              onClick={() => removeFromCart(id)}
              className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition-all ' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm  '>
            {/* qty  */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border px-2 text-textColor font-medium '>
              {/* minus  */}
              <div
                onClick={() => decreaseAmount(id)}
                className='flex-1 justify-center items-center cursor-pointer'>
                <IoMdRemove />
              </div>
              {/* amount  */}
              <div className='flex h-full justify-center items-center px-4 '>
                {amount}
              </div>
              {/* plus   */}
              <div
                onClick={() => increaseAmount(id)}
                className='flex-1 h-full flex justify-center items-center cursor-pointer px-2 '>
                <IoMdAdd />
              </div>
            </div>
            {/* Item price  */}
            <div className='flex-1 flex items-center justify-center'>
              $ {price}
            </div>
            {/* Item price  */}
            <div className='flex-1 flex justify-end items-center text-textColor font-medium'>
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
