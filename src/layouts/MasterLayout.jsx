// Setting the layout for the app 

import { Header,Footer } from "../components";


<<<<<<< HEAD:src/layouts/Layout.jsx

const Layout= () => {
=======
const MasterLayout= ({ component }) => {
>>>>>>> fd399ff1742ca69f6e2eb16120eb834a2d464e74:src/layouts/MasterLayout.jsx
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