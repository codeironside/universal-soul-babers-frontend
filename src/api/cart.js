import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const token = getCookie('token');
export const confirmDelivery = async (cartId) => {
  try {
    const response = await axios.put(
      buildApiEndpoint(`/cart/payment/${cartId}`),
      // You can include data to send to the server in the request body if needed
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(response);
  } catch (error) {
    // Handle errors here
    console.error('Error confirming delivery:', error);
  }
};