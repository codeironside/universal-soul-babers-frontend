import React from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";


const SetupCard = ({ setModalDisplay }) => {
   

  return (
    <div className="col-span-1 flex m-0 w-full h-full items-center justify-center flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Setup Guide
      </h5>
      <p className="font-semibold text-gray-700 flex items-center mb-4">
        Create Your Donation Form <InformationCircleIcon className="w-5 h-5" />
      </p>
      <p className="mb-5 text-center">
        Personalize your form, embed it on your site, and start receiving
        donations.
      </p>

      <ul>
        <li className="flex">
          <div className="flex items-center h-5">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="ms-2 text-normal">
            <label
              htmlFor="helper-radio"
              className="font-medium text-gray-900 dark:text-gray-300"
            >
              Create and customize
            </label>
            <p
              id="helper-radio-text"
              className="text-xs font-normal text-gray-500 dark:text-gray-300"
            >
              Jump into our editor and customize the form to your liking.
            </p>
            <button
              type="button"
              onClick={()=> setModalDisplay(true)}
              style={{ backgroundColor: "#977d46" }}
              className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mt-4 me-2 mb-2 focus:outline-none"
            >
              Create Form
            </button>
          </div>
        </li>
        <li className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Connect a payment processor
          </label>
        </li>
        <li className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Retrieve donation link
          </label>
        </li>
        <li className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Start receiving donations
          </label>
        </li>
      </ul>
    </div>
  );
};

export default SetupCard;
