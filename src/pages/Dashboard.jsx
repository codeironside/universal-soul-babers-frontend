import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { getUserDetails } from '../api';

import {
  CalendarDaysIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

const cards = [
  { name: 'Appointments', href: '#', icon: CalendarDaysIcon, amount: '0' },
  { name: 'Customers', href: '#', icon: UserGroupIcon, amount: '0' },
  { name: 'Blog contents', href: '#', icon: DocumentTextIcon, amount: '0' },
  // More items...
]

import { classNames } from '../utils'
import { UserContext } from './UserPanel'

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

export default function () {

  useEffect(()=> {
     getUserDetails();
  },[])
  return (
    <main className="flex-1 pb-8">
      {/* <h1 className='text-4xl text-center mt-4'>Dashboard design and content coming soon</h1> */}

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

            {/* cards by copilot... */}
            {/* <div className="mt-2 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Appointments</dt>
                    <dd className="order-1 text-5xl font-extrabold text-cyan-600">0</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Customers</dt>
                    <dd className="order-1 text-5xl font-extrabold text-cyan-600">0</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Blog contents</dt>
                    <dd className="order-1 text-5xl font-extrabold text-cyan-600">0</dd>
                  </div>
                </dl>
              </div>
            </div> */}
          </div>

          <h2 className="mt-20 text-lg font-medium leading-6 text-gray-900">
            Let's get you started
          </h2>

          {/* todo: unduplicate */}
          <Card
            extraClasses='border mt-4'
          >
            {/* title, description and button */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Add your first blog</h3>
                <Link to='/appointments/new' className="text-sm font-medium text-cyan-700 hover:text-cyan-900">
                  Add blog
                </Link>
              </div>
              <p className="mt-1 text-sm text-gray-500">Add your first blog to get started with your business</p>
            </div>
          </Card>

          <Card
            extraClasses='border mt-4'
          >
            {/* title, description and button */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Visit forum</h3>
                <Link to='/forum' className="text-sm font-medium text-cyan-700 hover:text-cyan-900">
                  Visit forum
                </Link>
              </div>
              <p className="mt-1 text-sm text-gray-500">Discuss, ask questions and meet other barbers in the forum</p>

            </div>
          </Card>

          <Card
            extraClasses='border mt-4'
          >
            {/* title, description and button */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Inventory and shop</h3>
                <Link to='/appointments/new' className="text-sm font-medium text-cyan-700 hover:text-cyan-900">
                  Visit shop
                </Link>
              </div>
              <p className="mt-1 text-sm text-gray-500">Create shop, add product and sell them on the marketplace</p>

            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
