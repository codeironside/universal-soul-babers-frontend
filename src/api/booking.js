import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const token = getCookie('token');

export const makeBooking = async (values, shopId, callback) => {
    try {
      const response = await axios.post(
        buildApiEndpoint(`/booking/create/${shopId}`),
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      callback();
      console.log('Response:', response);
      toast.success("New Booking Created");
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };

  export const fetchDataOne = async (shopId) => {
    //console.log(shopId);
    try {
        //console.log(token)
      const response = await axios.get(`https://unique-barbers.onrender.com/api/v1/shops/getone/${shopId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    //console.log(response.data);
    return response
   
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };
  
