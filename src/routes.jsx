import React from 'react';
import { CartItem } from './components';
import {
  Home,
  Blog,
  About,
  Contact,
  Profile,
  Auth,
  UserPanel,
  Barbers,
  BarbersDetails,
  ProductDetails,
  MarketPlace,
  Login,
  Funding,
  UserCampaign,
  CampaignList,
  Privacy,
  ThankYou,
  CrowdfundingThankYou
} from './pages';
import BlogContent from './pages/BlogContent';
import Forum from './pages/Forum';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import MyBarbers from './pages/MyBarbers';
import MyServices from './pages/MyServices';
import AppointMents from './pages/Appointments';
import Profile_ from './pages/Profile_';
import DashBlog from './pages/DashBlog';
import Customers from './pages/Customers';
import MyShop from './pages/MyShop';
import SignIn from './pages/SignIn';
import OwnerUsers from './pages/OwnerUsers';
import OwnerViewUser from './pages/OwnerViewUser';
import OwnerNotification from './pages/OwnerNotification';
import OwnerNotificationView from './pages/OwnerNotificationView';
import OwnerDashboard from './pages/OwnerDashboard';
import OwnerBlog from './pages/OwnerBlog';
import Payment from './pages/Payment';

export default [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/about',
    component: <About />,
  },
  {
    path: '/contact',
    component: <Contact />,
    standalone: true,
  },
  {
    path: '/barbers',
    component: <Barbers />,
  },
  {
    path: '/login',
    component: <Auth />,
  },
  {
    path: '/signup',
    component: <SignIn />,
  },
  {
    path: '/blog',
    component: <Blog />,
  },
  {
    path: '/blog/content/:blogId',
    component: <BlogContent />,
  },
  {
    path: '/barber/:id',
    component: <BarbersDetails />,
  },
  {
    path: '/product/:id',
    component: <ProductDetails />,
  },
  {
    path: '/marketplace',
    component: <MarketPlace />,
  },
  {
    path: '/login',
    component: <Login />,
    standalone: true,
  },
  {
    path: '/forum',
    component: <UserPanel fragment={<Forum />} />,
    standalone: true,
  },
  {
    path: '/cart',
    component: <Cart />,
  },
  {
    path: '/privacy',
    component: <Privacy />,
  },
  {
    path: '/dashboard',
    component: <UserPanel fragment={<Dashboard />} />,
    standalone: true,
  },
  {
    path: '/login',
    component: <UserPanel fragment={<Login />} />,
    standalone: true,
  },
  {
    path: '/settings',
    component: <UserPanel fragment={<Settings />} />,
    standalone: true,
  },
  {
    path: '/my-barbers',
    component: <UserPanel fragment={<MyBarbers />} />,
    standalone: true,
  },
  {
    path: '/services',
    component: <UserPanel fragment={<MyServices />} />,
    standalone: true,
  },
  {
    path: '/appointments',
    component: <UserPanel fragment={<AppointMents />} />,
    standalone: true,
  },
  {
    path: '/funding',
    component: <UserPanel fragment={<Funding />} />,
    standalone: true,
  },
  {
    path: '/payment/:page/:itemId/:amount',
    component: <Payment /> ,
    standalone: true,
  },
  {
    path: '/userCampaign',
    component: <UserPanel fragment={<UserCampaign />} />,
    standalone: true,
  },
  {
    path: '/campaignList',
    component: <UserPanel fragment={<CampaignList />} />,
    standalone: true,
  },
  {
    path: '/old-profile',
    component: <Profile_ />,
  },
  {
    path: '/thank-you',
    component: <ThankYou />,
  },
  {
    path: '/contribution-thank-you',
    component: <CrowdfundingThankYou />,
  },
  {
    path: '/profile',
    component: <UserPanel fragment={<Profile />} />,
    standalone: true,
  },
  {
    path: '/customers',
    component: <UserPanel fragment={<Customers />} />,
    standalone: true,
  },
  {
    path: '/my-store',
    component: <UserPanel fragment={<MyShop />} />,
    standalone: true,
  },
  {
    path: '/owner',
    component: <UserPanel fragment={<OwnerDashboard />} owner={true} />,
    standalone: true,
  },
  {
    path: '/owner/users',
    component: <UserPanel fragment={<OwnerUsers />} owner={true} />,
    standalone: true,
  },
  {
    path: '/owner/users/:userId',
    component: <UserPanel fragment={<OwnerViewUser />} owner={true} />,
    standalone: true,
  },
  {
    path: '/owner/notifications',
    component: <UserPanel fragment={<OwnerNotification />} owner={true} />,
    standalone: true,
  },
  {
    path: '/owner/notification/:id',
    component: <UserPanel fragment={<OwnerNotificationView />} owner={true} />,
    standalone: true,
  },
  {
    path: '/owner/blog',
    component: <UserPanel fragment={<DashBlog />} owner={true} />,
    standalone: true,
  },
  {
    path: '/forum/thread/:threadId',
    component: <Forum />,
    standalone: true,
  },
];
