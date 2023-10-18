import React from 'react'

const ProductCard = ({ imgURL, changeProductImage, productImg }) => {
  const handleClick = () => {
    if (productImg !== imgURL.product) {
      changeProductImage(imgURL.product);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        productImg === imgURL.product
          ? "border-black"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-transparent bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        
      </div>
    </div>


  )
}

export default ProductCard