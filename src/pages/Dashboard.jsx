import { Fragment, useEffect, useState } from 'react'
import textLogo from '../assets/img/Universoul.png'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3CenterLeftIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'History', href: '#', icon: ClockIcon, current: false },
  { name: 'Balances', href: '#', icon: ScaleIcon, current: false },
  { name: 'Cards', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Recipients', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Reports', href: '#', icon: DocumentChartBarIcon, current: false },
]
const secondaryNavigation = [
  { name: 'Settings', href: '#', icon: CogIcon },
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  // More items...
]
const transactions = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
]
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
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
        <main className="flex-1 pb-8">
          {/* Page header */}
          <div className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                <div className="min-w-0 flex-1">
                  {/* Profile */}
                  <div className="flex items-center">
                    <img
                      className="hidden h-16 w-16 rounded-full sm:block"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 rounded-full sm:hidden"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                          alt=""
                        />
                        <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                          Good morning, Emilia Birch
                        </h1>
                      </div>
                      <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                        <dt className="sr-only">Company</dt>
                        <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                          <BuildingOfficeIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          Duke street studio
                        </dd>
                        <dt className="sr-only">Account status</dt>
                        <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                          <CheckCircleIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                            aria-hidden="true"
                          />
                          Verified account
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-warm-gray-500 focus:ring-offset-2"
                  >
                    Add money
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-primaryDark px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Send money
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg font-medium leading-6 text-gray-900">Overview</h2>
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                {cards.map((card) => (
                  <div key={card.name} className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="truncate text-sm font-medium text-gray-500">{card.name}</dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                      <div className="text-sm">
                        <Link to={card.to} className="font-medium text-cyan-700 hover:text-cyan-900">
                          View all
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
              Recent activity
            </h2>

            {/* Activity list (smallest breakpoint only) */}
            <div className="shadow sm:hidden">
              <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                {transactions.map((transaction) => (
                  <li key={transaction.id}>
                    <Link to={transaction.to} className="block bg-white px-4 py-4 hover:bg-gray-50">
                      <span className="flex items-center space-x-4">
                        <span className="flex flex-1 space-x-2 truncate">
                          <BanknotesIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                          <span className="flex flex-col truncate text-sm text-gray-500">
                            <span className="truncate">{transaction.name}</span>
                            <span>
                              <span className="font-medium text-gray-900">{transaction.amount}</span>{' '}
                              {transaction.currency}
                            </span>
                            <time dateTime={transaction.datetime}>{transaction.date}</time>
                          </span>
                        </span>
                        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <nav
                className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
                aria-label="Pagination"
              >
                <div className="flex flex-1 justify-between">
                  <Link
                    to="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    Previous
                  </Link>
                  <Link
                    to="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    Next
                  </Link>
                </div>
              </nav>
            </div>

            {/* Activity table (small breakpoint and up) */}
            <div className="hidden sm:block">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mt-2 flex flex-col">
                  <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th
                            className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                            scope="col"
                          >
                            Transaction
                          </th>
                          <th
                            className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                            scope="col"
                          >
                            Amount
                          </th>
                          <th
                            className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                            scope="col"
                          >
                            Status
                          </th>
                          <th
                            className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                            scope="col"
                          >
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {transactions.map((transaction) => (
                          <tr key={transaction.id} className="bg-white">
                            <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                              <div className="flex">
                                <Link to={transaction.href} className="group inline-flex space-x-2 truncate text-sm">
                                  <BanknotesIcon
                                    className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                  <p className="truncate text-gray-500 group-hover:text-gray-900">
                                    {transaction.name}
                                  </p>
                                </Link>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                              <span className="font-medium text-gray-900">{transaction.amount}</span>
                              {transaction.currency}
                            </td>
                            <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                              <span
                                className={classNames(
                                  statusStyles[transaction.status],
                                  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                )}
                              >
                                {transaction.status}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                              <time dateTime={transaction.datetime}>{transaction.date}</time>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* Pagination */}
                    <nav
                      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                      aria-label="Pagination"
                    >
                      <div className="hidden sm:block">
                        <p className="text-sm text-gray-700">
                          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                          <span className="font-medium">20</span> results
                        </p>
                      </div>
                      <div className="flex flex-1 justify-between sm:justify-end">
                        <Link
                          to="#"
                          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Previous
                        </Link>
                        <Link
                          to="#"
                          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Next
                        </Link>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/*</div>*/}
    </>
  )
}

function _CommonSidebarNav({ extra }) {
  return (
    <>
      {/* design particles */}
      <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true"><svg className="absolute inset-0 h-full w-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1"></path><defs><linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs></svg></div>
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden" aria-hidden="true"><svg className="absolute inset-0 h-full w-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1"></path><defs><linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs></svg></div>
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block" aria-hidden="true"><svg className="absolute inset-0 h-full w-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1"></path><defs><linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs></svg></div>

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
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current ? 'bg-warm-gray-900 ' : 'hover:bg-warm-gray-400 hover:bg-opacity-50',
                'text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon className="mr-4 h-6 w-6 flex-shrink-0" aria-hidden="true" />
              {item.name}
            </Link>
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