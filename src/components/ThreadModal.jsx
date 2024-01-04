import React, { useState } from 'react';
import axios from 'axios';
import { buildApiEndpoint, getCookie } from "../utils"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ThreadModal = ({ setModalShow, fetchAllChats }) => {
  const [thread, setThread] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const token = getCookie('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have your server running at https://unique-barbers.onrender.com
      const response = await axios.post(
        "https://unique-barbers.onrender.com/api/v1/threads/create-thread",
        {
          thread,
          topic,
          category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
    
      console.log("Thread created successfully:", response.data);
      toast.success("You've created a new thread");
      setModalShow(false);
      fetchAllChats();
    } catch (error) {
      console.error("Error creating thread:", error);
      toast.error("error creating thread");
      // Handle the error, display a message, etc.
    }
  };


  return (
     <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4">
        <div className="relative lg:w-4/12 w-11/12 my-6 mx-auto">
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create a New Thread</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Thread</label>
          <textarea
          className="w-full p-2 border rounded"
          placeholder="Create a new thread..."
          required
          value={thread}
          onChange={(e)=> setThread(e.target.value)}
        />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Topic</label>
          <input
          required
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Category</label>
          <input
          required
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
       
        <button
              type="submit"
              className="w-full py-3 rounded-xl text-white mb-4"
              style={{ backgroundColor: "#977d46" }}
            >
              Save
            </button>
            <button
            onClick={()=> setModalShow(false)}
              className="w-full py-3 rounded-xl text-white"
              style={{
                backgroundColor: "rgba(242, 242, 242, 1)",
                color: "rgba(79, 79, 79, 1)",
              }}
            >
              Cancel
            </button>
      </form>
    </div>
    </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
   </>
  )
}

export default ThreadModal