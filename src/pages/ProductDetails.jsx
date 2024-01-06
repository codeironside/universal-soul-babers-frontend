import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import img from '../assets/img/product-2.jpg'

const ProductDetails = () => {
  const { id: itemId } = useParams();
  const { productItem } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productItem.find(item => item._id === itemId);
    setProduct(foundProduct);
  }, [itemId, productItem]);

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }

  // console.log(productItem.find(item => console.log(item.id)));

  // destructure jproducts 
  const { description, shop_name,  price,  images } = product
 

  return (
    <section className='pt-32 lg:py-32 h-screen flex items-center '>
      <div className='container mx-auto'>
        {/* images wrapper  */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* images  */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0  '>
            <img
              className='max-w-[200px] lg:max-w-sm rounded-xl '
              src={images || img}
              alt=''
            />
          </div>
          {/* text  */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto  lg:mx-0 '>
              {shop_name}
            </h1>
            <div className='text-xl text-red-500 font-medium mb-6 '>
              $ {price}
            </div>
            <p className='mb-6'>{description}</p>
              <button
               
                className='btn'>
              Add To Cart
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
