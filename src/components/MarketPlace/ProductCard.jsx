import React from 'react'

const ProductCard = ({ imgURL, changeProductImage, productImg }) => {
  const handleClick = () => {
    if (productImg !== imgURL.product) {
      changeProductImage(imgURL.product);
    }
    console.log(imgURL.product);
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        productImg === imgURL.product ? "border-black" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}>
      <div
        data-aos='zoom-in'
        data-aos-duration='1500'
        data-aos-delay='800'
        className='flex justify-center items-center bg-transparent bg-center bg-cover overflow-hidden sm:w-20 sm:h-[100px] rounded-xl max-sm:p-4'>
        <img
          src={imgURL.product}
          alt=''
          width={127}
          height={120}
          className='object-contain'
        />
      </div>
    </div>
  );
}

export default ProductCard