import React, { useState } from "react";
import { getCookie } from "../utils"
import axios from "axios";
import Comment from "./Comments";




const ThreadDetail = ({ thread, onClose }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    // Implement your logic to add a new comment
    // For now, let's just add the comment to state
    const updatedComments = [
      ...thread.comments,
      {
        id: thread.comments.length + 1,
        author: "Current User", // You may replace this with the actual username
        date: new Date().toLocaleDateString(),
        content: newComment,
      },
    ];

    // Update the comments state
    // Implement your logic to update the comments on the server in a real application
    // For now, we are just updating the state
    // You may want to use a state management library like Redux for a more complex application
    // Or lift the state up to the parent component
    onClose(); // Close the thread detail after adding a comment
  };

  return (
    <div className="bg-white shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{thread.title}</h2>
      <p className="text-gray-600 text-sm mb-2">
        Posted by {thread.author} on {thread.date}
      </p>
      <p className="text-gray-800">{thread.content}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        {thread.comments.map((comment) => (
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
            className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadDetail;
