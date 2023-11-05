import {Header, Footer} from "../components";


const MasterLayout = ({component}) => {
  return (
    <>
      <Header/>
      {component}
      <Footer/>
    </>
  )
}

export default MasterLayout