import avatar from "../assets/img/avatar-icon.png";
import formatDate from "../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { FeedBackForm } from "../components";

const Feedback = () => {
  const [showFeedBackForm, setShowFeedBackForm] = useState(false);

  return (
    <div>
      <div className='mb-12'>
        <h4 className='text-[20px]  leading-[30px] font-bold text-headingColor mb-[30px]  '>
          All reviews (272)
        </h4>

        {/* Comment Person  */}
        <div className='flex justify-between items-center gap-10 mb-[30px] '>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full mt-2 '>
              <img src={avatar} alt='' className='w-full' />
            </figure>
            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold '>
                John Mcall
              </h5>
              <p className='text-[14px]leading-6 text-textColor'>
                {formatDate("04-23-2023")}
              </p>
              <p className='text-para mt-3 font-medium tex-[15px] '>
                Excellent service, highly recommend 💯
              </p>
            </div>
          </div>
          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color='#0067FF' />
            ))}
          </div>
        </div>
      </div>
      {/* Show feedback form when CLicked  */}

      {!showFeedBackForm && (
        <div className='text-center'>
          <button className='btn' onClick={() => setShowFeedBackForm(true)}>
            Post A Review
          </button>
        </div>
      )}

      {/* Show Feedback form component  */}
      {
        showFeedBackForm && <FeedBackForm />
      }
    </div>
  );
};

export default Feedback;
