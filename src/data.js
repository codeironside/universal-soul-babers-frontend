// data goes into this file 
import catImg01 from './assets/img/cart.png';
import catImg02 from './assets/img/clipper.png';
import catImg03 from './assets/img/forum.png';
import catImg04 from './assets/img/headphone.png';
import baberImg from './assets/img/about-1.jpg'
import product1 from './assets/img/product-1.JPG'
import product2 from './assets/img/product-2.jpg'
import product3 from './assets/img/product-3.jpg'
import customerImg from './assets/img/patient-avatar.png'





export const products = [
  {
    product: product1,
  },
  {
    product: product2,
  },
  {
    product: product3,
  },
];


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
  },
]

export const quickLinks02 = [
  {
    path: "/contact",
    display: "Contact Us",
  },
  {
    path: "/forum",
    display: "Forum",
  }

];
export const testimonials = [
  {
    id: 1,
    name: "Sarah M",
    img: customerImg,
    review:
      "I've been a loyal customer at this salon for years, and I can confidently say it's the best in town. The staff is not only skilled and professional but also incredibly friendly. The ambiance is inviting, and every visit feels like a pampering experience. I wouldn't trust my hair and beauty needs to anyone else!",
  },
  {
    id: 2,
    name: "David L",
    img: customerImg,
    review:
      "I stumbled upon this salon a few months ago, and it's been a game-changer for me. The quality of service is exceptional, and the attention to detail is impressive. I always leave feeling rejuvenated and confident. This salon has become my go-to place for self-care and beauty treatments!",
  },
  {
    id: 3,
    name: "Emily S",
    img: customerImg,
    review:
      "I can't say enough good things about this salon. From the moment you walk in, you're greeted with warmth and professionalism. The stylists here are truly artists, and they always take the time to understand exactly what I want. The results are consistently outstanding. I'm grateful to have found such a gem in the world of salons!",
  },
  {
    id: 4,
    name: "Michael C",
    img: customerImg,
    review:
      "This salon has completely transformed my perception of what a salon experience should be. The team here goes above and beyond to make you feel special and valued. The attention to detail in their work is unparalleled, and I always leave feeling like a million bucks. I wouldn't trust my hair and beauty needs to anyone else!",
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
  { path: "/marketplace", label: "Marketplace" },
  { path: "/blog", label: "Blog" },
  { path: "/barbers", label: "Find a Barber" },
];

export const statistics = [
  { value: 60, label: "Brands", suffix: '+' },
  { value: 70, label: "Shops", suffix: '+' },
  { value: 100, label: "Satisfaction", suffix: '%' },
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
    title: "Basic",
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
    title: "Premium",
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
    title: "Diamond",
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

export const fundRaisingProgress = [
        {
          donation_title: "Kids Donation",
          donation_progress: 40
        },
        {
          donation_title: "Orphans Donation",
          donation_progress: 100
        },
        {
          donation_title: "Refugees Donation",
          donation_progress: 30
        },
        {
          donation_title: "Homeless Kids Donation",
          donation_progress: 50
        }
]

export const fundRaisingResult = [
  {
    donation_result: 200,
    donation_period: 4,
  },
  {
    donation_result: 1000,
    donation_period: 24,
  },
  {
    donation_result: 100,
    donation_period: 8,
  },
  {
    donation_result: 200,
    donation_period: 6,
  },
]


export const UserA = [
  {
    forumUser: "A",
    forumMessage: "Hey How are you today?",
  },

  {
    forumUser: "A",
    forumMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa commodi illum saepe numquam maxime asperiores voluptate sit, minima perspiciatis.    ",
  },
]

export const UserB = [
  {
    forumUser: "B",
    forumMessage: "I'm ok what about you?",
  },

  {
    forumUser: "B",
    forumMessage: "Lorem ipsum dolor sit, amet consectetur adipisicing. ?",
  },
]

export const UserC = [
  {
    forumUser: "C",
    forumMessage: "Lorem ipsum dolor sit amet !",
  },

]