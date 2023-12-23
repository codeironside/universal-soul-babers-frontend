import {
  Fragment,
  useEffect,
  useState,
  createContext,
  useContext,
} from 'react';
import textLogo from '../assets/img/Universoul.png';
import { Dialog, Menu, Transition } from '@headlessui/react';

import {
  Bars3CenterLeftIcon,
  BellIcon,
  CogIcon,
  CalendarDaysIcon,
  HomeIcon,
  DocumentTextIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
  UserIcon,
  CurrencyDollarIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';

import { Link, Navigate, useNavigate } from 'react-router-dom';

import { getCookie, isLoggedIn, deleteAllCookies, isOwner } from '../utils';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  // { name: 'Appointments', href: '/appointments', icon: CalendarDaysIcon },
  // { name: 'Services', href: '/services', icon: BriefcaseIcon },
  // { name: 'Barbers', href: '/my-barbers', icon: HomeIcon },
  // { name: 'Customers', href: '/customers', icon: UserGroupIcon },
  { name: 'Inventory & Shop', href: '/my-store', icon: BuildingStorefrontIcon },
  { name: 'Crowd Funding', href: '/funding', icon: CurrencyDollarIcon },
  { name: 'Forum', href: '/forum', icon: ChatBubbleBottomCenterTextIcon },
  // { name: 'Financial Management', href: '#', icon: BanknotesIcon },
  // { name: 'Reporting and Analytics', href: '#', icon: DocumentChartBarIcon },
];

const ownerNav = [
  { name: 'Dashboard', href: '/owner', icon: HomeIcon },
  { name: 'Blog', href: '/owner/blog', icon: DocumentTextIcon },
  { name: 'Notifications', href: '/owner/notifications', icon: BellIcon },
  { name: 'Users', href: '/owner/users', icon: UserIcon },
];

const secondaryNavigation = [
  { name: 'Settings', href: '/settings', icon: CogIcon }
];

