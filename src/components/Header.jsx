import { Fragment } from "react";
import logo from "../assets/img/Logo.png";
import textLogo from "../assets/img/Universoul.png";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, } from "@heroicons/react/24/outline/index.js";
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data'
import { isLoggedIn } from "../utils";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Header = () => {
  const { itemCount } = useContext(CartContext)

  return (
    <Popover as="header" className="sticky top-0 pb-3 bg-white z-50">
      <div>
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 xl:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <AppLogo />
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-warm-gray-50 p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryDark">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
              <ShoppingCartIcon className="w-6 h-6 cursor-pointer mr-1" />
              {itemCount}
            </Link>
            {isLoggedIn() ? (
              <Link to="/dashboard" className="group block flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View dashboard</p>
                  </div>
                </div>
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-warm-gray-900 hover:text-warm-gray-500 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-md border border-transparent bg-warm-gray-100 py-2 px-6 text-base font-medium text-warm-gray-900 hover:bg-warm-gray-200"
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
        <Popover.Panel focus className="absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden">
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
              className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
              {({ close }) => (
                <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='px-5 pt-4 flex items-center justify-between'>
                    <Link
                      to='/'
                      className='text-2xl font-semibold text-primaryDark'>
                      <span className='sr-only'>UnivaBarber</span>
                      <img className='h-10 w-auto' src={logo} alt='Logo' />
                    </Link>
                    <div className='-mr-2'>
                      <Popover.Button
                        onClick={close}
                        className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
                        <span className='sr-only'>Close menu</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                    {navLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={close}
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="my-6 px-5">
                    <div className="inline-flex mb-4">
                      <ShoppingCartIcon className="w-6 h-6 cursor-pointer mr-2" />
                      <span>Cart</span>
                    </div>

                    <Link
                      to="/login"
                      className="block w-full rounded-md border border-transparent bg-warm-gray-100 hover:bg-warm-gray-200 py-2 px-4 text-center font-medium shadow text-black"
                    >
                      Login
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block w-full rounded-md border border-transparent py-2 px-4 text-center font-medium text-white shadow bg-primaryColor mt-4"
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
    </Popover>
  );
};

export default Header;


export function AppLogo() {
  return (
    <Link to="#" className="flex items-center">
      <span className="sr-only">UnivaBarber</span>
      <img
        className="h-8 w-auto sm:h-10"
        src={logo}
        alt=""
      />
      <img
        className="h-4 ml-4"
        src={textLogo}
        alt="UnivaBaber logo text"
      />
    </Link>
  );
}