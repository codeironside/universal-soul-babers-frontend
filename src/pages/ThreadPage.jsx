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
  0% { border-color: #BDB369; }
  8% { border-color: #102945; } /* Color 4 */
  17% { border-color: #000000; } /* Color 5 */
  25% { border-color: #EEBC1D; }
  33% { border-color: #FF7F50; } /* Color 6 */
  42% { border-color: #FF0080; } /* Color 7 */
  50% { border-color: #964B00; }
  58% { border-color: #0000FF; } /* Color 8 */
  67% { border-color: #FFBE98; } /* Color 9 */
  75% { border-color: #FF0000; } /* Color 10 */
  100% { border-color: #BDB369; }
}
.border-animated {
  animation: border-animation 6s infinite;
}
.inner-card {
  border-top: 5px solid teal; /* Darker glistening teal */
  border-radius: 15px 15px 0 0; /* Top two border radius are rounded */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* Box shadow */
}
`}
    </style>
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="bg-gray-200 rounded-lg p-6 max-w-xl w-full relative overflow-hidden">
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
