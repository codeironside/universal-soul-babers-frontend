import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import axios from "axios";
import { buildApiEndpoint, getCookie } from "../utils";
import {fetchShops} from '../api/product'

export default function MyShop() {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [selectedHours, setSelectedHours] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  });

  const selectedHoursString = JSON.stringify(selectedHours);


  const handleRadioChange = (day, value) => {
    setSelectedHours((prevHours) => ({
      ...prevHours,
      [day]: value,
    }));
  };
  

  const user = JSON.parse(getCookie("user"));
  const owner = user._id;
  const contact_number = user.phoneNumber;
  const contact_email = user.email;

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const maxSize = 1 * 1024 * 1024; // 1MB in bytes

  const [productData, setProductData] = useState({
    shop_name: "",
    category: "",
    price: "",
    description: "",
  });

  const token = getCookie("token");

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    previewFile(selectedFile);
  };


  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    previewFile(droppedFile);
  };

  const previewFile = (selectedFile) => {
    if (selectedFile.size > maxSize) {
      alert("File size exceeds 1MB. Please choose a smaller file.");
      return;
    }

    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setPreview("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("shop_name", productData.shop_name);
    formData.append("category", productData.category);
    formData.append("price", productData.price);
    formData.append("owner", owner);
    formData.append("contact_number", contact_number);
    formData.append("contact_email", contact_email);
    formData.append("workinghours", selectedHoursString);
    formData.append("description", productData.description);
    formData.append("image", file);

    console.log(Object.fromEntries(formData));

    try {
      const response = await axios.post(
        buildApiEndpoint("/shops/register"),
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        alert("Product created successfully");
        console.log(response.data);
        setOpenAddProduct(false);

        setProductData({
          name: "",
          category: "",
          price: "",
          description: "",
        });
        setFile(null);
        setPreview("");
      } else {
        console.error("Error creating product:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating product:", error.message);
    }
  };


  useEffect(()=> {
     fetchShops();
  },[])
  return (
    <>
      <div className="px-8 py-6">
        <h1 className="text-4xl font-semibold text-gray-900" onClick={()=> fetchShops()}>Shop</h1>

        <p className="mt-12 text-xl text-gray-700">
          Activate your shop in{" "}
          <Link className="text-indigo-500" to="/settings">
            settings
          </Link>{" "}
          to start selling
        </p>

        <div className="pt-6 mt-12 border-t border-gray-200">
          <h1 className="mb-6 text-4xl font-semibold text-gray-900">
            Inventory
          </h1>

          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm w-fit bg-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
            onClick={() => setOpenAddProduct(true)}
          >
            <PlusIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
            Add Shop
          </button>

          <Transition.Root show={openAddProduct} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={()=> setOpenAddProduct(false)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm md:max-w-md sm:p-6">
                      <div className="mt-5 md:col-span-2 md:mt-0">
                        <form onSubmit={handleSubmit}>
                          <div className="overflow-hidden">
                            <h1 className="mb-4 text-xl">Add product</h1>
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6">
                                <label
                                  htmlFor="shop_name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Product name
                                </label>
                                <input
                                  type="text"
                                  name="shop_name"
                                  id="name"
                                  autoComplete="name"
                                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  value={productData.shop_name}
                                  onChange={handleInputChange}
                                />
                              </div>

                              <div className="col-span-6">
                                <label
                                  htmlFor="category"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Category
                                </label>
                                <input
                                  type="text"
                                  name="category"
                                  id="category"
                                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  value={productData.category}
                                  onChange={handleInputChange}
                                />
                              </div>

                              {/* Price */}
                              <div className="col-span-6">
                                <label
                                  htmlFor="price"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Price
                                </label>
                                <div className="flex max-w-lg rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
                                    $
                                  </span>
                                  <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="flex-1 block w-full min-w-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    value={productData.price}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>

                              <div className="col-span-6">
                                <label
                                  htmlFor="description"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Product Description
                                </label>
                                <div className="mt-1">
                                  <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    value={productData.description}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                  Brief description for your product.
                                </p>
                              </div>

                              <div className="relative col-span-6">
                                <label className="block text-sm font-medium text-gray-700">
                                  Product Image
                                </label>
                                <div
                                  className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md"
                                  onDragOver={handleDragOver}
                                  onDrop={handleDrop}
                                >
                                  <div className="space-y-1 text-center">
                                    {file ? (
                                      <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-12 h-auto mx-auto"
                                      />
                                    ) : (
                                      <svg
                                        className="w-12 h-12 mx-auto text-gray-400"
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
                                    )}

                                    <div className="flex text-sm text-gray-600">
                                      <label
                                        htmlFor="file-upload"
                                        className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                      >
                                        <span>Upload a file</span>
                                        <input
                                          id="file-upload"
                                          name="file"
                                          type="file"
                                          accept="image/jpg, image/jpeg, image/png"
                                          className="sr-only"
                                          onChange={handleFileInputChange}
                                        />
                                      </label>
                                      <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                      PNG, JPG up to 1MB
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
</div>
                            <div className="relative inline-block text-left my-6 w-full">
      <label
      className="block text-md font-medium text-gray-700"
      >
       Select working hours:
      </label>

      {/* Dropdown menu */}
      { Object.keys(selectedHours).map((day) => (
        
  <div key={day} className="mt-2 flex flex-col w-full bg-gray-50">
    <p>{day}</p>
    <label>
      <input
        type="radio"
        name={day}
        className="mr-2 cursor-pointer"
        value={`${day.toLowerCase()}_morning`}
        onChange={() => handleRadioChange(day, "morning")}
      />
      Morning (09:30:00)
    </label>
    <label>
      <input
        type="radio"
        name={day}
        className="mr-2 curor-pointer"
        value={`${day.toLowerCase()}_afternoon`}
        onChange={() => handleRadioChange(day, "afternoon")}
      />
      Afternoon (14:00:00)
    </label>
    <label>
      <input
        type="radio"
        name={day}
        className="mr-2 cursor-pointer"
        value={`${day.toLowerCase()}_evening`}
        onChange={() => handleRadioChange(day, "evening")}
        
      />
      Evening (18:00:00)
    </label>
  </div>
))}
                            <div className="px-4 py-3 flex items-center justify-center mt-4 text-right bg-transparent sm:px-6">
                              <button
                                type="submit"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-primaryDark shadow-smfocus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                              >
                                Save product
                              </button>
                            </div>

                            <div onClick={() => setOpenAddProduct(false)} className="px-4 py-3 bg-gray-300 cursor-pointer flex items-center justify-center mt-4 text-right bg-transparent sm:px-6">
                                Cancel
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
        </div>
      </div>
    </>
  );
}

function OldStore() {
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
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm w-fit bg-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
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
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm md:max-w-md sm:p-6">
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
                              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              value="https://univacbaber.com/store/1"
                              disabled={true}
                            />
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Store Description
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                defaultValue={""}
                              />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                              Brief description for your store.
                            </p>
                          </div>

                          <div className="col-span-6">
                            <label className="block text-sm font-medium text-gray-700">
                              Social Sharing Image
                            </label>
                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="w-12 h-12 mx-auto text-gray-400"
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
                                    className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                  >
                                    <span>Upload a file</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                  PNG, JPG up to 1MB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="px-4 py-3 mt-4 text-right bg-gray-50 sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-primaryDark shadow-smfocus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
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
