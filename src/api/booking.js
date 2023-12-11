import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const token = getCookie('token');

export const makeBooking = async (values) => {
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

      console.log('Response:', response.data);
      toast.success("New Booking Created");
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };