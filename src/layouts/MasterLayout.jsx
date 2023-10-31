// Setting the layout for the app 

import { Header,Footer } from "../components";


const MasterLayout= ({ component }) => {
  return (
    <>
        <Header />
        <main>
          {component}
        </main>
        <Footer />
    </>
  )
}

export default MasterLayout