import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils"

const token = getCookie('token');

export const addProduct = async (values) => {
    try {
      const response = await axios.post(
        buildApiEndpoint(`shop/register`),
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

  // export const fetchShops = async (setShopData, page, totalPages) => {
  //   try {
  //     const response = await axios.get(
  //       buildApiEndpoint('/shops/getallone'), {
  //         params: {
  //           page: page,
  //           pageSize: totalPages, // Set your pageSize value here
  //         },
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  
  //     const userData = response.data.data;
  //     console.log(userData);
  //     setShopData(userData);
  //   } catch (error) {
  //     console.error('Error fetching shop details:', error);
  //   }
  // };

export const fetchShops = async (setShopData, page, totalPages) => {
  try {
    const response = await axios.get(
      buildApiEndpoint(`/shops/getallone?page=${page}&pageSize=${totalPages}`),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const userData = response.data.data;
    console.log(userData);
    setShopData(userData);
  } catch (error) {
    console.error('Error fetching shop details:', error);
  }
};

  
