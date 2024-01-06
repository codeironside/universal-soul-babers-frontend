
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
          console.log(filteredShops);
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
