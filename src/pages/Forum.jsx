import ava from "../assets/Ava.jpg";
import ArrowUp from "../assets/arrow-up.svg";
import eye from "../assets/eye.svg";
import featherMoreVertical from "../assets/feather-more-vertical.svg";
import messageSquare from "../assets/message-square.svg";
import arrowUpRight from "../assets/arrow-up-right.svg";
import checkCircle from "../assets/check-circle.svg";
import whhHot from "../assets/whh_hot.svg";
import clock from "../assets/clock.svg";
import link from "../assets/link.svg";
import star from "../assets/star.svg";
import list from "../assets/list.svg";
import tag from "../assets/tag.svg";
import award from "../assets/award.svg";

import { Link } from "react-router-dom";

import logo from '../assets/img/Logo.png'
import textLogo from '../assets/img/Universoul.png'

import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    Bars3BottomLeftIcon,
    BellIcon,
    TagIcon,
    ListBulletIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Questions', href: '#', icon: list, current: true },
    { name: 'Tags', href: '#', icon: tag, current: false },
    { name: 'Ranking', href: '#', icon: award, current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function _CommonNav({ cns }) {
    return (
        <nav className={cns}>
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                >
                    <img src={item.icon} className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-4 w-4'
                    )}
                        aria-hidden="true" />

                    {item.name}
                </a>
            ))}
        </nav>
    )
}

function _CommonLogo() {
    return (
        <Link to="#" className="flex items-center pl-4">
            <span className="sr-only">UnivaBarber</span>
            <img
                className="h-4 w-auto sm:h-10"
                src={logo}
                alt=""
            />
            <img
                className="h-4 ml-4"
                src={textLogo}
                alt="UnivaBaber logo text"
            />
        </Link>
    )
}

function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
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
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
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
                                    <div className="flex flex-shrink-0 items-center px-4">
                                        <_CommonLogo />
                                    </div>
                                    <div className="mt-8 h-0 flex-1 overflow-y-auto">
                                        <_CommonNav cns="px-2 space-y-1" />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                        <_CommonLogo />
                        <div className="mt-10 flex flex-grow flex-col">
                            <_CommonNav cns="flex-1 space-y-1 px-2 pb-4" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col md:pl-64">
                    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                        <button
                            type="button"
                            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex flex-1 justify-between px-4">
                            <div className="flex flex-1">
                                <form className="flex w-full md:ml-0" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search-field"
                                            className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                            name="search"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
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
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="flex-1">
                        <div className="py-6">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">Questions</h1>
                            </div>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                {/* Replace with your content */}
                                <div className="py-4">
                                    <div className="flex gap-1">
                                        <Pill img={clock} text="New" active={true} />
                                        <Pill img={arrowUpRight} text="Top" />
                                        <Pill img={whhHot} text="Hot" />
                                        <Pill img={checkCircle} text="Closed" />
                                    </div>

                                    <QuestionCard />
                                    <QuestionCard />
                                    <QuestionCard />
                                    <QuestionCard />
                                    <QuestionCard />

                                    <RightSide />

                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}

export default function () {
    return (
        <>
            <Layout />


        </>
    );
};

function RightSide() {
    return (
        <div className="fixed z-20 top-[11rem] right-[max(20px,calc(50%-45rem))] w-[19.5rem] overflow-y-auto hidden xl:block px-5 py-7 bg-white rounded shadow border border-gray-200">
            <div className="flex">
                <img src={star} className="mr-2" />
                <p className="text-x">Must-read posts</p>
            </div>
            <div className="my-3 h-px border border-gray-200"></div>

            <ul className="list-disc text-blue-500">
                <li className="ml-5 mb-4">Please read rules before you start working on a platform</li>
                <li className="ml-5 mb-4">Vision & Strategy of Alemhelp</li>
            </ul>

            <div className="flex mt-10">
                <img src={link} className="mr-2" />
                <p className="text-x">Featured links</p>
            </div>
            <div className="my-3 h-px border border-gray-200"></div>

            <ul className="list-disc text-blue-500">
                <li className="ml-5 mb-4">Alemhelp source-code on GitHub</li>
                <li className="ml-5 mb-4">Golang best-practices</li>
                <li className="ml-5 mb-4">Alem.School dashboard</li>
            </ul>
        </div>
    )
}

function Pill({ img, text, active }) {
    return (
        <div className={"min-w-16 h-6 px-2.5 py-1 rounded-full justify-start items-center gap-1 inline-flex " + (active ? "bg-blue-500 text-white" : "bg-gray-200 text-zinc-500")}>
            <img src={img} />
            <div className="text-xs capitalize tracking-wide">{text}</div>
        </div>
    )
}

function QuestionCard() {
    return (
        <div className="mt-6 flex flex-col max-w-[620px] items-start gap-4 px-8 py-6 relative bg-white rounded-md overflow-hidden border border-solid border-border shadow">
            <div className="flex justify-between w-full h-10">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full" alt="Ava" src={ava} />
                    <div className="ml-3">
                        <p className="text-black text-xs">5 min ago</p>
                        <p className="text-zinc-500 text-xs">Golanginya</p>
                    </div>
                </div>
                <img
                    className=""
                    alt="Feather more"
                    src={featherMoreVertical}
                />
            </div>
            <p className="font-bold">How to patch KDE on FreeBSD?</p>
            <p className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla</p>
            <div className="flex justify-between w-full">
                <div className="flex items-center gap-3">
                    <div className="px-2 py-1 rounded-md bg-gray-200">
                        <p className="text-[10px]">golang</p>
                    </div>
                    <div className="px-2 py-1 rounded-md bg-gray-200">
                        <p className="text-[10px]">linux</p>
                    </div>
                    <div className="px-2 py-1 rounded-md bg-gray-200">
                        <p className="text-[10px]">overflow</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white overflow-hidden">
                    <div className="inline-flex text-sm gap-1">
                        <img className="" alt="Eye" src={eye} />
                        <span className="text-subtitle-text-color">125</span>
                    </div>
                    <div className="inline-flex text-sm gap-1">
                        <img className="" alt="Eye" src={messageSquare} />
                        <span className="text-subtitle-text-color">15</span>
                    </div>
                    <div className="inline-flex text-sm gap-1">
                        <img className="" alt="Eye" src={ArrowUp} />
                        <span className="text-subtitle-text-color">155</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
