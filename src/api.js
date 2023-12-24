import axios from "axios";
import { buildApiEndpoint, getCookie } from "./utils"

const token = getCookie('token');
const userId = JSON.parse(getCookie('user'))

export const getPosts = async () => {
  try {
    const response = await axios.get(buildApiEndpoint("/blogs/all"));
    return response.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error)
  }
}

export const getUserDetails = async ()=>{

      try {
        const response = await axios.get(
          buildApiEndpoint('users/one'),
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

    export const getUserContributions = async (setContributions)=>{
      try {
        const response = await axios.get(
          buildApiEndpoint(`/campaign/contributions/${userId?._id}`),
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        
        setContributions(response.data.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching user contributions:', error);
      }
    };

    export const getUserCampaigns = async (setCampaign, callback)=>{
      console.log(userId?._id);
      try {
        const response = await axios.get(
          buildApiEndpoint(`/campaign/user/${userId?._id}`),
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setCampaign(response.data.data);
        callback();
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    export const getallCampaignDetailsWithoutContributors = async (setDetails, callback)=> {
      try {
        const response = await axios.get(
          buildApiEndpoint(`/campaign/getall`),
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

    // Function to contribute to crowdfunding
export const contributeToCrowdfunding = async (amount, crowdfundingId, callback) => {
  try {
    const response = await axios.put(
      buildApiEndpoint(`/campaign/contribute/${crowdfundingId}`), // Replace with your actual API endpoint
      { amount },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Replace with your actual access token
        },
      }
    );
    callback();
    console.log('Contribution successful:', response.data);
  } catch (error) {
    console.error('Error contributing to crowdfunding:', error.response.data);
  }
};
