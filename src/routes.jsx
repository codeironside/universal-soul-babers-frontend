import { CartItem } from "./components";
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
} from "./pages";
import BlogContent from "./pages/BlogContent";
import Forum from "./pages/Forum";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import DashBarbers from "./pages/DashBarbers";
import MyServices from "./pages/MyServices";
import AppointMents from "./pages/AppointMents";

export default [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/contact",
    component: <Contact />,
    standalone: true
  },
  {
    path: "/barbers",
    component: <Barbers />,
  },
  {
    path: "/auth",
    component: <Auth />,
  },
  {
    path: "/blog",
    component: <Blog />,
  },
  {
    path: "/blog/content",
    component: <BlogContent />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
  {
    path: "/barber/:id",
    component: <BarbersDetails />,
  },
  {
    path: "/product/:id",
    component: <ProductDetails />,
  },
  {
    path: "/marketplace",
    component: <MarketPlace />,
  },
  {
    path: "/login",
    component: <Login />,
    standalone: true
  },
  {
    path: "/forum",
    component: <Forum />,
    standalone: true
  },
  {
    path: "/cart",
    component: <Cart />,
  },
  {
    path: "/dashboard",
    component: <UserPanel fragment={<Dashboard />} />,
    standalone: true
  },
  {
    path: "/settings",
    component: <UserPanel fragment={<Settings />} />,
    standalone: true
  },
  {
    path: "/my-barbers",
    component: <UserPanel fragment={<DashBarbers />} />,
    standalone: true
  },
  {
    path: "/services",
    component: <UserPanel fragment={<MyServices />} />,
    standalone: true
  },
  {
    path: "/appointments",
    component: <UserPanel fragment={<AppointMents />} />,
    standalone: true
  },
]