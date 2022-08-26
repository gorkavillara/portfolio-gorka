import React from "react"
import styled from "styled-components"
import background from "../assets/background.svg"
import CTAButton from "../components/CTAButton"
import { SiGithub, SiInstagram, SiLinkedin, SiTiktok } from "react-icons/si"

interface IPlatform {
  name: string
  icon: React.ReactNode
  link: string
  color: string
}

const platforms: IPlatform[] = [
  {
    name: "Instagram",
    icon: <SiInstagram />,
    link: "https://instagram.com/gorkavillar_gv",
    color: "#F20073"
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/gorkavillar/",
    color: "#0A63BC"
  },
  {
    name: "TikTok",
    icon: <SiTiktok />,
    link: "https://www.tiktok.com/@gorkavillar_gv",
    color: "#1C002D"
  },
  {
    name: "Github",
    icon: <SiGithub />,
    link: "https://www.github.com/gorkavillara",
    color: "#2b2b2b"
  }
]

const Section = styled.section`
  background-image: url(${background});
  color: #252c49;
`

const Row = styled.div`
    padding: 7rem;
  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  padding-bottom: 0;
`

const Title = styled.h3`
  font-size: 3rem;
  font-weight: 800;
`

const Subtitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 300;
`

const LeftJumbo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 2rem;
`

const RightJumbo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Color = styled.span`
  color: #ff9900;
`

const SubRow = styled.div`
  margin-top: -1rem;
  padding: 3rem 6rem;
  width: 100%;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0), white);
  backdrop-filter: blur(8px);
`

const SubRowTitle = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`

const SubRowPlatforms = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1.5rem 0;
`

const Platform = styled.a`
  border-radius: 50%;
  background-color: white;
  box-shadow: 0.5rem 0.5rem 1rem #66666666;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-content: center;
  box-sizing: border-box;
  color: ${({ color }: { color: string }) => color};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${({ color }: { color: string }) => color};
    transform: scale(1.2);
  }
`

const Jumbotron: React.FC = () => (
  <Section id="jumbotron">
    <Row className="row">
      <LeftJumbo className="col">
        <Title>
          ¡Hola! Mi nombre es <Color>Gorka Villar</Color>
        </Title>
        <Subtitle>
          Desarrollador de negocios digitales, Desarrollador Web Full Stack e
          Instructor de programación en OpenBootcamp
        </Subtitle>
        <Subtitle>
          <CTAButton href="mailto:gorka@gorkavillar.com?subject=Hola%20Gorka%2C%20quiero%20conocer%20tus%20servicios&body=Hola%20Gorka%2C%20necesito...">
            Contacta conmigo
          </CTAButton>
        </Subtitle>
      </LeftJumbo>
      <RightJumbo className="col">
        <img src="/gorkavillar.png" alt="Gorka Villar Desarrollo Web" />
      </RightJumbo>
    </Row>
    <SubRow>
      <div className="container">
        <SubRowTitle className="title">
          Conecta conmigo en estas plataformas
        </SubRowTitle>
        <SubRowPlatforms>
          {platforms.map((platform: IPlatform) => (
            <Platform key={platform.name} color={platform.color} target="_blank">
              {platform.icon}
            </Platform>
          ))}
        </SubRowPlatforms>
      </div>
    </SubRow>
  </Section>
)

export default Jumbotron
