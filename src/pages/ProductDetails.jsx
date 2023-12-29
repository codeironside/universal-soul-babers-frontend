import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import productImg from "../assets/img/product-2.jpg";


const ProductDetails = () => {

useEffect(() => {
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })}
  
scrollToTop();
 
}, [])


  // get products from id 

  const { id: itemId } = useParams()
  const { productItem } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  // get single product 
  const product = productItem.find(item => {
    
    if (item._id === itemId) {
      return item
    }
  })
  // console.log(product);

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center' >
        loading...
      </section>
    )
  }


  // destructure products 
  const { keywords, price, description} = product
  

  return (
    <section className='pt-32 lg:py-32 h-screen flex items-center ' >
      <div className='container mx-auto'>
        {/* images wrapper  */}
        <div className='flex flex-col lg:flex-row items-center' >
          {/* images  */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0  ' >
            <img className='max-w-[200px] lg:max-w-sm rounded-xl ' src={productImg} alt="" />
          </div>
          {/* text  */}
          <div className='flex-1 text-center lg:text-left' >
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto  lg:mx-0 ' >{keywords}</h1>
            <div className='text-xl text-red-500 font-medium mb-6 ' >$ {price}</div>
            <p className='mb-6' >{description}</p>
            <button onClick={() => addToCart(product, product.id)} className='btn' >Add To Cart </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails