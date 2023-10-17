import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
const FeedBackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState(' ')

const handleSubmit = async (e) => {
    e.preventDefault()

    // Todo: api 
}

  return (
    <form action=''>
      {/* Rating details with Star  */}
      <div>
        <h3 className='text-headingColor text-[16px] font-semibold mb-2 leading-6 mt-0'>
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

      <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] font-semibold mb-2 leading-6 mt-0'>
          Share reviews or suggestion
        </h3>
        <textarea
          className='border border-solid  border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md '
          rows='6' 
          placeholder='Write your review'
          onChange={(e) => setReview(e.target.value)}
          ></textarea>
      </div>
      <button type='submit' onClick={handleSubmit} className='btn' >
       Submit
      </button>
    </form>
  );
};

export default FeedBackForm;
