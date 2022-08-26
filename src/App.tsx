import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import NavBar from "./sections/NavBar"
import Jumbotron from "./sections/Jumbotron"
import Services from "./sections/Services"
import AboutMe from "./sections/AboutMe"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <Jumbotron />
      <Services />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
