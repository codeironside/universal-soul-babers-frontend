import { tinyMCEInit } from '../utils'
import Card from '../components/Card'
import { addBlogPost } from "../api/blog";
import React, { useState,useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import MyBlogs from '../components/MyBlogs'
import { ToastContainer } from "react-toastify";
import BlogModal from '../components/BlogModal';
  

export default function () {
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [category, setCategory] = useState("");
  const [showModal, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };
  const clearEditorContent = () => {
    if (editorRef.current) {
      editorRef.current.setContent('');
    }
  };

  const tinyMCEInit = {
    // Your TinyMCE configuration options here
    // ...
    setup: (editor) => {
      editor.on('change', () => {
        handleEditorChange(editor.getContent());
      });
    },
  };

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

const handleAddBlog = () => {
  if(blogTitle === "" || category === "" || editorContent === ""){
    return;
  }
      setLoading(true);
  const values = JSON.stringify({
    blog_title: blogTitle, 
    category: category,
    content: editorContent,
  });
    addBlogPost(values, (()=> {
      setModalShow(false)
      setEditorContent("");
      setLoading(false);
      clearEditorContent();
    }));

  }

  return (
    <>
    <div className='max-w-lg px-6 pt-8 pb-20 mx-auto lg:max-w-4xl xl:max-w-6xl'>
      <h2 className="text-lg font-semibold text-gray-900">Blog</h2>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <h1 className="text-xl font-extrabold text-gray-900">My Blogs</h1>
          <MyBlogs />
        </div>


        <div className="mt-4 text-sm leading-6 divide-y divide-gray-100 lg:col-span-7 xl:col-span-8">
          {/* Main Section */}
          <Card>
            <Editor
              tinymceScriptSrc={'/tinymce/tinymce.min.js'}
              onInit={(evt, editor) => editorRef.current = editor}
              // initialValue='<p>This is the initial content of the editor.</p>'
              init={tinyMCEInit}
            />
          </Card>


          <div className='bg-red-400 relative'>
          <button 
          onClick={()=> setModalShow(true)}
                        style={{ backgroundColor: "#977d46" }}
                        class="text-white focus:ring-4 absolute right-0 mt-5 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  me-2 mb-2 focus:outline-none"
          >Create blog</button>
          </div>
        </div>
      </div>
    </div>

{
  showModal &&
  <BlogModal
  handleAddBlog={handleAddBlog}
    blogTitle={blogTitle}
    setBlogTitle={setBlogTitle}
    category={category}
    setCategory={setCategory}
    setModalShow={setModalShow}
    loading={loading}
/>
}
   
<ToastContainer position="top-center" />

    </>
  )
}

export const NotificationList = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, sender: 'John Doe', message: 'Hello! How are you?', read: false },
    { id: 2, sender: 'Jane Smith', message: 'Meeting at 3 PM', read: true },
    { id: 3, sender: 'Sam Brown', message: 'Don\'t forget to submit the report.', read: false },
  ]);

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true
    }));
    setNotifications(updatedNotifications);
  };

  return (
    <div className="p-8">
      <button
        className="float-right px-4 py-2 mb-4 text-white bg-blue-500 rounded"
        onClick={markAllAsRead}
      >
        Mark All as Read
      </button>

      <ul className="list-none">
        {notifications.map(notification => (
          <li key={notification.id} className={notification.read ? 'mb-4' : 'mb-4 font-bold'}>
            <span className="text-lg">{notification.sender}: </span>
            <span>{notification.message.length > 30 ? notification.message.slice(0, 30) + '...' : notification.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
