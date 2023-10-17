import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
const FeedBackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <form action=''>
      <div>
        <h3 className='text-headingColor text-[16px] font-semibold mb-2 leading-6'>
          How would you rate our service from your experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index + 1;
            return (
              <button
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                }  bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                key={index}
                type='button'
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}>
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default FeedBackForm;
