// data goes into this file 
import catImg01 from './assets/img/cart.png';
import catImg02 from './assets/img/clipper.png';
import catImg03 from './assets/img/forum.png';
import catImg04 from './assets/img/headphone.png';
import baberImg from './assets/img/about-1.jpg'
import baberImg02 from './assets/img/baber02.jpg'
import customerImg from './assets/img/patient-avatar.png'








export const quickLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About us'
  },
  {
    path: '/blog',
    display: 'Blog'
  },
  {
    path: '/barbers',
    display: 'Find A Barber'
  }
]

export const quickLinks02 = [
  {
    path: "/find-abarber-shp",
    display: "Community",
  },
  {
    path: "/",
    display: "Contact Us",
  }
 
];
export const quickLinks03 = [
  {
    path: "/find-abarber-shp",
    display: "Find A Barber",
  },
  {
    path: "/",
    display: "Book a service",
  },
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/home",
    display: "Find A Location",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Naira Marley",
    img: customerImg,
    review:
      "I am satisfied with their services. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  ",
  },
  {
    id: 2,
    name: "John Vidal",
    img: customerImg,
    review:
      "I am satisfied with their services. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  ",
  },
  {
    id: 3,
    name: "Blessing Scott4",
    img: customerImg,
    review:
      "I am satisfied with their services. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  ",
  },
  {
    id: 4,
    name: "Blessing Scott",
    img: customerImg,
    review:
      "I am satisfied with their services. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  ",
  },
];

export const barbers = [
  {
    id: 1,
    img: baberImg,
    name: "Ryan Jack",
    badge: "Top Rated",
    customers: "+1200 customers",
    location: "San Frascico",
    reviews: 5,
    total: 454
  },
  {
    id: 2,
    img: baberImg,
    name: "Scott Mcall",
    badge: "Top Rated",
    customers: "+1200 customers",
    location: "San Frascico",
    reviews: 5,
    total: 454
  },
  {
    id: 3,
    img: baberImg,
    name: "Austin Dave",
    badge: "Top Rated",
    customers: "+1200 customers",
    location: "San Frascico",
    reviews: 5,
    total: 454
  },
];


export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/blog", label: "Blog" },
  { path: "/barbers", label: "Find a Barber" },
  { path: "/contact", label: "Contact" },
];

export  const statistics = [
  { value: 60, label: "Brands", suffix:'+' },
  { value: 70, label: "Shops", suffix:'+' },
  { value: 100, label: "Satisfaction" , suffix:'%' },
];

export const categories = [
  {
    img: catImg01,
    title: "Visit Marketplace",
    content:
      "We have a marketplace for all members to showcase barbing equipment with a link to their social media accounts. This service is absolutely free!",
    btnText: "Go to Marketplace",
  },
  {
    img: catImg02,
    title: "View All Baber Shops",
    content:
      "Comprehensive list of all barbers can be accessed from here.If you a need a barber to book solo or get a barber for your organization",
    btnText: "View All Babers",
  },
  {
    img: catImg03,
    title: "Go To Forum",
    content:
      "This is where all barbers around the world connect to discuss issues and make connection. THe forum is moderated to ensure a safe space for all voices",
    btnText: "Go to Forum",
  },
  {
    img: catImg04,
    title: "Request For Assistance",
    content:
      "Anyone in need of urgent assistance can apply here. The funding is provided by various Government agencies and Private contractors",
    btnText: "Request for Assistance",
  },
];

export const pricing = [
  {
    title: "Standard Gold",
    price: 0,
    currency: "USD",
    frequency: "/month",
    description: "The essential package for your best work for client",
    features: [
      "Access to store",
      "3 products listing",
      "Additional barber (crew)",
      "Contracts available",
    ],
    cta: "Get Started",
    recommended: false,
  },
  {
    title: "Premium Diamond",
    price: 25,
    currency: "USD",
    frequency: "/month",
    description: "The essential package for your best work for client",
    features: [
      "Access to store",
      "20 products listing",
      "10 Additional barber (crew)",
      "Contracts available",
    ],
    cta: "Get Started",
    recommended: true,
  },
  {
    title: "Enterprise Kyawthuite",
    price: 40,
    currency: "USD",
    frequency: "/month",
    description: "The essential package for your best work for client",
    features: [
      "Access to store",
      "3 products listing",
      "Additional barber (crew)",
      "Contracts available",
    ],
    cta: "Get Started",
    recommended: false,
  },
];