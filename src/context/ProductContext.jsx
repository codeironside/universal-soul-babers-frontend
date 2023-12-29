import React, { createContext, useState, useEffect } from 'react'
import productImg from '../assets/img/product-2.jpg'
import axios from "axios";


//Create Context 
export const ProductContext = createContext()

const ProductProvider = ({ children }) => {

  // Product state 

  const [productItem, setProductItem] = useState([])


 


  // fetch Products 
  useEffect(() => {
    const fetchData = async () => {
      //  setLoading(true);
      try {
        const response = await axios.get(
          "https://unique-barbers.onrender.com/api/v1/shops/all"
        );
        if (Array.isArray(response.data.data)) {
          const filteredProducts = response.data.data.filter(
            (item) => item.category != "barbers"
          );
         
          
          setProductItem(filteredProducts);
        } else {
          console.error("Data received is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching barbers data:", error);
      } finally {
        //  setLoading(false);
      }
    };

    fetchData();
   
  }, [])




  return (
    <ProductContext.Provider value={{ productItem }} >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider