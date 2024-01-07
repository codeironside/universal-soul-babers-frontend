import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const token = getCookie('token');

export const addBlogPost = async (values, callback) => {
    try {
      const response = await axios.post(
        buildApiEndpoint(`/blogs/create`),
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
      toast.success("New Blog Added");
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };

 export const getBlog = async (blogId, setBlogContent) => {
    try {
      // Replace 'your_api_endpoint' with the actual endpoint
      const response = await axios.get(       
         buildApiEndpoint(`/blogs/getone/${blogId}`),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
  
      console.log('Response:', response.data.dict);
      setBlogContent(response.data.dict);
      } catch(error){
        console.log(error)
      }
    }
