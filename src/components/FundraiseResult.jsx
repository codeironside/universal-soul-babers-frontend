import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

const FundraiseResult = ({ contributions }) => {
  if (contributions?.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow p-6 flex flex-col items-center justify-center">
        <h5 className="text-xl font-bold mb-4">Your Contributions</h5>
        <p className="text-gray-600 mb-8">You have not made any contributions</p>
        <Link to="/campaignList" className="text-blue-500 inline-flex items-center cursor-pointer">
          <ArrowLongRightIcon className="w-4 h-4 mr-2" />
          Contribute to other Campaigns
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 h-full rounded-lg shadow p-6">
      <h5 className="text-xl font-bold mb-4">Your Contributions</h5>
      <ul className="divide-y divide-gray-200">
        {contributions?.map((result) => (
          <li key={result._id} className="py-4">
            <h2 className="text-lg font-bold mb-2">{result.campaignName}</h2>
            <div className="flex justify-between items-center text-gray-500">
              <div>
                <p className='text-sm font-normal text-gray-500 dark:text-gray-300'>Organizer: {result.organizer_name}</p>
                <p className='text-sm font-normal text-gray-500 dark:text-gray-300'>Start Date: {new Date(result.startDate).toLocaleDateString()}</p>
                <p className='text-sm font-normal text-gray-500 dark:text-gray-300'>End Date: {new Date(result.endDate).toLocaleDateString()}</p>
                <div className="font-bold text-sm mt-4">
                Current Amount: ${result.currentAmount}
              </div>
              </div>
              
            </div>
          </li>
        ))}
      </ul>
      <Link to="/campaignList" className="text-blue-500 mt-8 inline-flex items-center cursor-pointer">
          <ArrowLongRightIcon className="w-4 h-4 mr-2" />
          Contribute to other Campaigns
        </Link>
    </div>
  );
};

export default FundraiseResult;
