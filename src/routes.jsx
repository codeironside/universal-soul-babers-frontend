import {
  Home,
  Blog,
  About,
  Contact,
  Profile,
  Auth,
  Barbers,
  BarbersDetails,
  ProductDetails,
  MarketPlace,
} from "./pages";

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
]