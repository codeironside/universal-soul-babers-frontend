import { CartItem } from "./components";
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
import BlogContent from "./pages/BlogContent";
import Forum from "./pages/Forum";
import Cart from "./pages/Cart";

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
    path: "/dashboard",
    component: <Dashboard />,
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
]