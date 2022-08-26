import React from "react"
import styled from "styled-components"
import CTAButton from "../components/CTAButton"

const NBar = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);
`

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #252c49;
`

const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

const NavBar: React.FC = () => (
  <nav className="container navbar navbar-expand-lg p-4 fixed-top">
    <NBar className="container-fluid p-4 rounded-4">
      <Brand className="col">Gorka Villar</Brand>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <RightNav className="col">
          <CTAButton href="mailto:gorka@gorkavillar.com?subject=Hola%20Gorka%2C%20quiero%20conocer%20tus%20servicios&body=Hola%20Gorka%2C%20necesito...">
            ¡Quiero contratarte!
          </CTAButton>
        </RightNav>
      </div>
    </NBar>
  </nav>
)

export default NavBar
