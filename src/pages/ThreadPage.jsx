import React, { useState,useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Forum/Comments";
import { getCookie } from "../utils";
import axios from "axios";

const token = getCookie("token");

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
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      setThread(response.data?.thread || {});
      setComments(response.data?.comments || []);
    } catch (error) {
      console.error("Error fetching thread:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://unique-barbers.onrender.com/api/v1/threads/thread/${id}`,
        {
          content: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
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

  useEffect(() => {
    fetchOneThread();
  }, []);

  const getInitial = () => {
    if (thread?.image) {
      return null; // Return null if image is available
    } else {
      return thread?.userName?.charAt(0).toUpperCase() || ''; // Return the first letter of userName
    }
  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timestamp) => {
    const time = new Date(timestamp);
    return time.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
return (
  <>
    <style>
      {`
@keyframes border-animation {
  0% { border-color: rgba(189, 179, 105, 0.5); } /* #BDB369 with 50% opacity */
  8% { border-color: rgba(16, 41, 69, 0.5); } /* #102945 with 50% opacity */
  17% { border-color: rgba(0, 0, 0, 0.5); } /* #000000 with 50% opacity */
  25% { border-color: rgba(238, 188, 29, 0.5); } /* #EEBC1D with 50% opacity */
  33% { border-color: rgba(255, 127, 80, 0.5); } /* #FF7F50 with 50% opacity */
  42% { border-color: rgba(255, 0, 128, 0.5); } /* #FF0080 with 50% opacity */
  50% { border-color: rgba(150, 75, 0, 0.5); } /* #964B00 with 50% opacity */
  58% { border-color: rgba(0, 0, 255, 0.5); } /* #0000FF with 50% opacity */
  67% { border-color: rgba(255, 190, 152, 0.5); } /* #FFBE98 with 50% opacity */
  75% { border-color: rgba(255, 0, 0, 0.5); } /* #FF0000 with 50% opacity */
  100% { border-color: rgba(189, 179, 105, 0.5); } /* #BDB369 with 50% opacity */
}
.border-animated {
  animation: border-animation 6s infinite;
}
@keyframes bg-animation {
  0% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
}
.bg-animated {
  background: linear-gradient(45deg, #FFFDD0, #E6E4BB, #CCCAA6, #B3B192, #99987D, #807F68, #666553, #4D4C3E, #87CEFA, #C6FCFF);
  background-size: 200% 200%;
  animation: bg-animation 15s infinite;
}
.inner-card {
  border-top: 5px solid teal; /* Darker glistening teal */
  border-radius: 15px 15px 0 0; /* Top two border radius are rounded */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* Box shadow */
  margin-top: 20px; /* Space between the picture and the nested card */
}
`}
    </style>
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="bg-gray-200 rounded-lg p-6 max-w-xl w-full relative overflow-hidden bg-animated">
        <div className="relative z-20 flex items-center justify-center">
          {thread?.image ? (
            <img
              src={thread?.image} // Add image source here
              alt="Thread Image"
              className="rounded-full border-4 border-animated animate-pulse w-32 h-32 object-cover"
            />
          ) : (
            <div className="flex items-center justify-center rounded-full border-4 border-animated animate-pulse w-32 h-32 bg-gray-100 text-gray-600 text-2xl font-semibold">
              {getInitial()}
            </div>
          )}
        </div>
        <div className="inner-card bg-white p-4 rounded-lg shadow-lg max-w-xl w-full z-10">
          <h1 className="text-3xl font-bold text-center mt-4">{thread?.topic}</h1>
          <p className="text-gray-600 text-sm mb-2 text-center">
            Posted by <span className="font-semibold">{thread?.userName}</span> on {formatDate(thread?.createdAt)} at {formatTime(thread?.createdAt)}
          </p>
          <p className="text-gray-800 text-center">{thread?.thread}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center relative">
        <div className="w-1/2 h-0.5 bg-gray-400 absolute top-0 z-0" />
        <div className="w-0.5 h-full bg-gray-400 absolute left-1/2 z-0" />
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl w-full z-10">
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
    </div>
  </>
);
};
export default ThreadPage;
