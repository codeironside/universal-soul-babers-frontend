import {
  Home,
  Blog,
  About,
  Contact,
  Profile,
  Auth,
  Dashboard,
  Barbers,
  BarbersDetails,
  ProductDetails,
  MarketPlace,
  Login,
} from "./pages";
import {AiFillDashboard} from "react-icons/ai";

export default [
  {
    path: "/",
    component: <Home/>,
  },
  {
    path: "/about",
    component: <About/>,
  },
  {
    path: "/contact",
    component: <Contact/>,
    standalone: true
  },
  {
    path: "/barbers",
    component: <Barbers/>,
  },
  {
    path: "/auth",
    component: <Auth/>,
  },
  {
    path: "/blog",
    component: <Blog/>,
  },
  {
    path: "/profile",
    component: <Profile/>,
  },
  {
    path: "/barber/:id",
    component: <BarbersDetails/>,
  },
  {
    path: "/product/:id",
    component: <ProductDetails/>,
  },
  {
    path: "/marketplace",
    component: <MarketPlace/>,
  },
  {
    path: "/login",
    component: <Login/>,
    standalone: true
  },
  {
    path: "/dashboard",
    component: <Dashboard/>,
    standalone: true
  },
]