import Header from "./components/Header"
import Services from "./components/Services"
import Cards from "./components/Card"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Carousel from "./components/CaseStudies"
import About from "./components/About"
import Footer from "./components/Footer"
import {MyTabContext} from "./contexts/ProjectContext"

export default function App() {

  return (
    <>
      <Navbar />
      <Header />
      

      <Services />

      <MyTabContext>
        <Projects />  
      </MyTabContext>

      <Carousel />
      <About />
      <Cards />
      <Footer />

    </>
  )
}