const announcements = [
  {
    id: 1,
    title: 'Office closed on July 2nd',
    href: '#',
    preview:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'New password policy',
    href: '#',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    href: '#',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
];

import { classNames } from '../utils';
import ProfileImage from '../components/ProfileImage';
import { ImageProvider } from '../context/ImageContext';

export const UserContext = createContext();

export default function UserPanel({ fragment, owner = false }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(getCookie('user'));

  function logout() {
    deleteAllCookies();
    navigate('/login');
  }

  useEffect(() => {
    if (owner && user.role !== 'OWNER') navigate('/login');
  }, []);

  if (!isLoggedIn()) return <Navigate to="/login" />;

  return (
    <ImageProvider>
      <UserContext.Provider value={user}>
        {/*<div className="min-h-screen">*/}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gradient-to-b from-primaryColor to-black">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 pt-2 -mr-12">
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <_CommonSidebarNav extra="flex-shrink-0" />
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-gradient-to-b from-primaryColor to-black">
            <_CommonSidebarNav extra="flex flex-1 flex-col" />
          </div>
        </div>

        <div className="flex flex-col flex-1 lg:pl-64">
          <div className="flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:border-none">
            <button
              type="button"
              className="px-4 text-gray-400 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            {/* Search bar */}
            <div className="flex justify-between flex-1 px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div
                      className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                      aria-hidden="true"
                    >
                      <MagnifyingGlassIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search features or sub-features"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center ml-4 md:ml-6">
                {/* Notification dropdown */}
                {!isOwner() && (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-warm-gray-500 focus:ring-offset-2">
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg w-60 lg:w-96 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <div className="overflow-hidden">
                            <div className="p-6">
                              <h2
                                className="text-base font-medium text-gray-900"
                                id="announcements-title"
                              >
                                Announcements
                              </h2>
                              <div className="flow-root mt-6">
                                <ul
                                  role="list"
                                  className="-my-5 divide-y divide-gray-200"
                                >
                                  {announcements.map((announcement) => (
                                    <li key={announcement.id} className="py-5">
                                      <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                                        <h3 className="text-sm font-semibold text-gray-800">
                                          <a
                                            href={announcement.href}
                                            className="hover:underline focus:outline-none"
                                          >
                                            {/* Extend touch target to entire panel */}
                                            <span
                                              className="absolute inset-0"
                                              aria-hidden="true"
                                            />
                                            {announcement.title}
                                          </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                          {announcement.preview}
                                        </p>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-6">
                                <a
                                  href="#"
                                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                                >
                                  View all
                                </a>
                              </div>
                            </div>
                          </div>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-warm-gray-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                      <ProfileImage />
                      <span className="hidden ml-3 text-sm font-medium text-gray-700 lg:block">
                        <span className="sr-only">Open user menu for </span>
                        {user.userName}
                      </span>
                      <ChevronDownIcon
                        className="flex-shrink-0 hidden w-5 h-5 ml-1 text-gray-400 lg:block"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {!isOwner() && (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Home
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/profile"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/settings"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      )}
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/login"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                            onClick={logout}
                          >
                            Logout
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {fragment}
        </div>
        {/*</div>*/}
      </UserContext.Provider>
    </ImageProvider>
  );
}

function _CommonSidebarNav({ extra }) {
  const user = useContext(UserContext);

  return (
    <>
      {/* design particles */}
      <div
        className="absolute inset-0 pointer-events-none sm:hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          width="343"
          height="388"
          viewBox="0 0 343 388"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
            fill="url(#linear1)"
            fillOpacity=".1"
          ></path>
          <defs>
            <linearGradient
              id="linear1"
              x1="254.553"
              y1="107.554"
              x2="961.66"
              y2="814.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          width="359"
          height="339"
          viewBox="0 0 359 339"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
            fill="url(#linear2)"
            fillOpacity=".1"
          ></path>
          <defs>
            <linearGradient
              id="linear2"
              x1="192.553"
              y1="28.553"
              x2="899.66"
              y2="735.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          width="160"
          height="678"
          viewBox="0 0 160 678"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
            fill="url(#linear3)"
            fillOpacity=".1"
          ></path>
          <defs>
            <linearGradient
              id="linear3"
              x1="192.553"
              y1="325.553"
              x2="899.66"
              y2="1032.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Link className="flex items-center flex-shrink-0 px-4 mb-4" to="/">
        <img className="w-32 ml-4" src={textLogo} alt="UnivaBaber logo text" />
      </Link>

      <nav
        className={`mt-5 divide-y divide-warm-gray-900 overflow-y-auto ${extra}`}
        aria-label="Sidebar"
      >
        <div className="px-2 space-y-1">
          {user.role === 'USER'
            ? navigation.map((item) => (
                // <div key={item.name} onClick={() => setSidebarOpen(false)}>
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    window.location.pathname === item.href
                      ? 'bg-warm-gray-900 '
                      : 'hover:bg-warm-gray-400 hover:bg-opacity-50',
                    'text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className="flex-shrink-0 w-6 h-6 mr-4"
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
                // </div>
              ))
            : ownerNav.map((item) => (
                // <div key={item.name} onClick={() => setSidebarOpen(false)}>
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    window.location.pathname === item.href
                      ? 'bg-warm-gray-900 '
                      : 'hover:bg-warm-gray-400 hover:bg-opacity-50',
                    'text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className="flex-shrink-0 w-6 h-6 mr-4"
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
                // </div>
              ))}
        </div>
        <div className="pt-6 mt-6">
          <div className="px-2 space-y-1">
            {user.role === 'USER' &&
              secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    window.location.pathname === item.href
                      ? 'bg-warm-gray-900 '
                      : '',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-white'
                  )}
                >
                  <item.icon className="w-6 h-6 mr-4" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
      </nav>
    </>
  );
}

// import { Tab } from '@headlessui/react'

// function MyTabs() {
//   return (
//     <Tab.Group vertical={true}>
//       <Tab.List>
//         <Tab>Tab 1</Tab>
//         <Tab>Tab 2</Tab>
//         <Tab>Tab 3</Tab>
//       </Tab.List>
//       <TabPanels />
//     </Tab.Group>
//   )
// }

// function TabPanels() {
//   return (
//     <Tab.Panels>
//       <Tab.Panel>Content 1</Tab.Panel>
//       <Tab.Panel>Content 2</Tab.Panel>
//       <Tab.Panel>Content 3</Tab.Panel>
//     </Tab.Panels>
//   )
// }
