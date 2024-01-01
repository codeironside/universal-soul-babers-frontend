import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import product1 from "../assets/img/product-1.JPG";

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
                 {images ? (
        <img
          className='w-full group-hover:scale-110 transition duration-300 '
          src={images}
          alt=''
        />
      ) : (
        <img
          className='w-full group-hover:scale-110 transition duration-300 '
          src={product1}
          alt={shop_name}
        />
      )}
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
