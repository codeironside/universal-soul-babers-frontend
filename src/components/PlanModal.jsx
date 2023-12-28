import React, { useState } from "react";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";

const PlanModal = ({ setModalShow, plan }) => {
    const userPlan = plan.toLowerCase();
    const [selectedPlan, setSelectedPlan] = useState("");
    const page = "plan";
    const amount = selectedPlan === "premium"? 250: 400

    const handlePlanChange = (e) => {
        setSelectedPlan(e.target.value);
        if(userPlan === e.target.value){
          toast.error("You are already subscribed to this plan");
        }
      };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4">
        <div className="relative lg:w-4/12 w-11/12 my-6 mx-auto">
          <div
            style={{ overflowY: "auto" }}
            className="border-0 h-54 py-6 md:px-20 px-10 rounded-lg shadow-lg relative flex flex-col bg-white w-full outline-none focus:outline-none"
          >
            {/*body*/}
            <h1
            onClick={()=> console.log(plan)}
              className="text-center text-xl font-bold mb-4"
              style={{ color: "rgba(41, 44, 56, 1)" }}
            >
              Change Plan
            </h1>

            <select
      name="plan"
      id="plan"
      className="w-full cursor-pointer mb-4 py-3 rounded-xl"
      onChange={handlePlanChange}
      defaultValue="Select plan"
    >
       <option value="Select plan" disabled defaultValue="Select plan">
    Select plan
  </option>
  <option value="premium">Premium</option>
  <option value="diamond">Diamond</option>
   
    </select>
        
             {selectedPlan !== "" && selectedPlan !== userPlan && <Link to={`/payment/${page}/${selectedPlan}/${amount}`}>
                <button
                  type="button"
                  className="w-full py-3 rounded-xl text-white mb-4"
                  style={{ backgroundColor: "#977d46" }}
                >
                  Save
                </button>
              </Link>}
            <button
              className="w-full py-3 rounded-xl text-white"
              onClick={() => setModalShow(false)}
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
  );
};

export default PlanModal;
