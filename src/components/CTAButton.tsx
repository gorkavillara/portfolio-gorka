import React from "react"
import styled from "styled-components"
const CTABtn = styled.a`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  background-color: #ff9900;
  text-decoration: none;
  border: solid 2px #ff9900;
  border-radius: 0.5rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: #ff9900;
  }
`

const CTAButton: React.FC<{ href: string; children: any }> = ({
  href,
  children
}) => {
  return <CTABtn href={href}>{children}</CTABtn>
}

export default CTAButton
