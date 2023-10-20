import React, {createContext, useState, useEffect} from 'react'
import productImg from '../assets/img/product-2.jpg'


//Create Context 
export const ProductContext = createContext()

const ProductProvider = ({children}) => {

    // Product state 

    const [productItem, setProductItem] = useState([])


    // Todo: Create a mock data to populate the page
    const data =[
        {id: 1, categories: 'clipper', price: 90, title:'Unique After Shave', content:'lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all ', description:'Barber Instrument - Premium', img: productImg },
        {id: 2, categories: 'clipper', price: 90, title:'Unique After Shave', content:'lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all ', description:'Barber Instrument - Premium', img: productImg },
        {id: 3, categories: 'clipper', price: 90, title:'Unique After Shave', content:'lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all ', description:'Barber Instrument - Premium', img: productImg },
        {id: 4, categories: 'clipper', price: 90, title:'Unique After Shave', content:'lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all ', description:'Barber Instrument - Premium', img: productImg },
        {id: 5, categories: 'clipper', price: 90, title:'Unique After Shave', content:'lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all ', description:'Barber Instrument - Premium', img: productImg },
        {id: 6, categories: 'clipper', price: 90, title:'Unique After Shave', content:'lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all ', description:'Barber Instrument - Premium', img: productImg },
        {id: 7, categories: 'clipper', price: 90, title:'Unique After Shave', content:'lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all ', description:'Barber Instrument - Premium', img: productImg },
        {id: 8, categories: 'clipper', price: 90, title:'Unique After Shave', content:'lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all ', description:'Barber Instrument - Premium', img: productImg },
        {id: 9, categories: 'clipper', price: 90, title:'Unique After Shave', content:'lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all ', description:'Barber Instrument - Premium', img: productImg },
        {id: 10, categories: 'clipper', price: 90, title:'Unique After Shave', content:'lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all lorem ipsum and description about the product is then displaed hee for unique products, real data comes from the database and all ', description:'Barber Instrument - Premium', img: productImg },
        
    ]

    // fetch Products 
    useEffect(() => {
    //   const fetchProducts = async ()=> {
    //     const response = await fetch('backend resources');
    //     const data = await response.json()
    //   }
    //    fetchProducts()
    setProductItem(data)
    }, [])
    



  return (
    <ProductContext.Provider value={{productItem}} >
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider