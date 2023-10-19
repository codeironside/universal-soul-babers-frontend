import React, {createContext, useEffect, useState} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  // cart this.state. 
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) =>{
    const newItem = {...product, amount: 1}
    //  item check 
    const cartItem = cart.find((item) =>{
      return item.id === id
    })
    // conditionals 
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
           return {...item, amount: cartItem.amount + 1  }
        }else{
          return item
        }
      })
      setCart(newCart)
    }else{
      setCart([...cart, newItem])
    }
  }

  console.log(cart);
  return (
    <CartContext.Provider  value={{cart, addToCart}} >{children}</CartContext.Provider>
  )
}

export default CartProvider