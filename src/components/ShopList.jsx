import React from 'react'
import ShopCard from './ShopCard'

const ShopList = ({selectedShop}) => {
   return (
     <>
       <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[20px] lg:mt-[55px]'>
         {selectedShop?.map((shop) => {
           return <ShopCard key={shop._id} shop={shop} />;
         })}
       </div>
     </>
   );
}

export default ShopList