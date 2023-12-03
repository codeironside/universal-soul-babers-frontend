import React from 'react'

const FundraiseResult = () => {
  return (
<div class="col-span-1 flex items-center justify-center flex-col block max-w-sm p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Fundraising Results</h5>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    0$ donated in the last 24hrs
                </div>
            </li>
            <li class="py-3 sm:py-4">
            <div class="flex items-center">
                    0$ donated in the last 24hrs
                </div>
            </li>
            <li class="py-3 sm:py-4">
            <div class="flex items-center">
                    0$ donated in the last 24hrs
                </div>
            </li>
            <li class="py-3 sm:py-4">
            <div class="flex items-center">
                    0$ donated in the last 24hrs
                </div>
            </li>
        </ul>
   </div>
</div>
  )
}

export default FundraiseResult