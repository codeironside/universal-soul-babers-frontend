import React, {createContext, useState, useEffect} from 'react'
import productImg from '../assets/img/product-2.jpg'


//Create Context 
export const ProductContext = createContext()

const ProductProvider = ({children}) => {

    // Product state 

    const [productItem, setProductItem] = useState([])


    // Todo: Create a mock data to populate the page
    const data = [
        { id: 1, categories: 'clipper', price: 90, title: 'Unique After Shave', content: 'lorem ipsum and description about the product is then displayed here for unique products, real data comes from the database and all lorem ipsum and description about the product is then displayed here for unique products, real data comes from the database and all lorem ipsum and description about the product is then displayed here for unique products, real data comes from the database and all', description: 'Barber Instrument - Premium', img: 'productImg1' },
        { id: 2, categories: 'razor', price: 75, title: 'Classic Straight Razor', content: 'lorem ipsum and description about the product is then displayed here for classic razors, real data comes from the database and all lorem ipsum and description about the product is then displayed here for classic razors, real data comes from the database and all', description: 'Traditional Shaving Tool', img: 'productImg2' },
        { id: 3, categories: 'brush', price: 25, title: 'Luxury Shaving Brush', content: 'lorem ipsum and description about the product is then displayed here for luxury shaving brushes, real data comes from the database and all lorem ipsum and description about the product is then displayed here for luxury shaving brushes, real data comes from the database and all', description: 'High-Quality Bristles', img: 'productImg3' },
        { id: 4, categories: 'aftershave', price: 40, title: 'Soothing Aftershave Lotion', content: 'lorem ipsum and description about the product is then displayed here for soothing aftershave lotions, real data comes from the database and all lorem ipsum and description about the product is then displayed here for soothing aftershave lotions, real data comes from the database and all', description: 'Calms Irritated Skin', img: 'productImg4' },
        { id: 5, categories: 'clipper', price: 85, title: 'Premium Hair Clipper', content: 'lorem ipsum and description about the product is then displayed here for premium hair clippers, real data comes from the database and all lorem ipsum and description about the product is then displayed here for premium hair clippers, real data comes from the database and all', description: 'Professional Grade', img: 'productImg5' },
        { id: 6, categories: 'razor', price: 60, title: 'Safety Razor Set', content: 'lorem ipsum and description about the product is then displayed here for safety razor sets, real data comes from the database and all lorem ipsum and description about the product is then displayed here for safety razor sets, real data comes from the database and all', description: 'Complete Shaving Kit', img: 'productImg6' },
        { id: 7, categories: 'brush', price: 30, title: 'Synthetic Shaving Brush', content: 'lorem ipsum and description about the product is then displayed here for synthetic shaving brushes, real data comes from the database and all lorem ipsum and description about the product is then displayed here for synthetic shaving brushes, real data comes from the database and all', description: 'Cruelty-Free Bristles', img: 'productImg7' },
        { id: 8, categories: 'aftershave', price: 35, title: 'Refreshing Aftershave Splash', content: 'lorem ipsum and description about the product is then displayed here for refreshing aftershave splashes, real data comes from the database and all lorem ipsum and description about the product is then displayed here for refreshing aftershave splashes, real data comes from the database and all', description: 'Invigorates the Skin', img: 'productImg8' },
        { id: 9, categories: 'clipper', price: 95, title: 'Pro Series Hair Clipper', content: 'lorem ipsum and description about the product is then displayed here for pro series hair clippers, real data comes from the database and all lorem ipsum and description about the product is then displayed here for pro series hair clippers, real data comes from the database and all', description: 'Cutting-Edge Technology', img: 'productImg9' },
        { id: 10, categories: 'razor', price: 70, title: 'Vintage Straight Razor', content: 'lorem ipsum and description about the product is then displayed here for vintage straight razors, real data comes from the database and all lorem ipsum and description about the product is then displayed here for vintage straight razors, real data comes from the database and all', description: 'Timeless Design', img: 'productImg10' }
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