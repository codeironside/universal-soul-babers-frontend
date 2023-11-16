import { useState } from 'react'


import { tinyMCEInit } from '../utils'
import Card from '../components/Card'

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import MyBlogs from '../components/MyBlogs'

export default function () {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className='mx-auto max-w-lg py-8 px-6 lg:max-w-4xl xl:max-w-6xl'>
      <h2 className="text-lg font-semibold text-gray-900">Blog</h2>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <h1 className="text-xl font-extrabold text-gray-900">My Blogs</h1>
          <MyBlogs />
        </div>


        <div className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {/* Main Section */}
          <Card>
            <Editor
              tinymceScriptSrc={'/tinymce/tinymce.min.js'}
              onInit={(evt, editor) => editorRef.current = editor}
              // initialValue='<p>This is the initial content of the editor.</p>'
              init={tinyMCEInit}
            />
          </Card>
        </div>
      </div>
    </div>
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
        className="bg-blue-500 text-white px-4 py-2 rounded float-right mb-4"
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