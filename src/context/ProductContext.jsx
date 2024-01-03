// import React, { createContext, useState, useEffect } from 'react'
// import productImg from '../assets/img/product-2.jpg'


// //Create Context 
// export const ProductContext = createContext()

// const ProductProvider = ({ children }) => {

//   // Product state 

//   const [productItem, setProductItem] = useState([])


//   // Todo: Create a mock data to populate the page
//   const data = [
//     { id: 1, category: 'clipper', price: 90, name: 'Unique After Shave', content: 'lorem ipsum and description about the product is then displayed here for unique products, real data comes from the database and all lorem ipsum and description about the product is then displayed here for unique products, real data comes from the database and all lorem ipsum and description about the product is then displayed here for unique products, real data comes from the database and all', img: productImg },
//     { id: 2, category: 'razor', price: 75, name: 'Classic Straight Razor', content: 'lorem ipsum and description about the product is then displayed here for classic razors, real data comes from the database and all lorem ipsum and description about the product is then displayed here for classic razors, real data comes from the database and all', img: productImg },
//     { id: 3, category: 'brush', price: 25, name: 'Luxury Shaving Brush', content: 'lorem ipsum and description about the product is then displayed here for luxury shaving brushes, real data comes from the database and all lorem ipsum and description about the product is then displayed here for luxury shaving brushes, real data comes from the database and all', img: productImg },
//     { id: 4, category: 'aftershave', price: 40, name: 'Soothing Aftershave Lotion', content: 'lorem ipsum and description about the product is then displayed here for soothing aftershave lotions, real data comes from the database and all lorem ipsum and description about the product is then displayed here for soothing aftershave lotions, real data comes from the database and all', img: productImg },
//     { id: 5, category: 'clipper', price: 85, name: 'Premium Hair Clipper', content: 'lorem ipsum and description about the product is then displayed here for premium hair clippers, real data comes from the database and all lorem ipsum and description about the product is then displayed here for premium hair clippers, real data comes from the database and all', img: productImg },
//     { id: 6, category: 'razor', price: 60, name: 'Safety Razor Set', content: 'lorem ipsum and description about the product is then displayed here for safety razor sets, real data comes from the database and all lorem ipsum and description about the product is then displayed here for safety razor sets, real data comes from the database and all', img: productImg },
//     { id: 7, category: 'brush', price: 30, name: 'Synthetic Shaving Brush', content: 'lorem ipsum and description about the product is then displayed here for synthetic shaving brushes, real data comes from the database and all lorem ipsum and description about the product is then displayed here for synthetic shaving brushes, real data comes from the database and all', img: productImg },
//     { id: 8, category: 'aftershave', price: 35, name: 'Refreshing Aftershave Splash', content: 'lorem ipsum and description about the product is then displayed here for refreshing aftershave splashes, real data comes from the database and all lorem ipsum and description about the product is then displayed here for refreshing aftershave splashes, real data comes from the database and all', img: productImg },
//     { id: 9, category: 'clipper', price: 95, name: 'Pro Series Hair Clipper', content: 'lorem ipsum and description about the product is then displayed here for pro series hair clippers, real data comes from the database and all lorem ipsum and description about the product is then displayed here for pro series hair clippers, real data comes from the database and all', img: productImg },
//     { id: 10, category: 'razor', price: 70, name: 'Vintage Straight Razor', content: 'lorem ipsum and description about the product is then displayed here for vintage straight razors, real data comes from the database and all lorem ipsum and description about the product is then displayed here for vintage straight razors, real data comes from the database and all', img: productImg }
//   ]


//   // fetch Products 
//   useEffect(() => {
//     //   const fetchProducts = async ()=> {
//     //     const response = await fetch('backend resources');
//     //     const data = await response.json()
//     //   }
//     //    fetchProducts()
//     setProductItem(data)
//   }, [])




//   return (
//     <ProductContext.Provider value={{ productItem }} >
//       {children}
//     </ProductContext.Provider>
//   )
// }

// export default ProductProvider

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productItem, setProductItem] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://unique-barbers.onrender.com/api/v1/shops/all'; // Replace with your API endpoint

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (Array.isArray(response.data.shops)) {
          const filteredShops = response.data.shops.filter(shop => shop.category !== 'barbers');
          setProductItem(filteredShops);
        } else {
          console.error('Data structure is not as expected');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ productItem }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
