import axios from "axios";
import { buildApiEndpoint, getCookie } from "./utils";

const token = getCookie("token");

export const getPosts = async () => {
  try {
    const response = await axios.get(buildApiEndpoint("/blogs/all"));
    return response.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
};

export const getUserDetails = async () => {
  try {
    const response = await axios.get(buildApiEndpoint("/users/one"), {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const userData = response.data;
    localStorage.setItem("userId", userData.user._id);
    //  setTimeout(callback, 3000);
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};

export const getUserContributions = async (setUser) => {
  let userId = localStorage.getItem("userId");
  try {
    const response = await axios.get(
      buildApiEndpoint(`campaign/contributions/${userId}`),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching user contributions:", error);
  }
};

export const getUserCampaigns = async (setCampaign, callback) => {
  let userId = localStorage.getItem("userId");
  console.log(userId);
  try {
    const response = await axios.get(
      buildApiEndpoint(`/campaign/user/${userId}`),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    setCampaign(response.data.data);
    callback();
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};

export const getallCampaignDetailsWithoutContributors = async (
  setDetails,
  callback
) => {
  try {
    const response = await axios.get(buildApiEndpoint(`/campaign/getall`), {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    setDetails(response.data.data);
    callback();
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};
