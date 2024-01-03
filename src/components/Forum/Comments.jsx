import React from "react";

const Comment = ({ userName, createdAt, content }) => {
  return (
    <div className="bg-gray-100 p-2 mb-2">
      <p className="text-gray-800">{content}</p>
      <p className="text-xs text-gray-500">
        Posted by {userName} on {createdAt}
      </p>
    </div>
  );
};

export default Comment;
