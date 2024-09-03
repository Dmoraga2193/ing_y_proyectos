// import Contacto from "./components/Contacto";
import Caracteristicas from "./components/Caracteristicas";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import Contacto3 from "./components/Contacto3";
import { Footer } from "./components/Footer";
import Brand from "./components/Brand";
import React, { useEffect } from "react"; // Asegúrate de que useEffect esté importado
import "animate.css"; // Importación de animate.css
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos CSS de AOS

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 20, // Desplazamiento de 20px desde el punto de inicio
      duration: 800, // Duración de la animación en milisegundos
      easing: "ease-in-out", // Función de easing
      delay: 80, // Retraso de 80 milisegundos
      once: false, // Si la animación se debe ejecutar solo una vez
    });
  }, []);
  return (
    <>
      <Navbar />
      <section id="inicio">
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero />
        </div>
      </section>

      <Brand />

      <Caracteristicas />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <section id="inicio"></section>

        <section id="caracteristicas"></section>

        <section id="servicios">
          <Servicios />
        </section>
        <section id="contacto">
          <Contacto3 />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App;
