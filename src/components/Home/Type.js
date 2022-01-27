import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador de Negocios Digitales",
          "Desarrollador Full Stack",
          "Experto en Facebook Ads",
          "Ingeniero y Consultor de Negocio",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
