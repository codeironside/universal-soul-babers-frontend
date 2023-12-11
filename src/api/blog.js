import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const token = getCookie('token');

export const addBlogPost = async (values) => {
    try {
      const response = await axios.post(
        buildApiEndpoint(`/Blog/create`),
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response:', response.data);
      toast.success("New Blog Added");
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };