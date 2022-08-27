import React from "react"
import styled from "styled-components"
import Phone from "../components/Phone"

const CTAText = styled.div`
  color: #252c49;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.5rem;
  }
  .text {
    color: slategray;
    .accent {
      font-weight: 600;
      color: #252c49;
    }
  }
`

const RightAboutMe = styled.div`
  display: grid;
  place-content: center;
  @media (max-width: 768px) {
      margin-bottom: 5rem;
    }
`

const Row = styled.div`
  position: relative;
  .bottom-line {
    position: absolute;
    bottom: 0;
    height: 50%;
  }
`

const BottomLine = styled.div`
  height: 20rem;
  width: 100%;
  background-color: #fbeae8;
  z-index: -1;
  margin-top: -20rem;
`

const AboutMe = () => {
  return (
    <>
      <div className="container p-0">
        <Row>
          <div className="row">
            <div className="col">
              <CTAText>
                <span className="title">Permite que te cuente algo de mí</span>
                <div className="text">
                  <p>
                    Me gradué en Ingeniería Industrial hace unos años y descubrí
                    la programación el primer año de carrera. Desde entonces he
                    creado varias empresas y negocios digitales y creo que algo
                    he ido aprendiendo por el camino... 😉
                  </p>
                  <p>
                    Mi pasión y especialidad son{" "}
                    <span className="accent">Javascript y React JS</span>.
                  </p>
                  <p>
                    Mi objetivo en el mundo de los sistemas es crear nuevas{" "}
                    <span className="accent">
                      Soluciones Tecnológicas y Negocios Digitales
                    </span>{" "}
                    sobre todo relacionados con{" "}
                    <span className="accent">
                      Desarrollo de nuevas oportunidades laborales sostenibles
                    </span>
                    .
                  </p>
                  <p>
                    Siempre que puedo, me apoyo en mi pasión por desarrollar
                    productos con <span className="accent">Node.js</span> y
                    Librerías y Frameworks Modernos de Javascript como{" "}
                    <span className="accent">React.js y Next.js</span>.
                  </p>
                </div>
              </CTAText>
            </div>
            <RightAboutMe className="col">
              <Phone />
            </RightAboutMe>
          </div>
        </Row>
      </div>
      <BottomLine />
    </>
  )
}

export default AboutMe
