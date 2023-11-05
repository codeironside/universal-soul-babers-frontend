import { Fragment } from "react";
import logo from "../assets/img/Logo.png";
import { Popover, Transition } from "@headlessui/react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { navLinks } from "../data";

const Header = () => {
  return (
    <Popover as='header' className='sticky top-0 bg-white z-50'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <nav className='relative flex items-center justify-between sm:h-10 md:justify-center'>
              <div className='flex items-center flex-1'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <Link
                    to='/'
                    className='flex items-center text-2xl font-semibold text-primaryDark'>
                    <span className='sr-only'>UnivaBarber</span>
                    <img className='h-10 w-auto' src={logo} alt='Logo' />
                  </Link>
                  <div className='-mr-2 flex items-center md:hidden'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
                      <span className='sr-only'>Open menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='hidden md:flex md:space-x-10'>
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className='font-medium text-gray-500 hover:text-gray-900'>
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

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
                        <XIcon className='h-6 w-6' aria-hidden='true' />
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
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Header;
