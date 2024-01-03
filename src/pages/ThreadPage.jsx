// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Comment from "../components/Forum/Comments";
// import { getCookie } from "../utils"
// import axios from "axios";

// const token = getCookie('token');

// const ThreadPage = () => {
//   const [newComment, setNewComment] = useState("");
//   const { id } = useParams();
//   const [thread, setThread] = useState({});
//   const [comments, setComments] = useState([]);


//   const fetchOneThread = async () => {
//     try {
//       const response = await axios.get(
//         `https://unique-barbers.onrender.com/api/v1/threads/one/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log(response.data)
//       setThread(response.data.thread);
//       setComments(response.data.comments);
//     } catch (error) {
//       console.error('Error fetching chats:', error);
//     }
//   };

  
//   const handleSubmit = async () => {

//     try {
//       const response = await axios.post(
//         `https://unique-barbers.onrender.com/api/v1/threads/thread/${id}`,
//         { 
//           content: newComment, 
//           image: "Owner Name",
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log("Comment created successfully:", response.data);
//       fetchOneThread();
//       setNewComment("");
//     } catch (error) {
//       console.error("Error creating comment:", error);
//     }
//   };


//   useEffect(()=> {
//     fetchOneThread();
//   },[])

//   return (
     
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{thread?.topic}</h1>
//       <p className="text-gray-600 text-sm mb-2">
//         Posted by {thread?.userName} on {thread?.createdAt}
//       </p>
//       <p className="text-gray-800">{thread?.thread}</p>
//       <div className="mt-4">
//         <h2 className="text-lg font-semibold mb-2">Comments</h2>
//         {comments?.map((comment) => (
//           <Comment key={comment.id} {...comment} />
//         ))}
//         <div className="mt-4">
//           <textarea
//             className="w-full p-2 border rounded"
//             placeholder="Add a new comment..."
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//           />
//           <button
//           onClick={handleSubmit}
//             className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           >
//             Add Comment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThreadPage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Forum/Comments";
import { getCookie } from "../utils";
import axios from "axios";

const token = getCookie('token');

const ThreadPage = () => {
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();
  const [thread, setThread] = useState({});
  const [comments, setComments] = useState([]);

  const fetchOneThread = async () => {
    try {
      const response = await axios.get(
        `https://unique-barbers.onrender.com/api/v1/threads/one/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setThread(response.data.thread);
      setComments(response.data.comments);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://unique-barbers.onrender.com/api/v1/threads/thread/${id}`,
        { 
          content: newComment, 
          image: "Owner Name",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("Comment created successfully:", response.data);
      fetchOneThread();
      setNewComment("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  useEffect(()=> {
    fetchOneThread();
  },[])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{thread?.topic}</h1>
      <div className="flex items-center justify-center mb-2 relative">
        <div className="image-container">
          {thread?.image ? (
            <img
              className="w-16 h-16 rounded-full object-cover z-10"
              src={thread?.image}
              alt={thread?.userName}
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-2xl z-10">
              {thread?.userName.charAt(0)}
            </div>
          )}
          <div className="broken-border"></div>
        </div>
        <p className="text-gray-600 text-sm absolute bottom-0 left-0 ml-2">
          Posted by {thread?.userName} on {thread?.createdAt}
        </p>
      </div>
      <p className="text-gray-800">{thread?.thread}</p>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Comments</h2>
        {comments?.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
        <div className="mt-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Add a new comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadPage;

// CSS for the styling
import './ThreadPage.css';

/* ThreadPage.css */
.image-container {
  position: relative;
  width: 80px; /* Adjust the width and height of the image container as needed */
  height: 80px;
}

.broken-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px dashed transparent;
  animation: moveBorder 10s linear infinite;
}

@keyframes moveBorder {
  0%, 100% {
    border-image: linear-gradient(to right, #ffd700, #ffd700 25%, #b38e00 25%, #b38e00 50%, #998000 50%, #998000 75%, transparent 75%, transparent);
  }
  50% {
    border-image: linear-gradient(to right, #ffd700, #ffd700 25%, #b38e00 25%, #b38e00 50%, #998000 50%, #998000 75%, #ffd700 75%, #ffd700);
  }
}

/* Additional styles or adjustments can be made as needed */
