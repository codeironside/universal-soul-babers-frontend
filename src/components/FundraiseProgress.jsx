import React from 'react'
import { fundRaisingProgress } from '../data'


const FundraiseProgress = () => {
  return (
  <>
  <div class="block w-full h-full mt-6 col-span-1 flex items-center justify-center flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Fund Raising Progress
      </h5>
  {
    fundRaisingProgress?.map((item)=> {
      const {donation_title, donation_progress} = item;
      return(
        <>
              <div className='mb-4 w-full'>
            <p className='text-left text-sm mb-1' style={{color: "rgba(75, 70, 92, 1)"}}>{donation_title}</p>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-3">
        <div className="text-xs font-medium text-blue-100 text-center p-0.3 leading-none rounded-full" style={{width: `${donation_progress}%`, backgroundColor: "#977d46"}}>{donation_progress}%</div>
          </div>
          </div>
        </>
      )
    })
  }
     
    </div>
  </>
  )
}

export default FundraiseProgress;