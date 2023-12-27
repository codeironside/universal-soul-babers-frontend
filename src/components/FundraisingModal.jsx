import React, { useState } from 'react';
import axios from 'axios';
import { buildApiEndpoint, getCookie } from "../utils"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FundraisingModal = ({ setModalDisplay }) => {
  const [campaignName, setCampaignName] = useState("");
  const [goalAmount, setGoalAmount] = useState();
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [inputType, setInputType] = useState('text');
  
  const token = getCookie('token');

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);

    // Add validation to ensure end date is not earlier than start date
    if (endDate && new Date(endDate) < new Date(newStartDate)) {
      setEndDate('');
    }
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);

    // Add validation to ensure end date is not earlier than start date
    if (new Date(newEndDate) < new Date(startDate)) {
      // You can handle the validation error here (e.g., display a message)
      // For simplicity, this example just clears the end date
      setEndDate('');
    }
  };


  const handleFocus = () => {
    setInputType('date');
  };

  const handleBlur = () => {
    setInputType('text');
  };
  const handleSubmit = async () => {

    if (!campaignName || !goalAmount || !description || !startDate || !endDate) {
      toast.error("Please fill in all the required fields");
      return;
    }
  

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
      toast.success("New Campaign Created");
      setModalDisplay(false)
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
      toast.error("Error");
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
             required
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
             required
              value={goalAmount}
             onChange={(e)=> setGoalAmount(e.target.value)}
              placeholder="Goal Amount"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-3 rounded-xl"
            />

           <input
             type="text"
             name="description"
             required
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
              placeholder="Description"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-3 rounded-xl"
            />

            <input
            required
              type={inputType}
              name="startDate"
              value={startDate}
              onFocus={handleFocus}
              onBlur={handleBlur}
               onChange={handleStartDateChange}
              placeholder="Start Date"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              className="w-full mb-4 py-4 rounded-xl"
            />

             <input
              type={inputType}
              required
              name="endDate"
              value={endDate}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleEndDateChange}
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