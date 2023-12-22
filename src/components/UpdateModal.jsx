import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ImSpinner8 } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { buildApiEndpoint, getCookie, setCookie } from "../utils";
import axios from "axios";

const UpdateModal = ({
  isOpen,
  onRequestClose,
  initialValue,
  title,
  fieldName,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(getCookie("user"));
  const token = getCookie("token");

  useEffect(() => {
    // Set the initial value when the modal opens
    setInputValue(initialValue);
  }, [initialValue]);

  const userId = user._id;

  const updateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updateData = {
        [fieldName]: inputValue,
      };

      const response = await axios.put(
        buildApiEndpoint(`/users/update/${userId}`),
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        // Show success notification
        toast.success("Profile Updated successfully!");
      } else {
        // Show error notification
        toast.error("Failed to submit data. Please try again.");
      }

      setCookie("user", JSON.stringify(response.data));
      setLoading(false);
      console.log("submitted");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log("Error updating profile", error);
    }
    onRequestClose();
  };

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto'
        onClose={onRequestClose}>
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-50' />
          </Transition.Child>

          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'>
            &#8203;
          </span>

          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
              <ToastContainer />
              <form onSubmit={updateProfile}>
                <div className='mb-4'>
                  <label
                    htmlFor='input'
                    className='block text-sm font-medium text-gray-700'>
                    {title}
                  </label>
                  <input
                    type='text'
                    id='input'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-primaryDark text-white p-2 rounded'>
                  {loading ? (
                    <ImSpinner8 className='mx-auto animate-spin' />
                  ) : (
                    <span>Update </span>
                  )}
                </button>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default UpdateModal;
