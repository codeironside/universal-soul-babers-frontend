import Aos from 'aos'
import 'aos/dist/aos.css'
import Layout from './layouts/Layout'
import './App.css'
// import { useEffect } from "react";

const App = () => {
  
  Aos.init({
    duration: 1800,
    offset: 0,
  })
  return (
   <Layout />
  )
}

export default App;