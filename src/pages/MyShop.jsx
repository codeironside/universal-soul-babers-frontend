import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { addProduct } from "../api/product";

export default function () {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [shopName, setShopName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const maxSize = 1 * 1024 * 1024; // 1MB in bytes

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
      alert('File size exceeds 1MB. Please choose a smaller file.');
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
      setPreview('');
    }
  };

  const handleAddProduct = ()=> {
    
    const values = JSON.stringify({
      shop_name: shopName,
      category: category,
      description: description,
      minimum_price: price,
      image: file,
    });

    console.log(values)
       addProduct(values);
  }

  return (
    <>
      <div className="px-8 py-6">
        <h1 className="text-4xl font-semibold text-gray-900">Shop</h1>

        <p className="mt-12 text-xl text-gray-700">
          Activate your shop in <Link className="text-indigo-500" to="/settings">settings</Link> to start selling
        </p>

  
        <div className="border-t border-gray-200 mt-12 pt-6">
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">Inventory</h1>

          <button
            type="button"
            className="w-fit inline-flex items-center justify-center rounded-md border border-transparent bg-primaryDark px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
            onClick={() => setOpenAddProduct(true)}
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add product
          </button>

          <Transition.Root show={openAddProduct} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpenAddProduct}>
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
                            <h1 className="mb-4 text-xl">Add product</h1>
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6">
                                <label
                                  htmlFor="last-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Product name
                                </label>
                                <input
                                  onChange={(e)=> setShopName(e.target.value)}
                                  value={shopName}
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
                                  Category
                                </label>
                                <input
                                  onChange={(e)=> setCategory(e.target.value)}
                                  value={category}
                                  type="text"
                                  autoComplete="email"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                                    $
                                  </span>
                                  <input
                                    onChange={(e)=> setPrice(e.target.value)}
                                    value={price}
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>
                              </div>

                              <div className="col-span-6">
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">Product Description</label>
                                <div className="mt-1">
                                  <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    value={description}
                                    onChange={(e)=> setDescription(e.target.value)}
                                  />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">Brief description for your product.</p>
                              </div>

                              <div className="col-span-6 relative">
                                <label className="block text-sm font-medium text-gray-700">Product Image</label>
                                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                                  onDragOver={handleDragOver}
                                  onDrop={handleDrop}>
                                  <div className="space-y-1 text-center">
                                    {file ? <img src={preview} alt="Preview" className="w-12 h-auto mx-auto" /> : (
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
                                    )}

                                    <div className="flex text-sm text-gray-600">
                                      <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                      >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" accept=".jpg,.jpeg,.png" className="sr-only" onChange={handleFileInputChange} />
                                      </label>
                                      <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG up to 1MB</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 mt-4">
                              <button
                              onClick={()=> handleAddProduct()}
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-primaryDark py-2 px-4 text-sm font-medium text-white shadow-smfocus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                              >
                                Save product
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

      </div>
    </>
  )
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
                              disabled={true}
                            />
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
                                    <input 
                                     onChange={(e) => setFile(e.target.files[0])}
                                    id="file-upload" name="file-upload" type="file" className="sr-only" />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG up to 1MB</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 mt-4">
                          <button
                            onClick={()=> handleAddProduct()}
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
