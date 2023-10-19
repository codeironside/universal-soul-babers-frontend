import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import  CartItem from "./CartItem";
import { SidebarContext } from "../context/SidebarContext";

// cart context 
import { CartContext } from "../context/CartContext";

const SideBar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  // const  useContext(CartContext)
  const {cart} = useContext(CartContext)
  return (
    <div className={`${
      isOpen ? 'right-0' : '-right-full'
    } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-40 px-4 lg:px-[35px] `} >
      <div className='flex items-center justify-between py-6 border-b' >
        <div className='uppercase text-sm font-semibold' >Shopping Cart (0)</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex items-center justify-center' >
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div>{
        cart.map((item) => {
          return <div key={item.id} >
            <CartItem item={item} key={item.id} />
          </div>
        })
        }</div>
    </div>
  )
}

export default SideBar