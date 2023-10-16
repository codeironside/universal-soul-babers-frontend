import { quickLinks, quickLinks02, quickLinks03 } from "../data";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col flex-wrap md:flex-row gap-[30px] '>
          <div className=''>
            {/* logo  */}
            <div className='flex items-start gap-3 justify-start'>
              <div className='w-5 h-5 bg-black rounded-full'></div>
              <p className='text-sm'>UniverSoul Babers</p>
            </div>
            {/* Copyright  */}
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 '>
              Copyright {year} Developed by SMAC TEAM
            </p>
            <div className='flex items-center gap-3 mt-4'>
              <Link
                to=''
                className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <RiYoutubeFill className='group-hover:text-white w-4 h-5' />
              </Link>
              <Link
                to=''
                className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
              </Link>
              <Link
                to=''
                className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
              </Link>
              <Link
                to=''
                className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <AiFillGithub className='group-hover:text-white w-4 h-5' />
              </Link>
            </div>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
              Quick Links
            </h2>
            <ul>
              {quickLinks.map((link, i) => {
                const { path, display } = link;
                return (
                  <li
                    key={i}
                    className='mb-4 text-[16px] leading-7 font-[400] text-textColor'>
                    <Link to={path}>{display}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
              Help?
            </h2>
            <ul>
              {quickLinks03.map((link, i) => {
                const { path, display } = link;
                return (
                  <li
                    key={i}
                    className='mb-4 text-[16px] leading-7 font-[400] text-textColor'>
                    <Link to={path}>{display}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
              Get in Touch
            </h2>
            <ul>
              {quickLinks02.map((link, i) => {
                const { path, display } = link;
                return (
                  <li
                    key={i}
                    className='mb-4 text-[16px] leading-7 font-[400] text-textColor'>
                    <Link to={path}>{display}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
