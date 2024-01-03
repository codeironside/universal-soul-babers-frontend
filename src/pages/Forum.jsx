import React, { useState, useEffect } from "react";
import { Thread, ThreadModal } from "../components";
import { getCookie } from "../utils"
import axios from "axios";
import { ToastContainer } from "react-toastify";


const token = getCookie('token');

const Forum = () => {
  const [modalShow, setModalShow] = useState(false);
  const [threads, setThreads] = useState([
  ]);


  const fetchAllChats = async () => {
    try {
      const response = await axios.get(
        'https://unique-barbers.onrender.com/api/v1/threads/getall',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setThreads(response.data.chatsWithThreadCount)
      //console.log(response.data.chatsWithThreadCount)
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };
  console.log('threads: ', threads)
  
  useEffect(() => {
   
      fetchAllChats();
 
    },[])

  return (
     <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Forum</h1>
        <div className="mb-4">
        <button
        onClick={()=> setModalShow(true)}
        style={{ backgroundColor: "#977d46" }}
          className="mt-2 text-white p-2 rounded"
        >
          Create Thread
        </button>
      </div>
          <div className="mb-4">
              {threads.map((thread) => (
                <Thread key={thread._id} {...thread} />
              ))}
            </div>
      </div>
      {
        modalShow &&
        <ThreadModal setModalShow={setModalShow} fetchAllChats={fetchAllChats}/>
      }
    <ToastContainer position='top-center' />    
      </>
  );
};

export default Forum;
// Forum.js

// import React, { useState, useEffect } from "react";
// import { Thread, ThreadModal } from "../components";
// import { getCookie } from "../utils";
// import axios from "axios";
// import { ToastContainer } from "react-toastify";

// const token = getCookie('token');

// const Forum = () => {
//   const [modalShow, setModalShow] = useState(false);
//   const [threads, setThreads] = useState([]);

//   const fetchAllChats = async () => {
//     try {
//       const response = await axios.get(
//         'https://unique-barbers.onrender.com/api/v1/threads/getall',
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       setThreads(response.data.chatsWithThreadCount);
//       console.log(response.data.chatsWithThreadCount);
//     } catch (error) {
//       console.error('Error fetching chats:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAllChats();
//   }, []);

//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-4">Forum</h1>
//         <div className="mb-4">
//           <button
//             onClick={() => setModalShow(true)}
//             style={{ backgroundColor: "#977d46" }}
//             className="mt-2 text-white p-2 rounded"
//           >
//             Create Thread
//           </button>
//         </div>
//         <div className="mb-4">
//           {threads.map((thread) => (
//             <Thread key={thread._id} thread={thread} />
//           ))}
//         </div>
//       </div>
//       {modalShow && (
//         <ThreadModal setModalShow={setModalShow} fetchAllChats={fetchAllChats} />
//       )}
//       <ToastContainer position="top-center" />
//     </>
//   );
// };

// export default Forum;
