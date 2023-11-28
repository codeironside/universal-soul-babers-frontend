import { Fragment } from "react";
import logo from "../assets/img/Logo.png";
import textLogo from "../assets/img/Universoul.png";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, } from "@heroicons/react/24/outline/index.js";
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data'
import { isLoggedIn } from "../utils";
import { UserContext } from "../pages/UserPanel";
import { getCookie } from "../utils";
import ProfileImage from "./ProfileImage";

const Header = () => {
  const user = JSON.parse(getCookie('user'))
  
  return (
    <UserContext.Provider value={user}>
    <Popover as="header" className="sticky top-0 z-50 pb-3 bg-white">
      <div>
        <nav
          className="relative flex items-center justify-between px-6 pt-6 mx-auto max-w-7xl xl:px-8"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link to="#" className="flex items-center">
                <span className="sr-only">UnivaBarber</span>
                <img
                  className="w-auto h-8 sm:h-10"
                  src={logo}
                  alt=""
                />
                <img
                  className="h-4 ml-4"
                  src={textLogo}
                  alt="UnivaBaber logo text"
                />
              </Link>
              <div className="flex items-center -mr-2 lg:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md focus-ring-inset bg-warm-gray-50 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryDark">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-10 lg:ml-10 lg:flex">
              {navLinks.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link to="/cart" className="inline-flex">
              <ShoppingCartIcon className="w-6 h-6 mr-1 cursor-pointer" />
              0
            </Link>
            {isLoggedIn() ? (
              <Link to="/dashboard" className="flex-shrink-0 block group">
                <div className="flex items-center">
                  <div>
                    
                    <ProfileImage />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{`${user.firstName} ${user.lastName}`}</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View dashboard</p>
                  </div>
                </div>
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-medium text-warm-gray-900 hover:text-warm-gray-500"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 text-base font-medium border border-transparent rounded-md bg-warm-gray-100 text-warm-gray-900 hover:bg-warm-gray-200"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top transform lg:hidden">
          <Transition
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <Popover.Panel
              focus
              className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'>
              {({ close }) => (
                <div className='overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5'>
                  <div className='flex items-center justify-between px-5 pt-4'>
                    <Link
                      to='/'
                      className='text-2xl font-semibold text-primaryDark'>
                      <span className='sr-only'>UnivaBarber</span>
                      <img className='w-auto h-10' src={logo} alt='Logo' />
                    </Link>
                    <div className='-mr-2'>
                      <Popover.Button
                        onClick={close}
                        className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
                        <span className='sr-only'>Close menu</span>
                        <XMarkIcon className='w-6 h-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                    {navLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={close}
                        className='block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50'>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="px-5 my-6">
                    <div className="inline-flex mb-4">
                      <ShoppingCartIcon className="w-6 h-6 mr-2 cursor-pointer" />
                      <span>Cart</span>
                    </div>

                    <Link
                      to="/login"
                      className="block w-full px-4 py-2 font-medium text-center text-black border border-transparent rounded-md shadow bg-warm-gray-100 hover:bg-warm-gray-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block w-full px-4 py-2 mt-4 font-medium text-center text-white border border-transparent rounded-md shadow bg-primaryColor"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </Popover.Panel>
      </Transition>
    </Popover></UserContext.Provider>
  );
};

export default Header;
