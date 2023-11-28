import {Header, Footer} from "../components";
import { ImageProvider } from "../context/ImageContext";


const MasterLayout = ({component}) => {
  return (
    <ImageProvider>
      <Header/>
      {component}
      <Footer/>
    </ImageProvider>
  )
}

export default MasterLayout
