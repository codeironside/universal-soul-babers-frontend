import React from 'react'
import { ImSpinner8 } from "react-icons/im";

const BlogModal = ({ handleAddBlog, blogTitle, setBlogTitle, category, setCategory, setModalShow, loading}) => {
  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4">
    <div className="relative lg:w-4/12 w-11/12 my-6 mx-auto">
      <div
        style={{ overflowY: 'auto' }}
        className="border-0 h-54 py-6 md:px-20 px-10 rounded-lg shadow-lg relative flex flex-col bg-white w-full outline-none focus:outline-none"
      >
        {/*body*/}
        <h1
          className="text-center text-xl font-bold mb-4"
          style={{ color: "rgba(41, 44, 56, 1)" }}
        >
        Add Blog Post
        </h1>
      
        <input
         type="text"
         name="blog-title"
         onChange={(e)=> setBlogTitle(e.target.value)}
         value={blogTitle}
          placeholder="Blog Title"
          style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
          className="w-full mb-4 py-3 rounded-xl"
        />

          <input
         type="text"
         name="category"
          placeholder="Category"
          value={category}
          onChange={(e)=> setCategory(e.target.value)}
          style={{ border: "1px solid rgba(224, 229, 237, 1)" }}
          className="w-full mb-4 py-3 rounded-xl"
        />

        <button
        onClick={()=>handleAddBlog()}
          type="button"
          className="w-full py-3 flex items-center justify-center rounded-xl text-white mb-4"
          style={{ backgroundColor: "#977d46" }}
        >
          {
            loading === true?
            <ImSpinner8 />:
            <span>Save</span>
          }
        </button>
        {/* <CheckoutForm /> */}
        <button
          className="w-full py-3 rounded-xl text-white"
          onClick={()=> setModalShow(false)}
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

export default BlogModal