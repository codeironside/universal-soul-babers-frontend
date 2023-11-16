import { Fragment, useEffect } from "react"
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { classNames } from "../utils"

const notiOptions = [
  { name: 'Delete', action: () => console.log('Delete') },
]

export default function () {

  useEffect(() => {
    document.title = 'Notifications'
    document.body.classList.add('bg-gray-100')
  }, [])

  return (
    <div className="relative px-4 pt-8 pb-20 sm:px-6 lg:px-8 2xl:pt-24 lg:pb-28">

      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">View Notification</h2>

        <div className='mt-10'>
          <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
            <div className="divide-y divide-gray-200">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <h2 id="notes-title" className="text-lg font-medium text-gray-900">Title: New Update</h2>
                <NotiMenu />
              </div>
              <div className="px-4 py-6 sm:px-6">
                <div className="flex items-center gap-2">
                  <p className="font-medium">Read by:</p>
                  <div className="isolate flex -space-x-2 overflow-hidden">
                    <img
                      className="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="relative z-20 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="relative z-10 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="relative z-0 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <a href="#" className="underline text-sm text-blue-600 hover:text-blue-500">
                    See all
                  </a>
                </div>

                {/* lorem ipsum */}
                <div className="mt-4 space-y-6 text-sm text-gray-500">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                    voluptate, quibusdam sunt iste dolores consequatur tempora
                    incidunt quam autem quos
                  </p>
                  <p>
                    Eos ullam doloremque mollitia necessitatibus quisquam ipsum
                    asperiores molestiae tempora quidem.
                  </p>
                  <p>
                    Similique ea officia rem rerum, quasi iure aperiam velit
                    architecto incidunt laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NotiMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2 focus:ring-offset-gray-100">
          <span className="sr-only">Open options</span>
          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {notiOptions.map((option, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                    onClick={option.action}
                  >
                    {option.name}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}