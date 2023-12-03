import React from 'react'

const FundraiseProgress = () => {
  return (
  <>
    <div class="block w-full h-full mt-6 col-span-1 flex items-center justify-center flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Fund Raising Progress
      </h5>
     
    
          <div className='mb-4 w-full'>
            <p className='text-left text-sm mb-1' style={{color: "rgba(75, 70, 92, 1)"}}>Donation Title</p>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-3">
        <div className="text-xs font-medium text-blue-100 text-center p-0.3 leading-none rounded-full" style={{width: `30%`, backgroundColor: "#977d46"}}>30%</div>
          </div>
          </div>
    
          <div className='mb-4 w-full'>
            <p className='text-left text-sm mb-1' style={{color: "rgba(75, 70, 92, 1)"}}>Donation Title</p>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-3">
        <div className="text-xs font-medium text-blue-100 text-center p-0.3 leading-none rounded-full" style={{width: `40%`, backgroundColor: "#977d46"}}>40%</div>
          </div>
           </div>    
     
    </div>
  </>
  )
}

export default FundraiseProgress