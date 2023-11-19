import { useEffect } from "react"

export default function () {

  useEffect(() => {
    document.title = 'Blog'
    document.body.classList.add('bg-gray-100')
  }, [])

  return (
    <div className="relative px-4 pt-8 pb-20 sm:px-6 lg:px-8 2xl:pt-24 lg:pb-28">

      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>

        <div className='mt-10'>
          <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
            <div className="divide-y divide-gray-200">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <h2 id="notes-title" className="text-lg font-medium text-gray-900">Pending Approval</h2>
              </div>
              <div className="px-4 py-6 sm:px-6">
                {/* Empty state */}
                <div className="flex justify-center items-center">
                  <p className="text-2xl font-semibold">There's no blog to review at the moment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
