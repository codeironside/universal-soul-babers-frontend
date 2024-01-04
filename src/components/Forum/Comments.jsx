// import React from "react";
// import styled, { keyframes } from "styled-components";


// const glister = keyframes`
//   0% {
//     border-color: #b38e00;
//     box-shadow: 0 0 10px #b38e00;
//   }
//   50% {
//     border-color: #998000;
//     box-shadow: 0 0 10px #998000;
//   }
//   100% {
//     border-color: #b38e00;
//     box-shadow: 0 0 10px #b38e00;
//   }
// `;

// const CommentWrapper = styled.div`
//   position: relative;
//   padding: 10px;
//   border: 2px solid transparent;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   animation: ${glister} 3s infinite linear; /* Apply glister animation */

//   &:not(:last-child)::after {
//     content: "";
//     position: absolute;
//     width: 2px;
//     background-color: #b38e00; /* Dark gold color for connecting line */
//     top: 0;
//     bottom: 0;
//     left: 10px;
//   }

//   &:not(:last-child) {
//     animation: ${glister} 3s infinite linear; /* Apply glister animation */
//   }
// `;

// const Comment = ({ image, userName, createdAt, content }) => {
//   return (
//     <CommentWrapper>
//       <div className="flex items-center bg-gray-100 p-2 mb-2">
//         {image ? (
//           <img
//             className="w-8 h-8 rounded-full mr-2"
//             src={image}
//             alt={userName}
//           />
//         ) : (
//           <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold mr-2">
//             {userName.charAt(0)}
//           </div>
//         )}
//         <div>
//           <p className="text-gray-800">{content}</p>
//           <p className="text-xs text-gray-500">
//             Posted by {userName} on {createdAt}
//           </p>
//         </div>
//       </div>
//     </CommentWrapper>
//   );
// };

// export default Comment;

import React from "react";
import styled, { keyframes } from "styled-components";

const glister = keyframes`
  0% {
    border-color: rgba(189, 179, 105, 0.5); } /* #BDB369 with 50% opacity */
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

