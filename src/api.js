import axios from "axios";
import { buildApiEndpoint, getCookie } from "./utils"

const token = getCookie('token');

export const getPosts = async () => {
  try {
    const response = await axios.get("https://unique-barbers.onrender.com/api/v1/blogs/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error)
  }
}

export const getUserDetails = async ()=>{

      try {
        const response = await axios.get(
          'https://unique-barbers.onrender.com/api/v1/users/one',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const userData = response.data;
        localStorage.setItem('userId', userData.user._id);
      //  setTimeout(callback, 3000);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    export const getUserContributions = async (setUser)=>{
      let userId = localStorage.getItem('userId');
      console.log(userId);
      try {
        const response = await axios.get(
          `https://unique-barbers.onrender.com/api/v1/campaign/contributions/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response)
      } catch (error) {
        console.error('Error fetching user contributions:', error);
      }
    };

    export const getUserCampaigns = async (setCampaign, callback)=>{
      let userId = localStorage.getItem('userId');
      console.log(userId);
      try {
        const response = await axios.get(
          `https://unique-barbers.onrender.com/api/v1/campaign/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response)
        setCampaign(response.data.data);
        callback();
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    export const getallCampaignDetailsWithoutContributors = async (setDetails, callback)=> {
      try {
        const response = await axios.get(
          `https://unique-barbers.onrender.com/api/v1/campaign/getall`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response)
        setDetails(response.data.data)
        callback();
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
