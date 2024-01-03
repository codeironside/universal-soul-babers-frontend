import React from "react";
import styled, { keyframes } from "styled-components";


const glister = keyframes`
  0% {
    border-color: #b38e00;
    box-shadow: 0 0 10px #b38e00;
  }
  50% {
    border-color: #998000;
    box-shadow: 0 0 10px #998000;
  }
  100% {
    border-color: #b38e00;
    box-shadow: 0 0 10px #b38e00;
  }
`;

const CommentWrapper = styled.div`
  position: relative;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${glister} 3s infinite linear; /* Apply glister animation */

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    width: 2px;
    background-color: #b38e00; /* Dark gold color for connecting line */
    top: 0;
    bottom: 0;
    left: 10px;
  }

  &:not(:last-child) {
    animation: ${glister} 3s infinite linear; /* Apply glister animation */
  }
`;

const Comment = ({ image, userName, createdAt, content }) => {
  return (
    <CommentWrapper>
      <div className="flex items-center bg-gray-100 p-2 mb-2">
        {image ? (
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={image}
            alt={userName}
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold mr-2">
            {userName.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-gray-800">{content}</p>
          <p className="text-xs text-gray-500">
            Posted by {userName} on {createdAt}
          </p>
        </div>
      </div>
    </CommentWrapper>
  );
};

export default Comment;
