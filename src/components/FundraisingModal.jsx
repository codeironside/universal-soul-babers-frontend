import React, { useState } from 'react';
import axios from 'axios';
import { buildApiEndpoint, getCookie } from "../utils"

const FundraisingModal = ({ setModalDisplay }) => {
  const [campaignName, setCampaignName] = useState("");
  const [goalAmount, setGoalAmount] = useState();
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const token = getCookie('token');

  const handleSubmit = async () => {

    const values = JSON.stringify({
      campaignName: campaignName,
      goalAmount: goalAmount,
      description: description,
      startDate: startDate,
      endDate: endDate,
    });

    try {
      const response = await axios.post(
        'https://unique-barbers.onrender.com/api/v1/Campaign/create',
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
              value={campaignName}
              onChange={(e)=> setCampaignName(e.target.value)}
              placeholder="Campaign Name"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-3 rounded-xl"
            />

              <input
             type="number"
             name="goalAmount"
              value={goalAmount}
             onChange={(e)=> setGoalAmount(e.target.value)}
              placeholder="Goal Amount"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-3 rounded-xl"
            />

           <input
             type="text"
             name="description"
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
              placeholder="Description"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-3 rounded-xl"
            />

            <input
              type="date"
              name="startDate"
              value={startDate}
               onChange={(e)=> setStartDate(e.target.value)}
              placeholder="Start Date"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-6 rounded-xl"
            />

             <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={(e)=> setEndDate(e.target.value)}
              placeholder="End Date"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-6 rounded-xl"
            />


            <button
              onClick={()=> handleSubmit()}
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