import React, {createContext, useState, useEffect} from 'react'


//Create Context 
export const ProductContext = createContext()

const ProductProvider = ({children}) => {

    // Product state 

    const [products, setProducts] = useState([])


    // Todo: Create a mock data to populate the page
    const data =[
        {id: 1, details: 'someting', price: 90, title:'Mock data' },
        {id: 2, details: 'someting', price: 90, title:'Mock data' },
        {id: 3, details: 'someting', price: 90, title:'Mock data' },
        {id: 4, details: 'someting', price: 90, title:'Mock data' },
        {id: 5, details: 'someting', price: 90, title:'Mock data' },
        {id: 6, details: 'someting', price: 90, title:'Mock data' },
    ]

    // fetch Products 
    useEffect(() => {
    //   const fetchProducts = async ()=> {
    //     const response = await fetch('backend resources');
    //     const data = await response.json()
    //   }
    //    fetchProducts()
    setProducts(data)
    }, [])
    



  return (
    <ProductContext.Provider value={{products}} >
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider