// import React, { useContext } from 'react'
// import { useParams } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import { ProductContext } from "../context/ProductContext";

// const ProductDetails = () => {
//   // get products from id 
//   const { id: itemId } = useParams()
//   const { productItem } = useContext(ProductContext)
//   const { addToCart } = useContext(CartContext)


//   // change the product id to number 
//   const itemIdNumber = parseInt(itemId, 10);
//   // get single product 
//   const product = productItem.find(item => {
//     if (item.id === itemIdNumber) {
//       return item
//     }
//   })

//   if (!product) {
//     return (
//       <section className='h-screen flex justify-center items-center' >
//         loading...
//       </section>
//     )
//   }

//   // console.log(productItem.find(item => console.log(item.id)));

//   // destructure products 
//   const { shop_name, price, description, images } = product
//   console.log(img);

//   return (
//     <section className='pt-32 lg:py-32 h-screen flex items-center ' >
//       <div className='container mx-auto'>
//         {/* images wrapper  */}
//         <div className='flex flex-col lg:flex-row items-center' >
//           {/* images  */}
//           <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0  ' >
//             <img className='max-w-[200px] lg:max-w-sm rounded-xl ' src={img} alt="" />
//           </div>
//           {/* text  */}
//           <div className='flex-1 text-center lg:text-left' >
//             <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto  lg:mx-0 ' >{title}</h1>
//             <div className='text-xl text-red-500 font-medium mb-6 ' >$ {price}</div>
//             <p className='mb-6' >{content}</p>
//             <button onClick={() => addToCart(product, product.id)} className='btn' >Add To Cart </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProductDetails


import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

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

  const { shop_name, price, description, images } = product;

  return (
    <section className='pt-32 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm rounded-xl' src={images} alt='' />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{shop_name}</h1>
            <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
            <p className='mb-6'>{description}</p>
            <button onClick={() => addToCart(product, product._id)} className='btn'>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
