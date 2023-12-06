import React, { useState } from 'react';
import axios from 'axios';
import { buildApiEndpoint, getCookie } from "../utils"

const FundraisingModal = ({ setModalDisplay }) => {
  const [formData, setFormData] = useState({
    campaignName: '',
    goalAmount: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const token = getCookie('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // Make the Axios request with the appropriate headers, including the cookie
      const response = await axios.post(
        'https://unique-barbers.onrender.com/api/v1/chats/getall',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userCookie}`, // Include the cookie in the Authorization header
          },
        }
      );

      // Handle the response as needed
      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };

  return (
     <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4">
        <div className="relative lg:w-4/12 w-11/12 my-6 mx-auto">
          <div
            style={{ overflowY: 'auto' }}
            className="border-0 h-96 py-6 md:px-20 px-10 rounded-lg shadow-lg relative flex flex-col bg-white w-full outline-none focus:outline-none"
          >
            {/*body*/}
            <h1
              className="text-center text-xl font-bold mb-4"
              style={{ color: "rgba(41, 44, 56, 1)" }}
            >
             Create A New Donation
            </h1>
          
            <input
             type="text"
             name="campaignName"
              value={formData.campaignName}
              onChange={handleChange}
              placeholder="Campaign Name"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-3 rounded-xl"
            />

              <input
             type="text"
             name="goalAmount"
              value={formData.goalAmount}
              onChange={handleChange}
              placeholder="Goal Amount"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-3 rounded-xl"
            />

           <input
             type="text"
             name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-3 rounded-xl"
            />

            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              placeholder="Start Date"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-3 rounded-xl"
            />

             <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              placeholder="End Date"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-3 rounded-xl"
            />


            <button
              type="button"
              className="w-full py-3 rounded-xl text-white mb-4"
              style={{ backgroundColor: "#977d46" }}
            >
              Save
            </button>
            <button
              onClick={() => setModalDisplay(false)}
              className="w-full py-3 rounded-xl text-white"
              style={{
                backgroundColor: "rgba(242, 242, 242, 1)",
                color: "rgba(79, 79, 79, 1)",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
   </>
  )
}

export default FundraisingModal