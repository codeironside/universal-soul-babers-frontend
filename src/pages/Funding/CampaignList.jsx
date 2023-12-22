import React, { useEffect, useState } from 'react'
import { getallCampaignDetailsWithoutContributors } from '../../api'
import { Link } from 'react-router-dom'
import { PaymentModal } from '../../components'
import Spinner from '../../components/Spinner';
import { useNavigate } from 'react-router-dom'
import {
  ArrowLongLeftIcon
} from "@heroicons/react/20/solid";
import { contributeToCrowdfunding } from '../../api';

const CampaignList = () => {
     const [details, setDetails] = useState([]);
     const [itemId, setItemId] = useState("");
     const [modalShow, setModalShow] = useState(false);
     const [loading, setLoading] = useState(true);
     const amount = 2000;
     const navigate = useNavigate();

     const handleModal=(id)=>{
      setItemId(id);
      setModalShow(true)
     }
    
    useEffect(()=> {
       getallCampaignDetailsWithoutContributors(setDetails, (()=> {
        setLoading(false)
       }));
    },[])

  return (
    <>
    <div className='mx-8 py-5'>
       <h1 className='mt-12 mb-20 text-2xl text-center'>Available Campaigns</h1>
       {
        loading?
         <div className='mt-20 flex justify-center items-center'>
        <Spinner />
         </div>
         :
       
         <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
       {details?.map((campaignItem) => {
        const { _id, campaignName, currentAmount, description, goalAmount, createdAt, endDate } = campaignItem;
        const words = description?.split(' ');
        const condensed = words?.slice(0, 8).join(' ');

        return (
            <div
            style={{
                height: "20rem",
                border: "1px solid rgba(231, 232, 234, 1)",
              }}
              className="bg-white rounded-2xl p-4"
            >
               <img src="https://i.imgur.com/47s9buI.png" alt="location-icon" className="mb-4 h-10" />
                <h1  className="text-left font-semibold text-lg mb-4">{campaignName}</h1>
              <p className="text-sm mb-2 text-left" style={{color: "rgba(38, 60, 87, 1)"}}><span className="mr-2">Description: </span>{condensed}</p>
                <p className="text-sm mb-2 text-left" style={{color: "rgba(38, 60, 87, 1)"}}><span className="mr-2">Goal Amount: </span>${goalAmount}</p>
              <p className="text-sm mb-2 text-left" style={{color: "rgba(38, 60, 87, 1)"}}><span className="mr-2">Current Amount</span>${currentAmount}</p>
              <button
              type="button"
              onClick={()=>handleModal(_id)}
              style={{ backgroundColor: "#977d46" }}
              class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mt-4 me-2 mb-2 focus:outline-none"
            >
              Donate
            </button>
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
    {
      modalShow &&
      <PaymentModal setModalShow={setModalShow} itemId={itemId} />
    }
    </>
  )
}

export default CampaignList