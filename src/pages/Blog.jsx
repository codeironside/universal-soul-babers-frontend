import {ArrowLongLeftIcon, ArrowLongRightIcon} from '@heroicons/react/20/solid'
import {FaSpinner} from "react-icons/fa6";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { getPosts } from '../api';
import { scrollToTop } from '../ScollToTop';


function calculateReadingTime(content) {
  const wordCount = content.split(/\s+/).length;
  const readingTime = wordCount / 200

  return Math.ceil(readingTime);
}

function formatDate(datetime) {
  const options = {day: '2-digit', month: 'long', year: 'numeric'}
  const formattedDate = new Date(datetime).toLocaleDateString('en-US', options)

  return formattedDate;
}

export default function Blog() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
       const postsData = await getPosts();
       setPosts(postsData.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchPosts();
    scrollToTop();
  }, []);


  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">

      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent blog posts</h2>
        {posts && <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src={post.media_url} alt=""/>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category} className="hover:underline">
                      {post.category}
                    </a>
                  </p>
                  <Link to={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.blog_title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </Link>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href={post.owner_id}>
                      <span className="sr-only">{post.owner_name}</span>
                      <img className="w-10 h-10 rounded-full" src={post.media_url} alt=""/>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.owner_id} className="hover:underline">
                        {post.owner_name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={formatDate(post.createdAt)}>{formatDate(post.createdAt)}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{calculateReadingTime(post.content)}min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>))
          }
        </div>}
        

        <div className="relative">
          {isLoading &&
            <div
              className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-white bg-opacity-70">
              <FaSpinner className="w-16 h-16 text-primaryDark animate-spin"/>
            </div>
          }

          <h2 className="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All posts</h2>
         {posts && <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (<div key={post._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src={post.media_url} alt=""/>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <Link to={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.blog_title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </Link>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href={post.owner_id}>
                      <span className="sr-only">{post.owner_name}</span>
                      <img className="w-10 h-10 rounded-full" src={post.media_url} alt=""/>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.owner_id} className="hover:underline">
                        {post.owner_name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={formatDate(post.createdAt)}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{calculateReadingTime(post.content)} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>),)}
            {posts.map((post) => (<div key={post._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src={post.media_url} alt=""/>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <Link to={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.blog_title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </Link>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href={post.owner_id}>
                      <span className="sr-only">{post.owner_name}</span>
                      <img className="w-10 h-10 rounded-full" src={post.media_url} alt=""/>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.owner_id} className="hover:underline">
                        {post.owner_name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={formatDate(post.createdAt)}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{calculateReadingTime(post.content)} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>),)}
            {posts.map((post) => (<div key={post._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src={post.media_url} alt=""/>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <Link to={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.blog_title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </Link>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href={post.owner_id}>
                      <span className="sr-only">{post.owner_name}</span>
                      <img className="w-10 h-10 rounded-full" src={post.media_url} alt=""/>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.owner_id} className="hover:underline">
                        {post.owner_name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={formatDate(post.createdAt)}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{calculateReadingTime(post.content)} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>),)}
            {posts.map((post) => (<div key={post._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src={post.media_url} alt=""/>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}

                    </a>
                  </p>
                  <Link to={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.blog_title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </Link>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href={post.owner_id}>
                      <span className="sr-only">{post.owner_name}</span>
                      <img className="w-10 h-10 rounded-full" src={post.media_url} alt=""/>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.owner_id} className="hover:underline">
                        {post.owner_name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={formatDate(post.createdAt)}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{calculateReadingTime(post.content)} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>),)}
          </div> }
        </div>

        <nav className="flex items-center justify-between px-4 mt-12 border-t border-gray-200 sm:px-0">
          <div className="flex flex-1 w-0 -mt-px">
            <a
              href="#"
              className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              <ArrowLongLeftIcon className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true"/>
              Previous
            </a>
          </div>
          <div className="hidden md:-mt-px md:flex">
            <a
              href="#"
              className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              1
            </a>
            {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
            <a
              href="#"
              className="inline-flex items-center px-4 pt-4 text-sm font-medium text-indigo-600 border-t-2 border-indigo-500"
              aria-current="page"
            >
              2
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              3
            </a>
            <span
              className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent">
              ...
            </span>
            <a
              href="#"
              className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              8
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              9
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              10
            </a>
          </div>
          <div className="flex justify-end flex-1 w-0 -mt-px">
            <a
              href="#"
              className="inline-flex items-center pt-4 pl-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Next
              <ArrowLongRightIcon className="w-5 h-5 ml-3 text-gray-400" aria-hidden="true"/>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
