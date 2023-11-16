import { Fragment, useEffect } from 'react'

import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
  TrashIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { Menu, Popover, Transition } from '@headlessui/react'

const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]

const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function () {
  useEffect(() => {
    document.title = "View Thread"
    document.body.classList.add("bg-gray-100")
  }, [])
  return (
    <div className="p-6">
      <div className="initial-question">
        <h1 className="sr-only">Recent questions</h1>
        <ul role="list" className="space-y-4">
          {questions.map((question) => (
            <li key={question.id} className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
              <article aria-labelledby={'question-title-' + question.id}>
                <div>
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={question.author.imageUrl} alt="" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={question.author.href} className="hover:underline">
                          {question.author.name}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        <a href={question.href} className="hover:underline">
                          <time dateTime={question.datetime}>{question.date}</time>
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-shrink-0 self-center">
                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
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
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'flex px-4 py-2 text-sm'
                                    )}
                                  >
                                    <StarIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Add to favorites</span>
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'flex px-4 py-2 text-sm'
                                    )}
                                  >
                                    <FlagIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Report content</span>
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'flex px-4 py-2 text-sm'
                                    )}
                                  >
                                    <TrashIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Delete</span>
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <h2 id={'question-title-' + question.id} className="mt-4 text-base font-medium text-gray-900">
                    {question.title}
                  </h2>
                </div>
                <div
                  className="mt-2 space-y-4 text-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: question.body }}
                />
                <div className="mt-6 flex justify-between space-x-8">
                  <div className="flex space-x-6">
                    <span className="inline-flex items-center text-sm">
                      <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                        <HandThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="font-medium text-gray-900">{question.likes}</span>
                        <span className="sr-only">likes</span>
                      </button>
                    </span>
                    <span className="inline-flex items-center text-sm">
                      <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                        <ChatBubbleLeftEllipsisIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="font-medium text-gray-900">{question.replies}</span>
                        <span className="sr-only">replies</span>
                      </button>
                    </span>
                    <span className="inline-flex items-center text-sm">
                      <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                        <EyeIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="font-medium text-gray-900">{question.views}</span>
                        <span className="sr-only">views</span>
                      </button>
                    </span>
                  </div>
                  <div className="flex text-sm">
                    <span className="inline-flex items-center text-sm">
                      <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                        <ShareIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="font-medium text-gray-900">Share</span>
                      </button>
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="flow-root relative mt-10 bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
        <span className="absolute -top-10 left-5 -ml-px h-10 w-0.5 bg-gray-200" aria-hidden="true" />
        <ul role="list" className="-mb-8">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <div className="relative pb-8">
                {activityItemIdx !== activity.length - 1 ? (
                  <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                ) : null}
                <div className="relative flex items-start space-x-3">

                  <div className="relative">
                    <img
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                      src={activityItem.imageUrl}
                      alt=""
                    />

                    <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                      <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm">
                        <a href={activityItem.person.href} className="font-medium text-gray-900">
                          {activityItem.person.name}
                        </a>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Commented {activityItem.date}</p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{activityItem.comment}</p>
                    </div>
                  </div>

                </div>
              </div>
            </li>
          ))}
        </ul>


        <div className="mt-6">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                  alt=""
                />

                <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                  <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <form action="#">
                <div>
                  <label htmlFor="comment" className="sr-only">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                    placeholder="Leave a comment"
                    defaultValue={''}
                  />
                </div>
                <div className="mt-6 flex items-center justify-end space-x-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
