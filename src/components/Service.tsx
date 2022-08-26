import React from "react"
import styled from "styled-components"

const ServComponent = styled.div`
  padding: 1rem;
  border-radius: 1.5rem;
  border: none;
  background-color: transparent;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(145deg, #ffccd0, #d4abf1);
  }
  .card {
    background-color: white;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    gap: 1rem;
    border: none;
    .avatar {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      overflow: hidden;
      background-color: #fbeae8;
      box-sizing: border-box;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  .title {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: normal;
  }
  .text {
    color: slategray;
    font-size: 0.9rem;
  }
`

const Service: React.FC<{ icon: string; title: string; text: string }> = ({
  icon,
  title,
  text
}) => {
  return (
    <ServComponent>
      <div className="card">
        <div className="picture">
          <picture className="avatar">
            <img src={icon} alt="" />
          </picture>
        </div>
        <CardContent>
          <span className="title">{title}</span>
          <span className="text">{text}</span>
        </CardContent>
      </div>
    </ServComponent>
  )
}

export default Service
