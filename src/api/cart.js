
import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const confirmDelivery = async (cartId) => {
    try {
      const response = await axios.put(buildApiEndpoint(`/cart/${cartId}`), {
        // You can include data to send to the server in the request body if needed
      });

      console.log(response.data);
    } catch (error) {
      // Handle errors here
      console.error('Error confirming delivery:', error.message);
    }
  };

