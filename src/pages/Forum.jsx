import axios from 'axios';
import { getCookie } from '../utils';
import {  useState, useEffect } from 'react'
import { UserA, UserB, UserC } from '../data';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 

const Forum = () => {

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
                <div class="flex flex-col h-full overflow-x-auto mb-4">
                  <div class="flex flex-col h-full">
                    <div class="grid grid-cols-12 gap-y-2">
                      { 
                        UserA?.map((item)=> {
                           const { forumUser, forumMessage } = item;
                          return(
                            <>
                                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                        <div class="flex flex-row items-center">
                          <div
                          style={{ backgroundColor: "#977d46" }}
                            class="flex items-center justify-center h-10 w-10 rounded-full text-white flex-shrink-0"
                          >
                            {forumUser}
                          </div>
                          <div
                            class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                          >
                            <div>{forumMessage}</div>
                          </div>
                        </div>
                      </div>
                            </>
                          )
                        })
                      }

                      {
                        UserB.map((item)=> {
                          const { forumUser, forumMessage } = item;

                          return(
                            <>
                                                     <div class="col-start-6 col-end-13 p-3 rounded-lg">
                        <div class="flex items-center justify-start flex-row-reverse">
                          <div
                            style={{ color: "#977d46" }}
                            class="flex items-center justify-center h-10 w-10 rounded-full bg-white flex-shrink-0"
                          >
                           {forumUser}
                          </div>
                          <div
                            class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                          >
                            <div>{forumMessage}</div>
                          </div>
                        </div>
                      </div>
                            </>
                          )
                        })
                      }

                    {
                      UserC?.map((item)=> {
                        const { forumUser, forumMessage } = item;
                        return(
                          <>
                            <div class="col-start-1 col-end-8 p-3 rounded-lg">
                        <div class="flex flex-row items-center">
                          <div
                            style={{ backgroundColor: "#977d46" }}
                            class="flex items-center justify-center h-10 w-10 rounded-full text-white flex-shrink-0"
                          >
                            {forumUser}
                          </div>
                          <div
                            class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                          >
                            <div>{forumMessage}</div>
                          </div>
                        </div>
                      </div>
                          </>
                        )
                      })
                    }

                      
                    </div>
                  </div>
                </div>
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