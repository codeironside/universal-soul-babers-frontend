import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { buildApiEndpoint, getCookie } from "../utils"
import { PaymentButton } from '../components';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";



const token = getCookie('token');
const userId = JSON.parse(getCookie('user'))
const stripePromise = loadStripe('pk_test_51NoiuxA0Wdj6YMZbxZ2YpHpr4GoYnqHrZSm1MURYmtu2Tdl2odtp4kPNdIDfyt7maFJwMYPAFJhqhUrFdhxnfkTG00i36KyXhA');

const Payment = () => {
   const [clientSecret, setClientSecret] = useState("");
   const params = useParams(); 
  const page = params.page;
   const amount = params.amount;
   const itemId = params.itemId;

    const amountValue = parseInt(amount, 10);
    const dollarAmount = amountValue * 100;

   const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };


  useEffect(() => {
    // window.location.reload()
    if (page === "subscription" && (userId?.type === "premium" || userId?.type === "diamond")) {
      toast.error("You are already subscribed to a plan");
    }
    
    const fetchData = async () => {
      try {
        const { data } = await axios.post(
          buildApiEndpoint(`/stripe/payment-intent`),
          {
            amount: dollarAmount, // Replace with the desired amount
            currency: 'usd', // Replace with the desired currency
            // Add other required fields if necessary
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
    
        // Access the response data
        setClientSecret(data.clientSecret);
        console.log(data);
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    };
    

    fetchData();
  }, []);

  return (
  <>
     <ToastContainer position='top-center' />
  {
    stripePromise && clientSecret && (
      <Elements stripe={stripePromise} options={options}>
      <PaymentButton amount={dollarAmount} page={page} itemId={itemId} />
      </Elements>
    )
  }
  </>
  )
}

export default Payment;