import React from "react"
import styled from "styled-components"

const Device = styled.div`
  padding: 0.75rem;
  border-radius: 1rem;
  background-color: #F3F4F5;
  width: 250px;
  box-sizing: content-box;
  display: flex;
  place-content: flex-end center;
  box-shadow: inset 0 0 10px #ccc, 10px 10px 10px #ccc;
  video {
    width: 250px;
    border-radius: 0.5rem;
  }
`

const Phone: React.FC = () => {
  return (
    <Device>
      <video autoPlay={true} loop={true}>
        <source src="/gorka_saluda.mp4" type="video/mp4" />
      </video>
    </Device>
  )
}

export default Phone
