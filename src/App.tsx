import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import NavBar from "./sections/NavBar"
import Jumbotron from "./sections/Jumbotron"
import Services from "./sections/Services"
import AboutMe from "./sections/AboutMe"
import Footer from "./sections/Footer"
import styled from "styled-components"

const AppContainer = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Jumbotron />
      <Services />
      <AboutMe />
      <Footer />
    </AppContainer>
  )
}

export default App
