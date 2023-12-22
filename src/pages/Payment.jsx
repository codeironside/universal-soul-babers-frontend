import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { buildApiEndpoint, getCookie } from "../utils"
import { PaymentButton } from '../components';
import { useParams } from 'react-router-dom';


const token = getCookie('token');
const stripePromise = loadStripe('pk_test_51NoiuxA0Wdj6YMZbxZ2YpHpr4GoYnqHrZSm1MURYmtu2Tdl2odtp4kPNdIDfyt7maFJwMYPAFJhqhUrFdhxnfkTG00i36KyXhA');

const Payment = () => {
   const [clientSecret, setClientSecret] = useState("");
   const params = useParams(); 
  const page = params.page;
   const amount = params.amount;
   const itemId = params.itemId;

    const amountValue = parseInt(amount, 10);

   const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.post( buildApiEndpoint(`/stripe/payment-intent`),
        
        {
          amount: amountValue, // Replace with the desired amount
          currency: 'usd', // Replace with the desired currency
          // Add other required fields if necessary
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
        )

        // Access the response data
        setClientSecret(data.clientSecret)
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
  {
    stripePromise && clientSecret && (
      <Elements stripe={stripePromise} options={options}>
      <PaymentButton amount={amountValue} page={page} itemId={itemId} />
      </Elements>
    )
  }
  </>
  )
}

export default Payment;