import React from 'react'

const FundraisingModal = ({ setModalDisplay }) => {
  return (
     <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4">
        <div className="relative lg:w-4/12 w-11/12 my-6 mx-auto">
          <div
            className="border-0 h-96 py-6 md:px-20 px-10 rounded-lg shadow-lg relative flex flex-col bg-white w-full outline-none focus:outline-none"
          >
            {/*body*/}
            <h1
              className="text-center text-xl font-bold mb-4"
              style={{ color: "rgba(41, 44, 56, 1)" }}
            >
             Create A New Donation
            </h1>
          
            <input
              type="text"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              placeholder="Name Your Campaign"
              className="w-full mb-4 py-3 rounded-xl"
            />

              <input
              type="text"
              style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
              placeholder="Set your Fundraise Goal"
              className="w-full mb-4 py-3 rounded-xl"
            />
            <button
              type="button"
              className="w-full py-3 rounded-xl text-white mb-4"
              style={{ backgroundColor: "#977d46" }}
            >
              Save
            </button>
            <button
              onClick={() => setModalDisplay(false)}
              className="w-full py-3 rounded-xl text-white"
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

export default FundraisingModal