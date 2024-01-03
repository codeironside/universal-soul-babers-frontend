// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Thread = ({ _id, topic, userName, createdAt, thread, comments }) => {
  
//   return (
//     <div className="bg-white shadow-md p-4 mb-4">
//       <h2 className="text-xl font-bold mb-2 underline">
//         <Link to={`/forum/${_id}`}>{topic}</Link>
//       </h2>
//       <p className="text-gray-600 text-sm mb-2">
//         Posted by {userName} on {createdAt}
//       </p>
//       <p className="text-gray-800 overflow-hidden overflow-ellipsis">{thread}</p>
//     </div>
//   );
// };

// export default Thread;

// Thread.js

// Thread.js

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const glister = keyframes`
  0% {
    border-color: #ffd700;
  }
  20% {
    border-color: #e6c200;
  }
  40% {
    border-color: #cca300;
  }
  60% {
    border-color: #b38e00;
  }
  80% {
    border-color: #998000;
  }
  100% {
    border-color: #ffd700;
  }
`;
const animateBorder = keyframes`
  0% {
    border-color: transparent;
  }
  100% {
    border-color: #ffd700; /* Golden color */
  }
`;

const ThreadWrapper = styled.div`
 .thread {
    background-color: #ffffff;
    padding: 16px;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Apply box shadow */
    animation: ${glister} 6s infinite linear; /* Apply glister animation */
  }

  .user-details {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc; /* Default background color for avatar */
  }

  .user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-info {
    display: flex;
    align-items: center;
  }

  .user-info a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    margin-right: 10px;
  }

  .comments-info {
    font-size: 14px;
    color: #777;
    display: flex;
    align-items: center;
    margin-top: 5px;
  }

  .comments-count {
    margin-right: 5px;
  }

  .miniature-images {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
  }

  .miniature-images img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 5px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 768px) {
    /* Adjust styles for smaller screens if needed */
  }
`;
const CreatedAt = styled.p`
  font-size: 12px;
  color: #888;
  font-style: italic;
`;
const AnimatedThread = styled.div`
  border: 2px solid transparent;
  animation: ${animateBorder} 2s infinite alternate;
`;

const Thread = ({ _id, topic, thread, userName, createdAt, image, comments }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedContent = thread && thread.substring(0, 200);

  const displayedComments = comments && comments.slice(0, 5);
  const remainingCommentsCount = Math.max(comments ? comments.length - 5 : 0, 0);

  const getInitials = (userName) => {
    const names = name.split(' ');
    return names.map((word) => word.charAt(0)).join('').toUpperCase();
  };

  return (
    <ThreadWrapper>
      <AnimatedThread className="thread">
        <div className="user-details">
          <div className="user-avatar">
            {image ? (
              <img src={image} alt={userName} />
            ) : (
              <span>{getInitials(userName)}</span>
            )}
          </div>
          <div className="user-info">
            <Link to={`/user/${_id}`}>{userName}</Link>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 underline">
          <Link to={`/forum/${_id}`} style={{ textDecoration: 'none', color: '#333' }}>
            {topic}
          </Link>
        </h2>
       <CreatedAt>
          Posted on {new Date(createdAt).toLocaleDateString()} {/* Updated styling for creation date */}
        </CreatedAt>
        <div className="comments-info">
          <span className="comments-count">
            {comments ? comments.length : 0} {comments && comments.length === 1 ? 'Comment' : 'Comments'}
          </span>
          <div className="miniature-images">
            {displayedComments &&
              displayedComments.map((comment, index) => (
                <img
                  key={index}
                  src={comment.image || 'default-image-url.jpg'}
                  alt={`Comment by ${comment.userName}`}
                />
              ))}
            {remainingCommentsCount > 0 && (
              <span className="additional-icons" onClick={toggleExpand}>
                ..+{remainingCommentsCount} more
              </span>
            )}
          </div>
        </div>
        <div className="thread-content">
          {expanded ? (
            <p>{thread}</p>
          ) : (
            <>
              <p>{truncatedContent}</p>
              <button onClick={toggleExpand}>
                {truncatedContent.length < thread.length ? 'Read more' : 'Collapse'}
              </button>
            </>
          )}
          {/* Additional content for thread */}
        </div>
      </AnimatedThread>
    </ThreadWrapper>
  );
};

export default Thread;
