import React, {useState, useEffect} from 'react'
import { SetupCard, FundraiseResult, FundraiseProgress, FundraisingModal } from '../../components'
import { getUserContributions } from '../../api';
import {
  ArrowLongRightIcon
} from "@heroicons/react/20/solid";
import { Link } from 'react-router-dom'
import { ToastContainer } from "react-toastify";



 
const Funding = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [user, setUser] = useState({})
  const [contributions, setContributions] = useState();
  const userId = user?._id;

  useEffect(() => {
      getUserContributions(setContributions);
  }, []);

  return (
    <>
    <section>
        <div className='grid lg:grid-cols-2 grid-cols-1 m-0 gap-4'>

        <div className='flex items-center justify-center'>
    <SetupCard setModalDisplay={setModalDisplay} />
  </div>
  <div className='flex items-center justify-center'>
  <FundraiseResult contributions={contributions} />
  </div>
  {/* <div className='flex items-center justify-center'>
  <FundraiseProgress />
  </div> */}

<>
    <div className='my-8 mx-9'>
    <Link to="/userCampaign" className="inline-flex text-medium items-center flex text-blue-500 cursor-pointer">
            <ArrowLongRightIcon className="w-5 h-5 ml-2" />
           View Your Campaigns
        </Link>
    </div>
    </>

       {
        modalDisplay &&
        <FundraisingModal setModalDisplay={setModalDisplay} />
       }
        </div>
        <ToastContainer position='top-center' />
    </section>
    </>
  )
}
export default Funding