import {Routes, Route} from 'react-router-dom'
import {Home,Blog, About, Contact, SignUp, SignIn, Barbers, NotFound, BarbersDetails, MarketPlace} from '../pages'
const Routers = () => {
  return (
    <Routes>
    
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/barbers' element={<Barbers/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/1' element={<BarbersDetails/>} />
        <Route path='/marketplace' element={<MarketPlace/>} />
        <Route path='*' element={<NotFound/>} />
        
    </Routes>
  )
}

export default Routers