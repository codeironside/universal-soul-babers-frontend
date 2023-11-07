import { Fragment, useEffect, useState } from 'react'
import textLogo from '../assets/img/Universoul.png'
import { Dialog, Menu, Transition } from '@headlessui/react'

import {
  Bars3CenterLeftIcon,
  BellIcon,
  CogIcon,
  CalendarDaysIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  UsersIcon,
  UserGroupIcon,
  XMarkIcon,
  BanknotesIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Appointments', href: '/appointments', icon: CalendarDaysIcon },
  { name: 'Services', href: '/services', icon: BriefcaseIcon },
  { name: 'Barbers', href: '/my-barbers', icon: UsersIcon },
  { name: 'Customers', href: '#', icon: UserGroupIcon },
  { name: 'Inventory & Shop', href: '#', icon: BuildingStorefrontIcon },
  { name: 'Financial Management', href: '#', icon: BanknotesIcon },
  { name: 'Reporting and Analytics', href: '#', icon: DocumentChartBarIcon },
]

const secondaryNavigation = [
  { name: 'Settings', href: '/settings', icon: CogIcon },
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]

import { classNames } from '../utils'

export default function Dashboard({ fragment }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {

  }, []);

  return (
    <>
      {/*<div className="min-h-screen">*/}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gradient-to-b from-primaryColor to-black pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <_CommonSidebarNav extra="flex-shrink-0" />
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto bg-gradient-to-b from-primaryColor to-black pt-5 pb-4">
          <_CommonSidebarNav extra="flex flex-1 flex-col" />
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:pl-64">
        <div className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          {/* Search bar */}
          <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            <div className="flex flex-1">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    name="search-field"
                    className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search transactions"
                    type="search"
                  />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-warm-gray-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-warm-gray-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                      <span className="sr-only">Open user menu for </span>Emilia Birch
                    </span>
                    <ChevronDownIcon
                      className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
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
    </>
  )
}

function _CommonSidebarNav({ extra }) {
  return (
    <>
      {/* design particles */}
      <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true"><svg className="absolute inset-0 h-full w-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fillOpacity=".1"></path><defs><linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient></defs></svg></div>
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden" aria-hidden="true"><svg className="absolute inset-0 h-full w-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fillOpacity=".1"></path><defs><linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient></defs></svg></div>
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block" aria-hidden="true"><svg className="absolute inset-0 h-full w-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fillOpacity=".1"></path><defs><linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient></defs></svg></div>

      <div className="flex flex-shrink-0 items-center px-4 mb-4">
        <img
          className="w-32 ml-4"
          src={textLogo}
          alt="UnivaBaber logo text"
        />
      </div>
      <nav className={`mt-5 divide-y divide-warm-gray-900 overflow-y-auto ${extra}`} aria-label="Sidebar">
        <div className="space-y-1 px-2">
          {navigation.map((item) => (
            // <div key={item.name} onClick={() => setSidebarOpen(false)}>
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                window.location.pathname === item.href ? 'bg-warm-gray-900 ' : 'hover:bg-warm-gray-400 hover:bg-opacity-50',
                'text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon className="mr-4 h-6 w-6 flex-shrink-0" aria-hidden="true" />
              {item.name}
            </Link>
            // </div>
          ))}
        </div>
        <div className="mt-6 pt-6">
          <div className="space-y-1 px-2">
            {secondaryNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-white"
              >
                <item.icon className="mr-4 h-6 w-6" aria-hidden="true" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
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