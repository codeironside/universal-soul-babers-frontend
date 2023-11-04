import { navLinks } from "../data";
import { NavLink, Link } from "react-router-dom";
import { Fragment } from "react";
import logo from '../assets/img/Logo.png'
import textLogo from '../assets/img/Universoul.png'
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline/index.js";

const Header = () => {

  return (
    <Popover as="header" className="sticky top-0 pb-3 bg-white">
      <div>
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 xl:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between lg:w-auto">
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
            <Link
              to="/auth"
              className="text-warm-gray-900 hover:text-warm-gray-500 font-medium"
            >
              Login
            </Link>
            <Link
              to="#"
              className="rounded-md border border-transparent bg-warm-gray-100 py-2 px-6 text-base font-medium text-warm-gray-900 hover:bg-warm-gray-200"
            >
              Sign Up
            </Link>
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
          <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryDark">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="space-y-1 px-2">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.path}
                    className="block rounded-md px-3 py-2 text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <Link
                  to="/login"
                  className="block w-full rounded-md border border-transparent bg-warm-gray-100 hover:bg-warm-gray-200 py-2 px-4 text-center font-medium shadow text-black"
                >
                  Login
                </Link>
                <Link
                  to="#"
                  className="block w-full rounded-md border border-transparent py-2 px-4 text-center font-medium text-white shadow bg-primaryColor mt-4"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
