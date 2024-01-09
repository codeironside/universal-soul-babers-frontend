import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"
import img from '../assets/img/product-2.jpg'


const token = getCookie('token');
const userId = JSON.parse(getCookie('user'))

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart this.state.
  const [cart, setCart] = useState([]);
  //  amount state
  const [itemCount, setItemCount] = useState(0);

  // total price
  const [total, setTotal] = useState(0)


  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  },)


  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemCount(amount);
    }
  }, [cart]);

  const addToCart = async (product, amt, userCartId, token) => {
    try {
      const newItem = { ...product, amount: 1 };

      // Item check
      const cartItem = cart.find((item) => item._id === product._id);
  
      // Conditionals
      if (cartItem) {
        // If the item exists in the cart, update the quantity
        const newCart = cart.map((item) =>
          item._id === product._id
            ? { ...item, amount: amt ? amt : cartItem.amount + 1 }
            : item
        );

  
        // Use updateCart endpoint to update the quantity in the backend
        const response = await axios.post(
          buildApiEndpoint(`/updateCart/${userCartId}`), // Replace userCartId with the actual cart ID
          {
            items: [
              {
                shop_id: product._id,
                quantity: amt ? amt : cartItem.amount + 1,
                // Add other item properties as needed
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
  
        // Handle the response if needed
        console.log(response.data);
      } else {
  
        // Use addToCart endpoint to add the new item to the backend cart
        const response = await axios.post(
          buildApiEndpoint('cart/create'), // Replace with the actual endpoint for adding to the cart
          {
            items: [
              {
                shop_id: product._id,
                quantity: amt ? amt : 1,
                // Add other item properties as needed
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
  
        // Handle the response if needed
        console.log(response.data);
      }
    } catch (error) {
      // Handle errors
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item._id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item._id === id);
    console.log(cartItem, id);
    addToCart(cartItem, cartItem.amount + 1);
  };

  const decreaseAmount = (id) => {
    // console.log("decrease");
    const cartItem = cart.find((item) => item._id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item._id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemCount,
        total,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
