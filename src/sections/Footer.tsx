import React from "react"
import { SiGithub, SiInstagram, SiLinkedin, SiTiktok } from "react-icons/si"
import styled from "styled-components"

const FooterDiv = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background-color: #e7f7fb;
  font-weight: 600;
  color: #252c49;
  a {
    color: #252c49;
  }
`
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

const Platforms = styled.div`
  display: flex;
  gap: 1rem;
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

const Footer = () => {
  return (
    <FooterDiv>
      <div>
        <span>Desarrollado por </span>
        <a href="https://gorkavillar.com">Gorka Villar</a>
      </div>
      <div>Copyright (C) {new Date().getFullYear()} GV</div>
      <Platforms>
        {platforms.map((platform: IPlatform) => (
          <Platform
            key={platform.name}
            href={platform.link}
            color={platform.color}
            target="_blank"
          >
            {platform.icon}
          </Platform>
        ))}
      </Platforms>
    </FooterDiv>
  )
}

export default Footer
