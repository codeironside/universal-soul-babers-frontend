import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"

const token = getCookie('token');
const userId = JSON.parse(getCookie('user'))

export const createSubscription = async (amount, type, callback) => {
    try {
      const requestBody = {
        type: type,
        plan: 'monthly',
        amount: amount,
        billingAddress: "Any Country",
        paymentMethod: "stripe"
      };
  
      // Make the API request
      const response = await axios.post(
        buildApiEndpoint(`/subscription/register`), 
      requestBody, 
        {
            headers: {
              Authorization: `Bearer ${token}`, // Replace with your actual access token
            },
          },
      );
  
      // Handle the response
      callback();
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  export const updateSubscription = async () => {
    try {
      const requestBody = {
        type: "premium",
        plan: 'monthly',
        amount: 25,
        billingAddress: "Any Country",
        paymentMethod: "stripe"
      };
  
      // Make the API request
      const response = await axios.put(
        buildApiEndpoint(`/subscription/updateplan`), 
      requestBody, 
        {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Replace with your actual access token
            },
          },
      );
  
      // Handle the response
      callback();
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };