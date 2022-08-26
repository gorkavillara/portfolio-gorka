import React from "react"
import styled from "styled-components"
import CTAButton from "../components/CTAButton"
import Service from "../components/Service"

interface IService {
  icon: string
  title: string
  text: string
}

const services: IService[] = [
  {
    icon: "./desarrollo_apps.png",
    title: "Desarrollo Web",
    text: "Desarrollo de páginas, aplicaciones web y Apps móviles a medida."
  },
  {
    icon: "./api.png",
    title: "Integraciones",
    text: "Ahorra horas de trabajo en tu negocio con integraciones personalizadas."
  },
  {
    icon: "./venta_online.png",
    title: "Estrategia digital",
    text: "Incrementa tus ventas con mi servicio de Estrategia para Negocios Digitales."
  }
]

const ServicesLeft = styled.div`
  background-color: #e9f6fb;
  padding: 1rem;
  border-radius: 1rem;
`

const CTAText = styled.div`
  color: #252c49;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 1rem;
  .title {
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.5rem;
    .color {
      color: #ff9900;
    }
  }
  .text {
    color: slategray;
  }
`

const Services: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ServicesLeft>
            {services.map((service: IService) => (
              <Service
                key={service.title}
                icon={service.icon}
                title={service.title}
                text={service.text}
              />
            ))}
          </ServicesLeft>
        </div>
        <div className="col">
          <CTAText>
            <span className="title">
              Servicios con más de{" "}
              <span className="color">10 años de experiencia</span>
            </span>
            <div className="text">
              <p>
                Si estás aquí es porque{" "}
                <strong>
                  necesitas resultados, y eso es lo que mis clientes siempre
                  reciben, SIN EXCEPCIÓN.
                </strong>
              </p>
              <p>
                Llevo más de 10 años desarrollando negocios digitales{" "}
                <strong>y eso se nota.</strong>
              </p>
              <p>
                Desde agencias de publicidad, ERPs personalizados para marcas de
                moda y múltiples aplicaciones de e-commerce...
              </p>
              <p>
                Solo{" "}
                <strong>haz clic en el botón y hablamos sin compromiso</strong>{" "}
                😉
              </p>
            </div>
            <CTAButton href="mailto:gorka@gorkavillar.com?subject=Hola%20Gorka%2C%20quiero%20conocer%20tus%20servicios&body=Hola%20Gorka%2C%20necesito...">
              ¡Quiero contratarte!
            </CTAButton>
          </CTAText>
        </div>
      </div>
    </div>
  )
}

export default Services
