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

  const addToCart = async (product) => {
    try {
        const response = await axios.post(
          buildApiEndpoint('/cart/create'),
          {
            items: [
              {
                quantity: 1,
                shop_id: product._id,
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

        setTimeout(() => {
          window.location.reload();
        }, 1000);

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
