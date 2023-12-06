import axios from 'axios';
import {  useState, useEffect } from 'react'
import { buildApiEndpoint, getCookie } from "../utils"
import Spinner from '../components/Spinner';
import { TrashIcon } from "@heroicons/react/20/solid";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 

const Forum = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [allMessage, setAllMessage] = useState();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const token = getCookie('token');

  const fetchAllChats = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://unique-barbers.onrender.com/api/v1/chats/getall',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setLoading(false);
      console.log(response.data.allChats);
      let allMessages = response.data.allChats;
      const reversedMessages = allMessages.slice().reverse();
      setAllMessage(reversedMessages);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const handleDeleteChat = async (id) => {
    try {
      const chatId = id; 
      const response = await axios.delete(
        `https://unique-barbers.onrender.com/api/v1/chats/delete/:${chatId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error('Error deleting chat:', error);
      // Handle errors as needed
    }
  };

  useEffect(() => {
    if (token) {
      fetchAllChats();
       
      const fetchUserDetails = async () => {
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
          console.log(userData)
          setUser(userData.user);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      fetchUserDetails();
      
    }

  }, []);

  const handleSubmit = async () => {
    // e.preventDefault();
    const values = JSON.stringify({
      chat: chatMessage,
    });

    console.log(values);
    if (token) {
      try {
        const response = await axios.post(
         buildApiEndpoint("/chats/send-message"), // Replace with your actual backend API endpoint
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        fetchAllChats();
        setChatMessage("");
        setChatResponse(response.data.chatCreate);
        console.log('Server Response:', response.data);
      } catch (error) {
        console.error('Error:', error.message);
        // Handle error, show a message to the user, or perform other actions
      }
    } 
  };

    return (
      <div class="flex h-screen antialiased text-gray-800">
          <div class="flex lg:flex-row flex-col h-full w-full overflow-x-hidden">
            <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
              <div class="flex flex-row items-center justify-center h-12 w-full"> 
                <div
                  class="flex items-center justify-center rounded-2xl text-indigo-700 h-10 w-10"
                  style={{ backgroundColor: "#977d46" }}
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    ></path>
                  </svg>
                </div>
                <div class="ml-2 font-bold text-2xl">QuickChat</div>
              </div>
            </div>
            <div class="flex flex-col flex-auto h-full p-6">
              <div
                class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
              >
                {
                loading? 
                <div className='flex flex-col h-full overflow-x-auto mb-4 justify-center items-center'>
                <Spinner />
                 </div>
                :
                   
                <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                  <div class="grid grid-cols-12 gap-y-2">
                    { 
                      allMessage?.map((item)=> {
                         const { userName, chat, _id} = item;
                        //  const firstLetter = capitalizeFirstLetter(userName);
                        const userNameArray = userName.split('');
                        return(
                          <>
                            <div className={`${userName === user?.userName? 'col-start-6 col-end-13 p-3 rounded-lg' : 'col-start-1 col-end-8 p-3 rounded-lg'}`}>
                      <div class={`flex items-center ${userName === user?.userName? 'justify-start flex-row-reverse': 'flex-row'}`}>
                        <div
                      style={{ backgroundColor: userName === user?.userName ? 'white' : '#977d46',
                               color: userName === user?.userName ? '#977d46' : 'white'
                             }}
                          class={`flex items-center justify-center h-8 px-2 w-auto rounded text-white flex-shrink-0`}
                        >
                          {userNameArray[0].toUpperCase()}
                        </div>
                        <div
                          class={`relative ${userName === user?.userName? `mr-3 bg-indigo-100`: 'ml-3 bg-white'} text-sm py-2 px-4 shadow rounded-xl`}
                        >
                          <div>{chat}</div>
                        </div>
                         {
                          user?.role === "ADMIN" &&
                          <TrashIcon className="w-4 h-4 mx-2" onClick={()=> handleDeleteChat(_id)}/>
                         }
                      </div>
                    </div>
                   
                          </>
                        )
                      })
                    }

                    
                  </div>
                </div>
              </div>
              }
                <div
                  class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
                >
                  <div>
                    <button
                      class="flex items-center justify-center text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div class="flex-grow ml-4">
                    <div class="relative w-full">
                      <input
                        value={chatMessage}
                        onChange={(e)=> setChatMessage(e.target.value)}
                        type="text"
                        class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                      />
                      <button
                        class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                      >
                        <svg
                          class="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="ml-4">
                    <button
                      onClick={()=> handleSubmit()}
                      style={{ backgroundColor: "#977d46" }}
                      class="flex items-center justify-center  hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                    >
                      <span>Send</span>
                      <span class="ml-2">
                        <svg
                          class="w-4 h-4 transform rotate-45 -mt-px"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Forum;