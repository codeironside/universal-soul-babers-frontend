import React, { useState } from "react";
import { Link } from "react-router-dom";

const Thread = ({ _id, topic, userName, createdAt, thread, comments }) => {
  
  return (
    <div className="bg-white shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold mb-2 underline">
        <Link to={`/forum/${_id}`}>{topic}</Link>
      </h2>
      <p className="text-gray-600 text-sm mb-2">
        Posted by {userName} on {createdAt}
      </p>
      <p className="text-gray-800 overflow-hidden overflow-ellipsis">{thread}</p>
    </div>
  );
};

export default Thread;