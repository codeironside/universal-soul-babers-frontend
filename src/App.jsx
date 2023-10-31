import Aos from 'aos'
import 'aos/dist/aos.css'
import './App.css'

import {Routes, Route} from "react-router-dom";

import routes from "./routes.jsx"

import MasterLayout from './layouts/MasterLayout.jsx'
import {NotFound,} from "./pages";

const App = () => {

  Aos.init({
    duration: 250,
    offset: 0,
  })

  return (
    <Routes>
      {routes.map((route, key) =>
        <Route path={route.path}
               element={route.standalone ? route.component : <MasterLayout component={route.component}/>} key={key}/>
      )}
      {/*<Route path='/contact' element={<Contact/>}/>*/}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App;