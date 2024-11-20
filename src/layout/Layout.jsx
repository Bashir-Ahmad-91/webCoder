import About from "../sections/About"
import Banner from "../sections/Banner"
import Header from "../sections/Header"
import Sarvis from "../sections/Servic"
import Portfolio from "../sections/Portfolio"
import Contact from "../sections/Contact"
import Tachnology from "../sections/Tachnology"

function Layout() {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <Sarvis />
    <Portfolio />
    <Contact />
    <Tachnology />
    </>
  )
}

export default Layout