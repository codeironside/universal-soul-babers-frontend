import { Fragment, useState, useEffect } from 'react';
import { Dialog, Switch, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { classNames, getCookie } from '../utils';
import { Tab } from '@headlessui/react';
import axios from 'axios';

import UpdateImage from '../components/UpdateImage';
import ProfileImage from '../components/ProfileImage';

const componentMap = {
  General,
  Password,
  Plan,
};

const tabs = [
  { name: 'General' },
  { name: 'Password' },
  { name: 'Plan' },
];

export default function Settings() {
  const [tab, setTab] = useState(tabs[0].name);
  console.log(tab)
  const [user, setUser] = useState([]);
  const [userImage, setUserImage] = useState('')

  useEffect(() => {
    const token = getCookie('token');
    
    if (token) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(
            'https://unique-barbers.onrender.com/api/v1/users/one',
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          );

          const userData = response.data;
          setUser(userData.user);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      fetchUserDetails();
    }
  }, []);



  return (
    <main className="flex-1">
      <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
        <div className="pt-10 pb-16">
          <div className="px-4 sm:px-6 md:px-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Settings
            </h1>
          </div>
          <div className="px-4 sm:px-6 md:px-0">
            <div className="py-6">
              {/* Tabs */}
              <div className="lg:hidden">
                <label htmlFor="selected-tab" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="selected-tab"
                  name="selected-tab"
                  className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:border-primaryDark focus:outline-none focus:ring-primaryDark sm:text-sm"
                  defaultValue={tabs[0].name}
                  onChange={(e) => setTab(e.target.value)}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className="hidden lg:block">
                <div className="border-b border-gray-200">
                  <nav className="flex -mb-px space-x-8">
                    {tabs.map((t) => (
                      <button
                        key={t.name}
                        className={classNames(
                          tab === t.name
                            ? 'border-primaryDark text-primaryDark'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                        )}
                        onClick={() => setTab(t.name)}
                      >
                        {t.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Description list with inline editing */}
              <div className="mt-10 divide-y divide-gray-200">
                {tabs.map((component, index) => {
                  const ComponentName = componentMap[component.name];
                  if (ComponentName) {
                    return <ComponentName key={index} user={user} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function General({user}) {
  const [userImage, setUserImage] = useState('')
  
  const handleImageLoaded = (imageurl) => {
    setUserImage(imageurl)
  }
  consolw.log(user)
  return (
    <>
      <div className="space-y-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
        <p className="max-w-2xl text-sm text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <div className="mt-6">
        <dl className="divide-y divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">{`${user.firstName} ${user.lastName}`}</span>
              <span className="flex-shrink-0 ml-4">
                <button
                  type="button"
                  className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
            <dt className="text-sm font-medium text-gray-500">Photo</dt>
            <dd className="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">
                
                <ProfileImage />
              </span>
              <span className="flex items-start flex-shrink-0 ml-4 space-x-4">
                <UpdateImage onImageLoaded={handleImageLoaded} />
                
                <span className="text-gray-300" aria-hidden="true">
                  |
                </span>
                <button
                  type="button"
                  className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                >
                  Remove
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">{user.email}</span>
              <span className="flex-shrink-0 ml-4">
                <button
                  type="button"
                  className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
        </dl>
      </div>
      
      {/* Shop settings */}
       <div className="pt-10 mt-10 border-t border-gray-200">
        <div className="space-y-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Shop</h3>
          <p className="max-w-2xl text-sm text-gray-500">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <div className="mt-6">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">Store name</dt>
              <dd className="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">Chelsea's Store</span>
                <span className="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500">Store URL</dt>
              <dd className="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">
                  https://univacbaber.com/store/1
                </span>
                <span className="flex-shrink-0 ml-4">
                  {/* copy to clipboard button and handler */}
                  <button
                    type="button"
                    className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        'https://univacbaber.com/store/1'
                      );
                    }}
                  >
                    Copy
                  </button>
                  {/* <button
                    type="button"
                    className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                  >
                    Update
                  </button> */}
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
              <dt className="text-sm font-medium text-gray-500">
                Store Description
              </dt>
              <dd className="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">
                  We sell the best stuff around.
                </span>
                <span className="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">
                Social Sharing Image
              </dt>
              <dd className="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </span>
                <span className="flex items-start flex-shrink-0 ml-4 space-x-4">
                  <button
                    type="button"
                    className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                  >
                    Update
                  </button>
                  <span className="text-gray-300" aria-hidden="true">
                    |
                  </span>
                  <button
                    type="button"
                    className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                  >
                    Remove
                  </button>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}

function Password() {
  return (
    <>
      <div className="space-y-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Password
        </h3>
        <p className="max-w-2xl text-sm text-gray-500">
          Ensure your account is using a long, random password to stay secure.
        </p>
      </div>
      <div className="mt-6">
        <div className="max-w-4xl mx-auto">
          <label
            htmlFor="current-password"
            className="block text-sm font-medium text-gray-700"
          >
            Current Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="current-password"
              id="current-password"
              autoComplete="current-password"
              className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-primaryDark focus:border-primaryDark"
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="max-w-4xl mx-auto">
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                name="new-password"
                id="new-password"
                autoComplete="new-password"
                className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-primaryDark focus:border-primaryDark"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="max-w-4xl mx-auto">
            <label
              htmlFor="confirm-new-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                name="confirm-new-password"
                id="confirm-new-password"
                autoComplete="confirm-new-password"
                className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-primaryDark focus:border-primaryDark"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="max-w-4xl mx-auto">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primaryDark hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-primaryDark"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Notifications() {
  return (
    <>
      <div className="space-y-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Notifications
        </h3>
        <p className="max-w-2xl text-sm text-gray-500">
          We'll always let you know about important changes, but you pick what
          else you want to hear about.
        </p>
      </div>
      <div className="mt-6">
        <fieldset>
          <legend className="text-base font-medium text-gray-900">
            By Email
          </legend>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-primaryDark text-primaryDark"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="comments" className="font-medium text-gray-700">
                  Comments
                </label>
                <p className="text-gray-500">
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-primaryDark text-primaryDark"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="candidates"
                  className="font-medium text-gray-700"
                >
                  Candidates
                </label>
                <p className="text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-primaryDark text-primaryDark"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="offers" className="font-medium text-gray-700">
                  Offers
                </label>
                <p className="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className="text-base font-medium text-gray-900">
            Push Notifications
          </legend>
          <p className="text-sm text-gray-500">
            These are delivered via SMS to your mobile phone.
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                id="push_everything"
                name="push_notifications"
                type="radio"
                className="w-4 h-4 border-gray-300 focus:ring-primaryDark text-primaryDark"
              />
              <label
                htmlFor="push_everything"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                Everything
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="push_email"
                name="push_notifications"
                type="radio"
                className="w-4 h-4 border-gray-300 focus:ring-primaryDark text-primaryDark"
              />
              <label
                htmlFor="push_email"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                Same as email
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="push_nothing"
                name="push_notifications"
                type="radio"
                className="w-4 h-4 border-gray-300 focus:ring-primaryDark text-primaryDark"
              />
              <label
                htmlFor="push_nothing"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                No push notifications
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}

function Plan() {
  return (
    <>
      <div className="space-y-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Plan</h3>
        <p className="max-w-2xl text-sm text-gray-500">
          Change your plan, cancel anytime.
        </p>
      </div>
      <div className="mt-6">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Monthly Billing
              </h3>
              <p className="max-w-2xl mt-1 text-sm text-gray-500">
                All the basics for starting a new business
              </p>
            </div>
            <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="flex justify-between py-3 text-sm font-medium">
                  <dt className="text-gray-500">Price</dt>
                  <dd className="text-gray-900">$29 / month</dd>
                </div>
                <div className="flex justify-between py-3 text-sm font-medium">
                  <dt className="text-gray-500">Features</dt>
                  <dd className="text-gray-900">Up to 5 active job postings</dd>
                </div>
                <div className="flex justify-between py-3 text-sm font-medium">
                  <dt className="text-gray-500">Importing</dt>
                  <dd className="text-gray-900">Easy CSV import</dd>
                </div>
                <div className="flex justify-between py-3 text-sm font-medium">
                  <dt className="text-gray-500">Analytics</dt>
                  <dd className="text-gray-900">Basic dashboard</dd>
                </div>
                <div className="flex justify-between py-3 text-sm font-medium">
                  <dt className="text-gray-500">Support</dt>
                  <dd className="text-gray-900">Email support</dd>
                </div>
              </dl>
              <div className="px-4 py-5 border-t border-gray-200 sm:px-6">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-8 py-2 text-base font-medium text-white border border-transparent rounded-md bg-primaryDark hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2 sm:w-auto"
                >
                  Change plan
                </button>
              </div>
              <div className="px-4 py-5 sm:px-6">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-primaryDark hover:text-primaryDark"
                  >
                    Change your plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

