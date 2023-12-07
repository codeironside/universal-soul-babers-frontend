import React, {useState, useEffect} from 'react'
import { getUserDetails, getUserCampaigns } from '../../api';
import { convertToDateString } from '../../helper/dateConverter';
import {
    ArrowLongLeftIcon
  } from "@heroicons/react/20/solid";
  import { useNavigate } from 'react-router-dom'
  import Spinner from '../../components/Spinner';

const UserCampaign = () => {
   const [user, setUser] = useState({})
  const [campaign, setCampaign] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
        getUserCampaigns(setCampaign, (()=> {
          setLoading(false)
        }));
  }, []);

  return (
    
    <div className="mx-8 py-5">

        <h1 className="mt-12 mb-20 text-2xl text-center">Your Donation Campaigns</h1>
        {
        loading?
         <div className='mt-20 flex justify-center items-center'>
        <Spinner />
         </div>
         :
         
         <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
         {campaign?.map((campaignItem) => {
           const { _id, campaignName, currentAmount, description, goalAmount, createdAt, endDate } = campaignItem;
           
           const dateObject = new Date(createdAt);
   
           return (
               <div
               style={{height: "21rem", border: "1px solid rgba(231, 232, 234, 1)"}}
                 className="bg-white rounded-2xl p-4"
               >
                  <img src="https://i.imgur.com/47s9buI.png" alt="location-icon" className="mb-4 h-10" />
                   <h1  className="text-left font-semibold text-lg mb-4">{campaignName}</h1>
                 <p className="text-sm mb-2 text-left" style={{color: "rgba(38, 60, 87, 1)"}}><span className="mr-2">Description: </span>{description}</p>
                   <p className="text-sm mb-2 text-left" style={{color: "rgba(38, 60, 87, 1)"}}><span className="mr-2">Goal Amount: </span>${goalAmount}</p>
                 <p className="text-sm mb-2 text-left" style={{color: "rgba(38, 60, 87, 1)"}}><span className="mr-2">Current Amount</span>${currentAmount}</p>
                 <p className="text-sm mb-2 text-left" style={{color: "rgba(38, 60, 87, 1)"}}><span className="mr-2">Created At</span>{convertToDateString(createdAt)}</p>
                 <p className="text-sm mb-2 text-left" style={{color: "rgba(38, 60, 87, 1)"}}><span className="mr-2">End Date</span>{convertToDateString(endDate)}</p>
               </div>
           );
         })}
        
       </div>

         }

    <div onClick={() => navigate(-1)} className="inline-flex text-xs mt-10 flex text-blue-500 cursor-pointer">
            <ArrowLongLeftIcon className="w-4 h-4 ml-2" />
           Back
        </div>
  </div>
  )
}

export default UserCampaign