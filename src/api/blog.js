import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"

const token = getCookie('token');

export const addBlogPost = async (values) => {
    try {
      const response = await axios.post(
        buildApiEndpoint(`/Blogs/create`),
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };