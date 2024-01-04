import React from "react";
import styled, { keyframes } from "styled-components";

const glister = keyframes`
  0% { border-color: rgba(141, 182, 205, 0.5); } /* #8DB6CD with 50% opacity */
  8% { border-color: rgba(96, 157, 176, 0.5); } /* #609DB0 with 50% opacity */
  17% { border-color: rgba(66, 124, 141, 0.5); } /* #427C8D with 50% opacity */
  25% { border-color: rgba(53, 94, 108, 0.5); } /* #355E6C with 50% opacity */
  33% { border-color: rgba(37, 63, 73, 0.5); } /* #253F49 with 50% opacity */
  42% { border-color: rgba(23, 45, 52, 0.5); } /* #172D34 with 50% opacity */
  50% { border-color: rgba(10, 24, 28, 0.5); } /* #0A181C with 50% opacity */
  58% { border-color: rgba(5, 12, 14, 0.5); } /* #050C0E with 50% opacity */
  67% { border-color: rgba(2, 6, 7, 0.5); } /* #020607 with 50% opacity */
  75% { border-color: rgba(1, 3, 4, 0.5); } /* #010304 with 50% opacity */
  100% { border-color: rgba(141, 182, 205, 0.5); }
}
.border-animated {
  animation: border-animation 6s infinite;
}
@keyframes bg-animation {
  0% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
}
.bg-animated {
  background: linear-gradient(45deg, #FFFDD0, #E6E4BB, #CCCAA6, #B3B192, #99987D, #807F68, #666553, #4D4C3E, #87CEFA, #C6FCFF, #B0E2FF, #BFEFFF, #CAE1FF);
  background-size: 200% 200%;
  animation: bg-animation 15s infinite;
}
.inner-card {
  border-top: 5px solid teal; /* Darker glistening teal */
  border-radius: 15px 15px 0 0; /* Top two border radius are rounded */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* Box shadow */
  margin-top: 20px; /* Space between the picture and the nested card */
}`;

const CommentWrapper = styled.div`
  position: relative;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${glister} 3s infinite linear; /* Apply glister animation */
  margin-bottom: 20px; /* Add space between comments */
`;

const Comment = ({ image, userName, createdAt, content, isUser }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <CommentWrapper style={{ flexDirection: 'row' }}>
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
            Posted by {userName} on {formattedDate}
          </p>
        </div>
      </div>
    </CommentWrapper>
  );
};

export default Comment;

