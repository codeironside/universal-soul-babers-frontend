import React, {useState} from 'react'
import { ImSpinner8 } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

export const BookingModal = ({ setModalShow, shopId, data }) => {
   const [service, setService] = useState("");
   const [date, setDate] = useState("");
   const [noPersons, setNoOfPersons] = useState();
   const [time, setTime] = useState("");
   const [loading, setLoading] = useState(false);
   const [inputType, setInputType] = useState('text');
   const [dateType, setDateType] = useState('text');
   const navigate = useNavigate();

  const page = "booking";


   const handleFocus = () => {
    setInputType('time');
  };

  const handleBlur = () => {
    setInputType('text');
  };

    const handleCreateNewBooking = ()=> {
  if (!service || !date || !noPersons || !time || !shopId) {
    console.error("Please fill in all the required fields");
    return;
  }

  const values = JSON.stringify({
    service: service,
    date: date,
    no_persons: noPersons,
    time: time,
    shop_id: shopId,
  });
setLoading(true)
localStorage.setItem("booking", values)
navigate(`/payment/${page}/${shopId}/${data?.price}`)
    }

  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4">
    <div className="relative lg:w-4/12 w-11/12 mt-8 mx-auto">
      <div
        style={{ overflowY: 'auto' }}
        className="border-0 h-54 py-6 md:px-20 px-10 rounded-lg shadow-lg relative flex flex-col bg-white w-full outline-none focus:outline-none"
      >
        {/*body*/}
        <h1
          className="text-center text-xl font-bold mb-4"
          style={{ color: "rgba(41, 44, 56, 1)" }}
        >
          Hire
        </h1>
      
        <input
         type="text"
         value={service}
          onChange={(e)=> setService(e.target.value)}
          placeholder="Input Your wanted service"
          style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
          className="w-full mb-4 py-3 rounded-xl"
        />

         <input
         placeholder="Input date"
         value={date}
         type={dateType}
         onFocus={()=> setDateType('date')}
          onBlur={()=> setDateType('text')}
         onChange={(e)=> setDate(e.target.value)}
          style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
          className="w-full mb-4 py-3 rounded-xl"
        />

          <input
         type="text"
         value={noPersons}
          onChange={(e)=> setNoOfPersons(e.target.value)}
          placeholder="No of persons"
          style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
          className="w-full mb-4 py-3 rounded-xl"
        />
          
          <input
          value={time}
          onChange={(e)=> setTime(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
         type={inputType}
          placeholder="set time"
          style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
          className="w-full mb-4 py-3 rounded-xl"
        />
        
        <button
        onClick={()=> handleCreateNewBooking()}
          type="button"
          className="w-full flex justify-center items-center py-3 rounded-xl text-white mb-4"
          style={{ backgroundColor: "#977d46" }}
        >
          {
            loading?
          <ImSpinner8 className="mx-auto animate-spin" /> :
            <span>Save</span>
          }
          
        </button>

        <button
          className="w-full py-3 rounded-xl text-white"
          onClick={()=> setModalShow(false)}
          style={{
            backgroundColor: "rgba(242, 242, 242, 1)",
            color: "rgba(79, 79, 79, 1)",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}
