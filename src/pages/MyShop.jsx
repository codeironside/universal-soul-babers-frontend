import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import axios from "axios";
import { buildApiEndpoint, getCookie, isOwner } from "../utils";
import { fetchShops } from "../api/product";
import Select from "react-select"
import { ImSpinner8 } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




export default function MyShop() {
  const [shopData, setShopData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [loading, setLoading] = useState(false);

 
  const [availability, setAvailability] = useState({});

  const handleTimeChange = (day, selectedTimes) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: selectedTimes.map((time) => time.value),
    }));
  };


  const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const timeOptions = [];
  for (let hour = 8; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedTime = `${hour % 12 || 12}:${minute
        .toString()
        .padStart(2, "0")} ${hour >= 12 ? "PM" : "AM"}`.toLowerCase().replace(" ", "");
      timeOptions.push({ value: formattedTime, label: formattedTime });
    }
  }

  

  const barbersData = shopData.filter((item) => item.category === "barbers");
  // console.log(shopData);
  const userProductData = shopData.filter(
    (item) => item.category !== "barbers"
  );


  const user = JSON.parse(getCookie("user"));
  const owner = user._id;
  const contact_number = user.phoneNumber;
  const contact_email = user.email;

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const maxSize = 1 * 1024 * 1024; // 1MB in bytes

  const [productData, setProductData] = useState({
    shop_name: "",
    category: "barbers",
    price: "",
    description: "",
  });

  useEffect(() => {
    // Your isOwner function logic
    const ownerStatus = isOwner(); // Replace isOwner() with your actual function

    // Update category based on the result of isOwner
    setProductData((prevData) => ({
      ...prevData,
      category: ownerStatus ? "" : "barbers",
    }));
    
  }, []); 

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
     const cloudName = "di36rc30e";
     const uploadPreset = "mrh3qf9";
     e.preventDefault();
     setLoading(true)

     const formData = new FormData();
     formData.append("shop_name", productData.shop_name);
     formData.append("category", productData.category);
     formData.append("price", productData.price);
     formData.append("owner", owner);
     formData.append("contact_number", contact_number);
     formData.append("contact_email", contact_email);
     formData.append("workinghours", JSON.stringify(availability)),
     formData.append("description", productData.description);

     formData.append("file", file);
     formData.append("upload_preset", uploadPreset);

     try {
       const response = await axios.post(
         `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
         formData
       );

       const imageRes = response.data.secure_url;
       formData.append("images", imageRes);

       const formDataObject = {};
       for (const [key, value] of formData.entries()) {
         if (key !== "upload_preset" && key !== "file") {
           formDataObject[key] = value;
         }
       }

       const { workinghours, ...rest } = formDataObject;
       const parsedWorkinghours = JSON.parse(workinghours);
       const formattedData = {
         ...rest,
         monday: parsedWorkinghours.monday || [],
         tuesday: parsedWorkinghours.tuesday || [],
         wednesday: parsedWorkinghours.wednesday || [],
         thursday: parsedWorkinghours.thursday || [],
         friday: parsedWorkinghours.friday || [],
         saturday: parsedWorkinghours.saturday || [],
         sunday: parsedWorkinghours.sunday || [],
       };

       const originalData = Object.fromEntries(
         Object.entries(formattedData).map(([key, value]) => {
           if (Array.isArray(value)) {
             return [key, value.join(",")];
           }
           return [key, value];
         })
       );
       console.log(originalData);
       const URLEncodedData = new URLSearchParams(originalData).toString();

       await axios.post(buildApiEndpoint("/shops/register"), URLEncodedData, {
         headers: {
           Authorization: `Bearer ${token}`,
           "Content-Type": "application/x-www-form-urlencoded",
         },
         transformRequest: axios.defaults.transformRequest,
       });

       if (response.status >= 200 && response.status < 300) {
         // Show success notification
         toast.success("Shop Created successfully!");
         setOpenAddProduct(false);

         setProductData({
           name: "",
           category: "barbers",
           price: "",
           description: "",
         });
         setFile(null);
         setPreview("");
       } else if (response.status === 403) {
         toast.success("You have reached the maximun allowed shops (3)");
       } else if (response.status === 400) {
         toast.error("Error Creating Shop");
       } else {
         // Show error notification
         toast.error("Failed to submit data. Please try again.");
       }
       setLoading(false);
     } catch (error) {
        toast.error(error);
        console.log(error);
     }
   };


  useEffect(() => {
    fetchShops(setShopData, page, totalPages);
  }, []);
  return (
    <>
      <ToastContainer />
      <div className='px-8 py-6'>
        <h1 className='text-4xl font-semibold text-gray-900'>Shop</h1>

        <p className='mt-12 text-xl text-gray-700'>
          Activate your shop in
          <Link className='text-indigo-500' to='/settings'>
            settings
          </Link>
          to start selling
        </p>

        <div className='pt-6 mt-12 border-t border-gray-200'>
          <h1 className='mb-6 text-4xl font-semibold text-gray-900'>
            Inventory
          </h1>

          <button
            type='button'
            className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm w-fit bg-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2'
            onClick={() => setOpenAddProduct(true)}>
            <PlusIcon className='w-5 h-5 mr-2 -ml-1' aria-hidden='true' />
            {isOwner() ? "Add Product" : "Add Shop"}
          </button>

          <Transition.Root show={openAddProduct} as={Fragment}>
            <Dialog
              as='div'
              className='relative z-10'
              onClose={() => setOpenAddProduct(false)}>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
              </Transition.Child>

              <div className='fixed inset-0 z-10 overflow-y-auto'>
                <div className='flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    enterTo='opacity-100 translate-y-0 sm:scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                    leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                    <Dialog.Panel className='relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm md:max-w-md sm:p-6'>
                      <div className='mt-5 md:col-span-2 md:mt-0'>
                        <form onSubmit={handleSubmit}>
                          <div className='overflow-hidden'>
                            <h1 className='mb-4 text-xl'>
                              {isOwner() ? "Create Product" : "Create Shop"}
                            </h1>
                            <div className='grid grid-cols-6 gap-6'>
                              <div className='col-span-6'>
                                <label
                                  htmlFor='shop_name'
                                  className='block text-sm font-medium text-gray-700'>
                                  {isOwner() ? "Product name" : " Shop name"}
                                </label>
                                <input
                                  type='text'
                                  name='shop_name'
                                  id='name'
                                  autoComplete='name'
                                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                  value={productData.shop_name}
                                  onChange={handleInputChange}
                                />
                              </div>

                              <div className='col-span-6'>
                                <label
                                  htmlFor='category'
                                  className='block text-sm font-medium text-gray-700'>
                                  Category
                                </label>
                                {isOwner() ? (
                                  <>
                                    <input
                                      type='text'
                                      name='category'
                                      id='category'
                                      className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  text-gray-500'
                                      value={productData.category}
                                      onChange={handleInputChange}
                                    />
                                  </>
                                ) : (
                                  <>
                                    <input
                                      type='text'
                                      name='category'
                                      id='category'
                                      disabled
                                      className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm cursor-not-allowed bg-gray-100 text-gray-500'
                                      value={productData.category}
                                      onChange={handleInputChange}
                                    />
                                  </>
                                )}
                              </div>

                              {/* Price */}
                              <div className='col-span-6'>
                                <label
                                  htmlFor='price'
                                  className='block text-sm font-medium text-gray-700'>
                                  Price
                                </label>
                                <div className='flex max-w-lg rounded-md shadow-sm'>
                                  <span className='inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm'>
                                    $
                                  </span>
                                  <input
                                    type='text'
                                    name='price'
                                    id='price'
                                    className='flex-1 block w-full min-w-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                    value={productData.price}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>

                              <div className='col-span-6'>
                                <label
                                  htmlFor='description'
                                  className='block text-sm font-medium text-gray-700'>
                                  {isOwner()
                                    ? "Product Description"
                                    : "Shop Description"}
                                </label>
                                <div className='mt-1'>
                                  <textarea
                                    id='description'
                                    name='description'
                                    rows={3}
                                    className='block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                    value={productData.description}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                <p className='mt-2 text-sm text-gray-500'>
                                  Brief description of your{" "}
                                  {isOwner() ? " Product" : " Shop"}
                                </p>
                              </div>

                              <div className='relative col-span-6'>
                                <label className='block text-sm font-medium text-gray-700'>
                                  {isOwner() ? "Product Image" : "Shop Image"}
                                </label>
                                <div
                                  className='flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md'
                                  onDragOver={handleDragOver}
                                  onDrop={handleDrop}>
                                  <div className='space-y-1 text-center'>
                                    {file ? (
                                      <img
                                        src={preview}
                                        alt='Preview'
                                        className='w-full h-auto mx-auto'
                                      />
                                    ) : (
                                      <svg
                                        className='w-12 h-12 mx-auto text-gray-400'
                                        stroke='currentColor'
                                        fill='none'
                                        viewBox='0 0 48 48'
                                        aria-hidden='true'>
                                        <path
                                          d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                          strokeWidth={2}
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                        />
                                      </svg>
                                    )}

                                    <div className='flex text-sm text-gray-600'>
                                      <label
                                        htmlFor='file-upload'
                                        className='relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'>
                                        <span>Upload a file</span>
                                        <input
                                          id='file-upload'
                                          name='file'
                                          type='file'
                                          accept='image/jpg, image/jpeg, image/png'
                                          className='sr-only'
                                          onChange={handleFileInputChange}
                                        />
                                      </label>
                                      <p className='pl-1'>or drag and drop</p>
                                    </div>
                                    <p className='text-xs text-gray-500'>
                                      PNG, JPG up to 1MB
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {isOwner() ? (
                            <></>
                          ) : (
                            <>
                              {/* Working Hours  */}
                              <div className='relative col-span-10 mt-6 gap-4'>
                                {daysOfWeek.map((day) => (
                                  <div
                                    key={day}
                                    className='flex flex-col justify-center  w-full items-start'>
                                    <label className='block text-[18px] text-left font-medium mt-6 text-gray-700'>
                                      {day}
                                    </label>
                                    <Select
                                      styles={customStyles}
                                      options={timeOptions}
                                      isMulti
                                      onChange={(selectedTimes) =>
                                        handleTimeChange(day, selectedTimes)
                                      }
                                      menuPortalTarget={document.body}
                                      components={{
                                        DropdownIndicator:
                                          customDropdownIndicator,
                                      }}
                                      className='w-full mt-4' // Use Tailwind CSS classes for width
                                    />
                                  </div>
                                ))}
                                <p className='mt-2 text-sm text-gray-500'>
                                  You can decide to make changes if you want.
                                  Your availability can be updated at a go!
                                </p>
                              </div>
                            </>
                          )}

                          <div className='relative inline-block text-left my-4 w-full'>
                            <div className='px-4 py-3 flex items-center justify-center mt-4 text-right bg-transparent sm:px-6'>
                              <button
                                type='submit'
                                className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-primaryDark shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2'>
                                {loading ? (
                                  <ImSpinner8 className='mx-auto animate-spin' />
                                ) : (
                                  <span>
                                    {isOwner()
                                      ? "Create Product"
                                      : "Create Shop"}
                                  </span>
                                )}
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
        </div>

        <h1 className='my-8'>Your Shops</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[20px] lg:mt-[55px]'>
          {isOwner() ? (
            <>
              {userProductData.map((item) => {
                return (
                  <ProductCard
                    data={item}
                    key={item._id}
                    displayModal={openAddProduct}
                  />
                );
              })}
            </>
          ) : (
            <>
              {barbersData.map((item) => {
                return (
                  <BarberCard
                    data={item}
                    key={item._id}
                    displayModal={openAddProduct}
                    token={token}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

const customDropdownIndicator = (props) => {
  return (
    <div className='text-gray-500' onClick={props.selectProps.onMenuOpen}>
      &#9660;
    </div>
  );
};

   const customStyles = {
     control: (provided) => ({
       ...provided,
       height: "auto",
       width: "100%",
       borderRadius: "4px",
       borderColor: "#a0aec0",
       boxShadow: "0 0 0 1px #a0aec0",
     }),

     multiValue: (provided) => ({
       ...provided,
       backgroundColor: "#CBD5E0",
     }),

     multiValueLabel: (provided) => ({
       ...provided,
       color: "#2d3748",
     }),

     multiValueRemove: (provided) => ({
       ...provided,
       color: "#718096",
       "&:hover": {
         backgroundColor: "#CBD5E0",
         color: "#2d3748",
       },
     }),

     dropdownIndicator: (provided) => ({
       ...provided,
       color: "#2d3748",
     }),

     menuPortal: (provided) => ({
       ...provided,
       zIndex: 9999, // Increase the z-index value as needed
     }),
   };

const BarberCard = ({ data, displayModal, token }) => {
   
   const [open
    , setOpen
     ] = useState(displayModal)
     const [loading, setLoading] = useState(false);
  const {
    _id,
    shop_name,
    description,
    price,
    contact_email,
    contact_number,
    shop_address,
    createdAt,
    images,
    whours
  } = data;

 
  


 
const handleDeleteShop = async (id) => {
 
   setLoading(true);
      try {
      const response = await axios.delete(
        buildApiEndpoint(`/shops/delete/${id}`),
       
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      
     if (response.status >= 200 && response.status < 300) {
       // Show success notification
       toast.success("Shop Deleted successfully!");
      

       
     } else if (response.status === 403) {
       toast.success("You have reached the maximun allowed shops (3)");
     } else if (response.status === 404) {
       toast.error("Couldn't get shop id");
     } 
     
     else if (response.status === 400) {
       toast.error("Error Creating Shop");
     } else {
       // Show error notification
       toast.error("Failed to submit data. Please try again.");
     }
     setLoading(false);

      
    } catch (error) {
     toast.error(error);
     console.log(error);
   }
  
}



  return (
    <div
      className='p-8  flex flex-col items-center justify-center rounded-lg shadow-card'
      data-aos='zoom-in'
      data-aos-duration='750'
      data-aos-delay='500'>
      <div className='h-auto  w-full flex items-center justify-center my-4'>
        <img
          src={images || "https://i.imgur.com/h9YQFtC.jpg"}
          alt={shop_name}
          className='h-full rounded-lg object-cover'
        />
      </div>
      <div className='flex flex-col justify-start items-start w-full'>
        <h2 className='text-xl font-semibold my-3 text-gray-800'>
          Shop name: {shop_name}
        </h2>
        <p className='text-gray-600 text-sm mb-2'>
          <strong>Description:</strong> {description}
        </p>
        <p className='text-gray-600 text-sm mb-2'>
          <strong>Price:</strong>${price}
        </p>
        <p className='text-gray-600 text-sm mb-2'>
          <strong>Email:</strong> {contact_email}
        </p>
        <p className='text-gray-600 text-sm mb-2'>
          <strong>Phone:</strong> {contact_number}
        </p>
        <p className='text-gray-600 text-sm mb-2'>
          <strong>Address:</strong> {shop_address}
        </p>
        <p className='text-gray-600 text-sm'>
          <strong>Created At:</strong>
          {new Date(createdAt).toLocaleDateString()}
        </p>

        {/* working hours  */}
        <div className='mt-[30px] w-full'>
          <p className='text-para mt-0 font-semibold text-headingColor '>
            Working Hours:
          </p>
          <ul className='mt-3 '>
            {Object.entries(whours.hours).map(([day, times]) => (
              <li
                key={day}
                className='flex items-center  w-full justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>
                  {day}
                </p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>
                  {times.length > 0
                    ? `${times[0]} - ${times[times.length - 1]}`
                    : "not available"}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons  */}
        <div className='flex items-center justify-between mt-4 -mb-4 w-full'>
          <button
            className='w-full rounded-lg py-2 bg-red-500 text-white'
            onClick={() => handleDeleteShop(_id)}>
            {loading ? (
              <ImSpinner8 className='mx-auto animate-spin' />
            ) : (
              <span>{isOwner() ? "Delete Product" : "Delete Shop"}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
const ProductCard = ({ data, displayModal, token }) => {
   
   const [open
    , setOpen
     ] = useState(displayModal)
     const [loading, setLoading] = useState(false);
  const {
    _id,
    category,
    shop_name,
    description,
    price,
    contact_email,
    createdAt,
    images,
    
  } = data;

 

 
const handleDeleteShop = async (id) => {
 
   setLoading(true);
      try {
      const response = await axios.delete(
        buildApiEndpoint(`/shops/delete/${id}`),
       
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      
     if (response.status >= 200 && response.status < 300) {
       // Show success notification
       toast.success("Shop Deleted successfully!");
      

       
     }  else if (response.status === 404) {
       toast.error("Couldn't get shop id");
     } 
     
     else if (response.status === 400) {
       toast.error("Error Creating Shop");
     } else {
       // Show error notification
       toast.error("Failed to submit data. Please try again.");
     }
     setLoading(false);

      
    } catch (error) {
     toast.error(error);
     console.log(error);
   }
  
}



  return (
    <div
      className='p-8  flex flex-col items-center justify-center rounded-lg shadow-card'
      data-aos='zoom-in'
      data-aos-duration='750'
      data-aos-delay='500'>
      <div className='h-auto  w-full flex items-center justify-center my-4'>
        <img
          src={images || "https://i.imgur.com/h9YQFtC.jpg"}
          alt={shop_name}
          className='h-[70%] rounded-lg object-cover'
        />
      </div>
      <div className='flex flex-col justify-start items-start w-full'>
        <h2 className='text-xl font-semibold my-3 text-gray-800'>
          Product name: {shop_name}
        </h2>
        <p className='text-gray-600 text-sm mb-2'>
          <strong>Description:</strong> {description}
        </p>
        <p className='text-gray-600 text-sm mb-2'>
          <strong>Category:</strong> {category}
        </p>
        <p className='text-gray-600 text-sm mb-2'>
          <strong>Price:</strong>${price}
        </p>
        <p className='text-gray-600 text-sm mb-2'>
          <strong>Email:</strong> {contact_email}
        </p>
      
      
        <p className='text-gray-600 text-sm'>
          <strong>Created At:</strong>
          {new Date(createdAt).toLocaleDateString()}
        </p>

      

        {/* Buttons  */}
        <div className='flex items-center justify-between mt-4 -mb-4 w-full'>
          <button
            className='w-full rounded-lg py-2 bg-red-500 text-white'
            onClick={() => handleDeleteShop(_id)}>
            {loading ? (
              <ImSpinner8 className='mx-auto animate-spin' />
            ) : (
              <span> Delete Product </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}