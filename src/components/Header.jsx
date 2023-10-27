import { navLinks } from "../data";
import { useRef, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import avatar from "../assets/img/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import logo from '../assets/img/Logo.png'
import textLogo from '../assets/img/Universoul.png'

import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

import { BsCart3 } from "react-icons/bs";

const Header = () => {
  // context for side bar
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext)

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show-menu");

  return (
    <header
      className='header lg:px-[75px] mt-[20px] px-[17px] flex items-center'
      data-aos='fade-down'
      data-aos-delay='100'
      ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* logo  */}
          <Link to={"/"}>
            <div className='flex items-center gap-3 justify-center'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <img
                  src={logo}
                  alt=''
                  className='object-cover w-full h-full ' loading='lazy'
                />
              </div>
              <div className="h-16 -ml-[60px] w-[200px] overflow-hidden">
                <img src={textLogo} alt="" className='object-cover w-full h-full'  loading='lazy'/>
              </div>
            </div>
          </Link>

          {/* Menu  */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, i) => {
                const { path, label } = link;
                return (
                  <li key={label}>
                    <NavLink
                      to={path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor  text-[16px] leading-7 font-[600]"
                          : "text-textColor  text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      }>
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right nav  */}
          <div className='flex items-center gap-4'>
            <div className=''>
              <Link to='/profile'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer '>
                  <img src={avatar} alt='' className='w-full rounded-full' />
                </figure>
              </Link>
            </div>

            <Link to='/auth'  className="hidden">
              <button
                className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center
              justify-center rounded-[50px]
              '>
                Get Started
              </button>
            </Link>
            <div
              className='cursor-pointer flex relative max-w-[50px] '
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              <BsCart3 className='text-2xl' />
              <div className='bg-black absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex  items-center justify-center'>
                {itemAmount}
              </div>
            </div>
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
