import { useState } from 'react';
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { contributeToCrowdfunding } from '../api';
import { createSubscription } from '../api/subscription'
import { useNavigate } from 'react-router-dom';
import { makeBooking } from '../api/booking';
import { confirmDelivery } from '../api/cart'

export const PaymentButton = ({amount, page, itemId}) => {
   const [message, setMessage] = useState("");
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();
   const stripe = useStripe();
   const elements =useElements();



   const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }
  
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/thank-you`, // Corrected the backtick usage
      },
      redirect: "if_required",
    });
  
    console.log(paymentIntent.status)
    if(paymentIntent?.status === "succeeded"){
    setMessage(paymentIntent?.status)
    if(page === "contribution"){
      contributeToCrowdfunding(amount, itemId, (()=> {
        navigate('/contribution-thank-you');
      }));
    } else if(page === "subscription"){
      createSubscription(amount, itemId, (()=> {
        navigate('/subscription-thank-you');
      }))
    } else if(page === "cart"){
       confirmDelivery(itemId);
    }
    else{
      const values = localStorage.getItem("booking");
       makeBooking(values, (()=> {
        navigate('/booking-thank-you');
  }));
    }
  
  } else if (error) {
    setMessage(error.message);
  }
}

  return (
    <>
   <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="card" className="block text-sm font-medium text-gray-700">
            Card Details
          </label>
          <div className="mt-1">
            <PaymentElement className="p-2 border border-gray-300 rounded" />
          </div>
        </div>

        <button
  type="submit"
  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
  disabled={processing} // Add the disabled attribute
>
  {processing === true ? <span>Processing</span> : <span>Submit</span>}
</button>

        <div>
          {
            message !== "" &&
            <p className='text-center'>Your Payment was successful</p>
          }
        </div>
      </form>
    </div>
    </>
  )
};