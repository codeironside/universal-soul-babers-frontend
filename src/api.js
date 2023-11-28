import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get("https://unique-barbers.onrender.com/api/v1/blogs/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error)
  }
}


// export const getUser = 
