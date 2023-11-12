import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function MyStore() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="px-8 py-6">
        <h1 className="text-4xl font-semibold text-gray-900">Store</h1>
        <div className="flex flex-col gap-10 mt-10">
          <p className="mt-2 text-xl text-gray-700">
            Setup your Univacbaber store in 3 easy steps and start selling right
            from your dashboard
          </p>
          <button
            type="button"
            className="w-fit inline-flex items-center justify-center rounded-md border border-transparent bg-primaryDark px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
            onClick={() => setOpen(true)}
          >
            Add store
          </button>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm  md:max-w-md sm:p-6">
                  <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                      <div className="overflow-hidden">
                        <h1 className="mb-4 text-xl">Store Information</h1>
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Store name
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Store URL
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              value="https://univacbaber.com/store/1"
                            />
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Store Category
                            </label>
                            <select
                              id="country"
                              name="country"
                              autoComplete="country-name"
                              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                              <option value="Animals &amp; Pets">
                                Animals &amp; Pets
                              </option>
                              <option value="Baby Products">
                                Baby Products
                              </option>
                              <option value="Books and Media">
                                Books and Media
                              </option>
                              <option value="Arts and Crafts">
                                Arts and Crafts
                              </option>
                              <option value="Beauty and Skincare">
                                Beauty and Skincare
                              </option>
                              <option value="Building and Construction">
                                Building and Construction
                              </option>
                              <option value="Daily Essentials">
                                Daily Essentials
                              </option>
                              <option value="Education">Education</option>
                              <option value="Groceries">Groceries</option>
                              <option value="Drinks">Drinks</option>
                              <option value="Mens Fashion">Mens Fashion</option>
                              <option value="Gym and Fitness">
                                Gym and Fitness
                              </option>
                              <option value="Electronics">Electronics</option>
                              <option value="Food &amp; Beverages">
                                Food &amp; Beverages
                              </option>
                              <option value="Others">Others</option>
                              <option value="Home &amp; Kitchen">
                                Home &amp; Kitchen
                              </option>
                              <option value="Gaming">Gaming</option>
                              <option value="Health &amp; Pharmaceuticals">
                                Health &amp; Pharmaceuticals
                              </option>
                              <option value="Makeup and Cosmetics">
                                Makeup and Cosmetics
                              </option>
                              <option value="Insurance ">Insurance</option>
                              <option value="Kids Fashion">Kids Fashion</option>
                              <option value="Office Equipment">
                                Office Equipment
                              </option>
                              <option value="Personal Care">
                                Personal Care
                              </option>
                              <option value="Phones and Tablets">
                                Phones and Tablets
                              </option>
                              <option value="Professional Services">
                                Professional Services
                              </option>
                              <option value="Restaurant">Restaurant</option>
                              <option value="Supermarket">Supermarket</option>
                              <option value="Religious Organization">
                                Religious Organization
                              </option>
                              <option value="Toys &amp; Games">
                                Toys &amp; Games
                              </option>
                              <option value="Womens Fashion">
                                Womens Fashion
                              </option>
                            </select>
                          </div>

                          <div className="col-span-6">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">Store Description</label>
                            <div className="mt-1">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                defaultValue={''}
                              />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Brief description for your store.</p>
                          </div>

                          <div className="col-span-6">
                            <label className="block text-sm font-medium text-gray-700">Social Sharing Image</label>
                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                  >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 mt-4">
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-primaryDark py-2 px-4 text-sm font-medium text-white shadow-smfocus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                          >
                            Create Store
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
