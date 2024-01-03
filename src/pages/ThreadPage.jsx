import React, { useState,useRed, useEffect } from "react";
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
          image: "Owner Name",
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
const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [])

  const colors = ['#BDB369', '#EEBC1D', '#964B00', '#AA6C39', '#A52A2A', '#BDB369'];

  function draw(ctx, frameCount) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = colors[frameCount % colors.length];
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, frameCount * 0.01);
    ctx.fill();
  }

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col items-center">
        <div className="bg-gray-200 rounded-lg p-6 max-w-xl w-full relative overflow-hidden">
          <div className="relative z-20 flex items-center justify-center">
            {thread?.image ? (
              <img
                src={thread?.image} // Add image source here
                alt="Thread Image"
                className="rounded-full animate-pulse w-32 h-32 object-cover"
              />
            ) : (
              <div className="flex items-center justify-center rounded-full animate-pulse w-32 h-32 bg-gray-100 text-gray-600 text-2xl font-semibold">
                <canvas ref={canvasRef} /> {/* Use the canvas element here */}
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold text-center mt-4">{thread?.topic}</h1>
          <p className="text-gray-600 text-sm mb-2 text-center">
            Posted by <span className="font-semibold">{thread?.userName}</span> on {formatDate(thread?.createdAt)} at {formatTime(thread?.createdAt)}
          </p>
          <p className="text-gray-800 text-center">{thread?.thread}</p>
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
