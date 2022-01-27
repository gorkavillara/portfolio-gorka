import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/gorkainsta_02.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITE <span className="purple"> QUE TE CUENTE ALGO </span> DE MÍ
            </h1>
            <p className="home-about-body">
              Me gradué en Ingeniería Industrial hace unos años y descubrí la programación el primer año de carrera.
              Desde entonces he creado varias empresas y negocios digitales y creo que algo he ido aprendiendo por el camino... 🤷‍♂️
              <br />
              <br />Mi pasión y especialidad es
              <i>
                <b className="purple"> Javascript y React JS. </b>
              </i>
              <br />
              <br />
              Mi objetivo en el mundo de los sistemas es crear nuevas &nbsp;
              <i>
                <b className="purple">Soluciones Tecnológicas y Negocios Digitales </b> sobre todo relacionados con{" "}
                <b className="purple">
                  Desarrollo de nuevas oportunidades laborales sostenibles
                </b>
              </i>
              <br />
              <br />
              Siempre que puedo, me apalanco en mi pasión por desarrollar productos con <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Librerías y Frameworks Modernos de Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Adelante, <span className="purple">conecta </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://instagram.com/gorkavillar_gv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gorkavillar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
