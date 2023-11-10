import {
  ArrowUturnLeftIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import Design1 from "../assets/img/barber-brush.gif";
import { categories, statistics } from "../data.js";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import heroThree from "../assets/img/hero-3.jpg";
import heroOne from "../assets/img/hero-1.jpg";
import heroTwo from "../assets/img/hero-2.jpg";
import { BarberList, Pricing, SectionHeader, Testimonials } from "../components/index.js";
import Design3 from "../assets/img/razor.gif";
import Design2 from "../assets/img/shaver.gif";
import { BallTriangle, Grid } from "react-loader-spinner";
import Service from "../assets/img/service.jpg";
import Card from "../assets/img/card.png";
import Vid from "../assets/img/video-icon.png";
import Design4 from "../assets/img/pie-chart.gif";

const solutions = [
  {
    name: 'Inbox',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]

const features = [
  {
    name: 'Unlimited Inboxes',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: InboxIcon,
  },
  {
    name: 'Manage Team Members',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: UsersIcon,
  },
  {
    name: 'Spam Report',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: TrashIcon,
  },
  {
    name: 'Compose in Markdown',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Team Reporting',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Saved Replies',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ArrowUturnLeftIcon,
  },
  {
    name: 'Email Commenting',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Connect with Customers',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: HeartIcon,
  },
]

const metrics = [
  { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
  { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
  { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
  { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]

const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Home() {
  return (
    <main className="mt-10">
      {/* Hero section */}
      <section className='hero-section pt-[2px] 2xl:h-[800px] relative '>
        {/* First Aesthetic  */}
        <div className='hidden lg:block absolute top-[40%] left-[40%] h-[100px] w-[100px] '>
          <img src={Design1} alt='' className='w-full block z-10' />
        </div>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[10px] items-center justify-between '>
            <div>
              {/* Hero Text  */}
              <div className='lg:w-[570px]  '>
                <h1
                  className='text-4xl sm:text-5xl md:text-6xl mt-10 text-center text-headingColor font-[800] md:text-center lg:text-left '
                  data-aos='fade-down'
                >
                  UniverSoul Babers
                </h1>
                <p
                  className='text-para text-center md:text-center lg:text-left'
                  data-aos='fade-up'
                  data-aos-delay='400'>
                  Discover talented babers to give you the best cut. Are you
                  also a professional baber? create your shop now!
                </p>
                <div
                  className='w-full flex items-center justify-center lg:justify-start '
                  data-aos='zoom-in'
                  data-aos-delay='600'>
                  <button className='btn'>Request A Demo</button>
                </div>
              </div>

              {/* Counter  */}
              <div
                className='mt-[30px] flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start lg:mt-[70px] lg:flex-row lg:items-center gap-5 lg:gap-[30px] '>
                {statistics.map((stats) => {
                  const { value, label, suffix } = stats;
                  return (<div
                    key={value}
                    data-aos='fade-up'
                    data-aos-delay='700'>
                    <h2
                      className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[44px] font-[700] text-headingColor '>
                      <CountUp
                        start={0}
                        end={value}
                        suffix={suffix}
                        duration={5}
                      />
                    </h2>
                    <span className='h-2  w-[100px] bg-pink-700 rounded-full block mt-[-8px] '></span>
                    <p className='text-para'>{label}</p>
                  </div>);
                })}
              </div>
              {/* Social Icons  */}
              <div
                className='flex items-center gap-5 mt-12 justify-center lg:justify-normal'
                data-aos='fade-up'
                data-aos-delay='800'>
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
            {/* hero img  */}
            <div className='flex gap-[10px] md:gap-[20px] justify-end '>
              <div>
                <img
                  data-aos='fade-right'
                  data-aos-duration='500'
                  data-aos-delay='500'
                  className='md:w-[320px] w-[230px] mt-[3rem] md:mt-[100px] rounded-lg'
                  src={heroThree}
                  alt=''
                />
              </div>
              <div className='md:mt-[110px] mt-[3rem]'>
                <img
                  data-aos='fade-left'
                  data-aos-duration='500'
                  data-aos-delay='600'
                  src={heroOne}
                  alt=''
                  className=' w-[100px] md:w-[150px] md:h-[220px] mb-2 md:mb-[20px] rounded-lg'
                />
                <img
                  data-aos='fade-left'
                  data-aos-duration='000'
                  data-aos-delay='700'
                  src={heroTwo}
                  alt=''
                  className='w-[100px] md:w-[150px] md:h-[220px] rounded-lg '
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionHeader title='Services' subTitle='What we do' />

      <div
        className='container items-center justify-center relative w-[1100px] flex gap-5 flex-col mx-auto mt-[60px]lg:flex-row md:flex-row'>
        <div className='absolute top-[25%] left-[43%] h-[100px] w-[100px]'>
          <img src={Design3} alt='' className='w-full block' />
        </div>
        <div className='absolute -top-[10%] -right-[0%] h-[100px] w-[100px]'>
          <img src={Design2} alt='' className='w-full block' />
        </div>
        <div className='absolute -bottom-[10%] -right-[0%] h-[100px] w-[100px] z-10 '>
          <Grid
            height='280'
            width='280'
            color='black'
            ariaLabel='grid-loading'
            radius='2.5'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </div>
        <div className='w-full flex items-center justify-center relative'>
          <img
            data-aos='fade-left'
            data-aos-duration='900'
            src={Service}
            alt=''
            className='relative rounded-lg h-[450px] '
          />
          <img
            data-aos='zoom-in'
            data-aos-duration='500'
            data-aos-delay='400'
            src={Card}
            alt='desc'
            className='
          absolute
          rounded-lg
          w-[150px]
          top-[10%]
          left-[6%]
          shadow-lg
          '
          />
          <div
            className='absolute shadow-lg  bg-white w-[200px] rounded-lg p-3 top-[70%] right-[-3%] '
            data-aos='zoom-out'
            data-aos-duration='500'
            data-aos-delay='400'>
            <div className='flex justify-between items-center'>
              <p>
                <span className='font-bold text-para mr-3'>Tue 23</span>
                <span className='text-para'>10:00 AM</span>
              </p>
              <div className='w-6 h-4 p-1 flex items-center rounded-sm bg-green-300'>
                <img src={Vid} alt='icon' />
              </div>
            </div>
            <div className='w-20 mt-2 p-[3px] rounded-full bg-yellow-100'>
              <p className='text-yellow-300 text-center text-[14px]'>Premium</p>
            </div>
            <div className='flex w-full items-center justify-start gap-3 mt-2 '>
              <span className='h-6 w-6 bg-black rounded-full items-center '></span>
              <p className='text-[17px]'>Drax BaberShop</p>
            </div>
          </div>
        </div>
        <div className='  p-8 w-full'>
          <h1
            className='text-center font-bold text-[30px] leading-12'
            data-aos='fade-down'
            data-aos-duration='500'
            data-aos-delay='700'>
            We Offer The Best Platform For Your Salon
          </h1>
          <p
            className='text-para text-center lg:text-left md:text-left'
            data-aos='fade-up'
            data-aos-duration='300'
            data-aos-delay='400'>
            Discover the ultimate platform designed exclusively for salons, where innovation meets efficiency. Our
            state-of-the-art solution empowers your salon business with seamless appointment scheduling, client
            management, and powerful marketing tools. Elevate your salon experience and unlock the potential for growth
            and success. Join us today and revolutionize the way you run your salon!
          </p>
          <div
            className='flex flex-center justify-center'
            data-aos='zoom-in'
            data-aos-duration='500'
            data-aos-delay='900'>
            <button className='btn '> Create A Shop</button>
          </div>
        </div>
      </div>

      <SectionHeader title='Categories' subTitle='Registration Guide' />

      <section
        className='max-w-[1100px] mx-auto rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-11 lg:gap-[30px] p-[30px]  '>
        {categories.map((category, index) => {
          const { img, title, content, btnText } = category;
          return (<div
            className='flex items-center flex-col p-8 justify-center w-full bg-white rounded-lg shadow-2xl '
            key={index}>
            <img src={img} width={50} height={40} alt={title} />
            <h2 className='text-center text-[24px] md:text-[28pz] lg:text-[28px] font-bold my-5 '>
              {title}
            </h2>
            <p
              className='
                text-center
                '>
              {content}
            </p>
            <button
              className='
                bg-black
                text-white
                p-2
                rounded-md
                px-4
                mt-6
                '>
              {btnText}
            </button>
          </div>);
        })}
      </section>

      <section className='container mx-auto items-center justify-center relative'>
        <div className='absolute top-[15%] right-[7%] h-[100px] w-[100px] '>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color='black'
            ariaLabel='ball-triangle-loading'
            wrapperClass={{}}
            wrapperStyle=''
            visible={true}
          />
        </div>
        <BarberList />
      </section>


      <section className='container mx-auto items-center justify-center'>
        <Testimonials />
      </section>

      <section className='container mx-auto items-center justify-center relative'>
        <div className='absolute top-[20%] -right-[0%] h-[100px] w-[100px]'>
          <img src={Design4} alt='' className='w-full block' />
        </div>
        <Pricing />
      </section>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="-mb-1 block bg-gradient-to-r from-primaryColor to-black bg-clip-text pb-1 text-transparent">
              Get in touch or create an account.
            </span>
          </h2>
          <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-primaryDark bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm"
            >
              Learn more
            </a>
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-warm-gray-100 px-4 py-3 text-base font-medium shadow-sm hover:bg-warm-gray-200"
            >
              Get started
            </a>
          </div>
        </div>
      </div>


    </main>
  )
}
