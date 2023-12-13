import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const token = getCookie('token');

export const makeBooking = async (values, callback) => {
    try {
      const response = await axios.post(
        buildApiEndpoint(`/Booking/create`),
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      callback();
      console.log('Response:', response.data);
      toast.success("New Booking Created");
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };

  export const fetchDataOne = async (shopId) => {
    console.log(shopId);
    try {
      const response = await axios.get(`https://unique-barbers.onrender.com/api/v1/shops/getOne/${shopId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };
  