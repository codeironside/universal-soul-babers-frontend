import React, { Fragment, useRef, useState } from 'react';
import { useEffect } from "react"
import { Editor } from '@tinymce/tinymce-react';
import { tinyMCEInit, classNames } from '../utils'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

const messages = [
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 2,
    subject: 'Reprehenderit ut qui aut',
    sender: 'Brian Thompson',
    time: '2d ago',
    datetime: '2021-01-26T09:12',
    preview:
      'Soluta voluptates recusandae voluptas rerum doloribus cupiditate sit omnis. Necessitatibus enim eaque autem id dolore voluptatem. Beatae aliquam voluptas ea possimus quas nihil.',
  },
  {
    id: 3,
    subject: 'Cupiditate est omnis iste',
    sender: 'Julia Rodriguez',
    time: '3d ago',
    datetime: '2021-01-25T14:20',
    preview:
      'Autem aliquam ut quasi earum. Ut sunt quo ipsam ullam aut a. Nemo id dolorem qui voluptatem alias vel. Tempore aut exercitationem aperiam ratione repellendus porro.',
  },
]

export default function () {
  const editorRef = useRef(null);
  const [selectUsers, setSelectUsers] = React.useState(false);
  const [selected, setSelected] = useState(people[3])

  useEffect(() => {
    document.title = 'Notifications'
    document.body.classList.add("bg-gray-100")
  }, [])


  return (
    <>
      {/* <div className="mx-auto mt-8 max-w-3xl sm: lg:max-w-7xl"> */}
      <div aria-labelledby="notes-title" className='mt-10 px-6'>
        <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
          <div className="divide-y divide-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h2 id="notes-title" className="text-lg font-medium text-gray-900">Send notification</h2>
            </div>
            <div className="px-4 py-6 sm:px-6">
              <div className='mb-8'>
                {/* An input field where you input the name */}
                <div className="mt-1 relative rounded-md shadow-sm mb-4">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="focus:ring-primaryDark focus:border-primaryDark block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Subject"
                  />
                </div>
                <p className='mb-2'>Send notification to:</p>
                <div className="flex items-center ml-4">
                  <input
                    id="push_email"
                    name="push_notifications"
                    type="radio"
                    className="focus:ring-primaryDark h-4 w-4 text-primaryDark border-gray-300"
                    onChange={() => { setSelectUsers(false) }}
                  />
                  <label htmlFor="push_email" className="ml-3 block text-sm font-medium text-gray-700">
                    All users
                  </label>
                </div>
                <div className="flex items-center ml-4 mt-2">
                  <input
                    id="selected"
                    name="push_notifications"
                    type="radio"
                    className="focus:ring-primaryDark h-4 w-4 text-primaryDark border-gray-300"
                    onChange={(e) => { setSelectUsers(e.target.checked) }}
                  />
                  <label htmlFor="selected" className="ml-3 block text-sm font-medium text-gray-700">
                    Only selected users
                  </label>
                </div>

                {selectUsers && (
                  <div className='ml-9 mt-4'>
                    <Listbox value={selected} onChange={setSelected}>
                      {({ open }) => (
                        <>
                          <Listbox.Label className="block text-sm font-medium text-gray-700">Select a user</Listbox.Label>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                              <span className="block truncate">{selected.name}</span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                          {person.name}
                                        </span>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active ? 'text-white' : 'text-indigo-600',
                                              'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                          >
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                )}

              </div>
              <p className='mb-2'>Content:</p>
              <Editor
                tinymceScriptSrc={'/tinymce/tinymce.min.js'}
                onInit={(evt, editor) => editorRef.current = editor}
                init={tinyMCEInit}
              />
              {/* send button */}
              <button
                type="button"
                className="w-full mt-5 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryDark hover:bg-primaryDarkHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryDark"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div aria-labelledby="notes-title" className='my-10 px-6'>
        <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
          <div className="divide-y divide-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h2 id="notes-title" className="text-lg font-medium text-gray-900">Delivered notifications</h2>
            </div>
            <div className="px-4 py-6 sm:px-6">
              <ul>
                {messages.map((message) => (
                  <li
                    key={message.id}
                    className="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
                  >
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <Link to="/owner/notification/1" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <p className="truncate text-sm font-medium text-gray-900">{message.sender}</p>
                          <p className="truncate text-sm text-gray-500">{message.subject}</p>
                        </Link>
                      </div>
                      <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                        {message.time}
                      </time>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-gray-600 line-clamp-2">{message.preview}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*</div> */}
    </>
  )
}