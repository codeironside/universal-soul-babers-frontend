import { quickLinks, quickLinks02, } from "../data";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, } from "react-icons/ai";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { AppLogo } from "./Header";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-between flex-col flex-wrap md:flex-row gap-[30px] '>
          <div className=''>
            <AppLogo />

            {/* Copyright  */}
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 '>
              Copyright {year} Developed by SMAC TEAM
            </p>
            <div className='flex items-center gap-3 mt-4'>
              <a
                href='https://www.youtube.com/@universoulbarbers'
                target="_blank"
                className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <RiYoutubeFill className='group-hover:text-white w-4 h-5' />
              </a>
              <a
                href='https://www.linkedin.com/company/universoulbarbers'
                target="_blank"
                className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
              </a>
              <a
                href='https://www.instagram.com/universoulbarbers'
                target="_blank"
                className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
              </a>
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
