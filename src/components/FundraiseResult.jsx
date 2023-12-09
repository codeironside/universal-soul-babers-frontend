import React from 'react'
import { Link } from 'react-router-dom'
import {
    ArrowLongRightIcon
  } from "@heroicons/react/20/solid";

const FundraiseResult = () => {
  return (
<div class="col-span-1 flex items-center justify-center flex-col block max-w-sm p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Your Contributions</h5>
   </div>
   <div className='my-32'>
    <p>You have not made any contributions</p>
    </div>
    <Link to="/campaignList" className="inline-flex text-xs mt-10 flex text-blue-500 cursor-pointer">
            <ArrowLongRightIcon className="w-4 h-4 ml-2" />
           Contribute to other Campaigns
        </Link>
   {/* <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {
                fundRaisingResult?.map((result)=> {
                    const {donation_result, donation_period} = result;
                    return(
                        <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            ${donation_result} donated in the last {donation_period}hrs
                        </div>
                    </li>
                    )
                })
            }
        </ul>
   </div> */}
</div>
  )
}

export default FundraiseResult