import { Header,Footer } from "../components";
import Routers from '../routes/Routers'
const Layout= () => {
  return (
    <>
        <Header />
        <main>
            <Routers />
        </main>
        <Footer />
    </>
  )
}

export default Layout