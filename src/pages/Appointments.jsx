import { Fragment, useState } from 'react'
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
    MapPinIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

const meetings = [
    {
        id: 1,
        date: 'January 10th, 2022',
        time: '5:00 PM',
        datetime: '2022-01-10T17:00',
        name: 'Leslie Alexander',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'Starbucks',
    },
    {
        id: 2,
        date: 'January 15th, 2022',
        time: '3:30 PM',
        datetime: '2022-01-15T15:30',
        name: 'Ryan Davis',
        imageUrl:
            'https://randomuser.me/api/portraits/men/10.jpg',
        location: 'Conference Room B',
    },
    {
        id: 3,
        date: 'February 5th, 2022',
        time: '10:00 AM',
        datetime: '2022-02-05T10:00',
        name: 'Emma Williams',
        imageUrl:
            'https://randomuser.me/api/portraits/women/9.jpg',
        location: 'Zoom Meeting',
    },
    {
        id: 4,
        date: 'February 20th, 2022',
        time: '1:45 PM',
        datetime: '2022-02-20T13:45',
        name: 'David Johnson',
        imageUrl:
            'https://randomuser.me/api/portraits/men/11.jpg',
        location: 'Coffee Bean',
    },
    {
        id: 5,
        date: 'March 8th, 2022',
        time: '9:30 AM',
        datetime: '2022-03-08T09:30',
        name: 'Olivia Brown',
        imageUrl:
            'https://randomuser.me/api/portraits/women/10.jpg',
        location: 'Office Lobby',
    },
    {
        id: 6,
        date: 'March 25th, 2022',
        time: '4:15 PM',
        datetime: '2022-03-25T16:15',
        name: 'Michael Taylor',
        imageUrl:
            'https://randomuser.me/api/portraits/men/12.jpg',
        location: 'Panera Bread',
    },
    {
        id: 7,
        date: 'April 12th, 2022',
        time: '2:00 PM',
        datetime: '2022-04-12T14:00',
        name: 'Sophia Davis',
        imageUrl:
            'https://randomuser.me/api/portraits/women/11.jpg',
        location: 'Room 203',
    },
    {
        id: 8,
        date: 'April 30th, 2022',
        time: '11:30 AM',
        datetime: '2022-04-30T11:30',
        name: 'Ethan Martinez',
        imageUrl:
            'https://randomuser.me/api/portraits/men/13.jpg',
        location: 'Virtual Meeting',
    },
    {
        id: 9,
        date: 'May 18th, 2022',
        time: '6:45 PM',
        datetime: '2022-05-18T18:45',
        name: 'Ava Anderson',
        imageUrl:
            'https://randomuser.me/api/portraits/women/12.jpg',
        location: 'Cafeteria',
    },
    {
        id: 10,
        date: 'May 30th, 2022',
        time: '3:15 PM',
        datetime: '2022-05-30T15:15',
        name: 'Liam Wilson',
        imageUrl:
            'https://randomuser.me/api/portraits/men/14.jpg',
        location: 'Zoom Meeting',
    },
]

const days = [
    { date: '2021-12-27' },
    { date: '2021-12-28' },
    { date: '2021-12-29' },
    { date: '2021-12-30' },
    { date: '2021-12-31' },
    { date: '2022-01-01', isCurrentMonth: true },
    { date: '2022-01-02', isCurrentMonth: true },
    { date: '2022-01-03', isCurrentMonth: true },
    { date: '2022-01-04', isCurrentMonth: true },
    { date: '2022-01-05', isCurrentMonth: true },
    { date: '2022-01-06', isCurrentMonth: true },
    { date: '2022-01-07', isCurrentMonth: true },
    { date: '2022-01-08', isCurrentMonth: true },
    { date: '2022-01-09', isCurrentMonth: true },
    { date: '2022-01-10', isCurrentMonth: true },
    { date: '2022-01-11', isCurrentMonth: true },
    { date: '2022-01-12', isCurrentMonth: true, isToday: true },
    { date: '2022-01-13', isCurrentMonth: true },
    { date: '2022-01-14', isCurrentMonth: true },
    { date: '2022-01-15', isCurrentMonth: true },
    { date: '2022-01-16', isCurrentMonth: true },
    { date: '2022-01-17', isCurrentMonth: true },
    { date: '2022-01-18', isCurrentMonth: true },
    { date: '2022-01-19', isCurrentMonth: true },
    { date: '2022-01-20', isCurrentMonth: true },
    { date: '2022-01-21', isCurrentMonth: true },
    { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
    { date: '2022-01-23', isCurrentMonth: true },
    { date: '2022-01-24', isCurrentMonth: true },
    { date: '2022-01-25', isCurrentMonth: true },
    { date: '2022-01-26', isCurrentMonth: true },
    { date: '2022-01-27', isCurrentMonth: true },
    { date: '2022-01-28', isCurrentMonth: true },
    { date: '2022-01-29', isCurrentMonth: true },
    { date: '2022-01-30', isCurrentMonth: true },
    { date: '2022-01-31', isCurrentMonth: true },
    { date: '2022-02-01' },
    { date: '2022-02-02' },
    { date: '2022-02-03' },
    { date: '2022-02-04' },
    { date: '2022-02-05' },
    { date: '2022-02-06' },
]

import { classNames } from '../utils'

export default function () {
    return (
        <div className='mx-auto max-w-lg py-8 px-6 lg:max-w-4xl xl:max-w-6xl'>
            <h2 className="text-lg font-semibold text-gray-900">Upcoming appointments</h2>
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                    <div className="flex items-center text-gray-900">
                        <button
                            type="button"
                            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <div className="flex-auto font-semibold">January</div>
                        <button
                            type="button"
                            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                        <div>S</div>
                    </div>
                    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                        {days.map((day, dayIdx) => (
                            <button
                                key={day.date}
                                type="button"
                                className={classNames(
                                    'py-1.5 hover:bg-gray-100 focus:z-10',
                                    day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                                    (day.isSelected || day.isToday) && 'font-semibold',
                                    day.isSelected && 'text-white',
                                    !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                                    !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                                    day.isToday && !day.isSelected && 'text-primaryDark',
                                    dayIdx === 0 && 'rounded-tl-lg',
                                    dayIdx === 6 && 'rounded-tr-lg',
                                    dayIdx === days.length - 7 && 'rounded-bl-lg',
                                    dayIdx === days.length - 1 && 'rounded-br-lg'
                                )}
                            >
                                <time
                                    dateTime={day.date}
                                    className={classNames(
                                        'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                                        day.isSelected && day.isToday && 'bg-primaryDark',
                                        day.isSelected && !day.isToday && 'bg-gray-900'
                                    )}
                                >
                                    {day.date.split('-').pop().replace(/^0/, '')}
                                </time>
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="mt-8 w-full rounded-md border border-transparent bg-primaryDark py-2 px-4 text-sm font-medium text-white shadow hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
                    >
                        Add event
                    </button>
                </div>
                <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                    {meetings.map((meeting) => (
                        <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static">
                            <img src={meeting.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full" />
                            <div className="flex-auto">
                                <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
                                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                    <div className="flex items-start space-x-3">
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Date</span>
                                            <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd>
                                            <time dateTime={meeting.datetime}>
                                                {meeting.date} at {meeting.time}
                                            </time>
                                        </dd>
                                    </div>
                                    <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Location</span>
                                            <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd>{meeting.location}</dd>
                                    </div>
                                </dl>
                            </div>
                            <Menu as="div" className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center">
                                <div>
                                    <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                                        <span className="sr-only">Open options</span>
                                        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
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
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Edit
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Cancel
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>
                    ))}
                </ol>
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