import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"

const token = getCookie('token');

export const fetchUserDetails = async (setUser) => {
    try {
      const response = await axios.get(
        buildApiEndpoint(`/users/one`),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const userData = response.data;
      console.log(userData)
      setUser(userData.user);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
