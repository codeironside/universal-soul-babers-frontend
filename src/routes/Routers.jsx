import { Routes, Route } from "react-router-dom";
import {
  Home,
  Blog,
  About,
  Contact,
  SignUp,
  SignIn,
  Barbers,
  NotFound,
  BarbersDetails,
  ProductDetails,
  MarketPlace,
} from "../pages";
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/barbers' element={<Barbers />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/barber/:id' element={<BarbersDetails />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/marketplace' element={<MarketPlace />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
