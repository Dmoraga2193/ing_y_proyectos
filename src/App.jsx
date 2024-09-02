// import Contacto from "./components/Contacto";
import Caracteristicas from "./components/Caracteristicas";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import Contacto2 from "./components/Contacto2";
import Contacto3 from "./components/Contacto3";
import { Footer } from "./components/Footer";
import Empresas from "./components/Empresas";
import Brand from "./components/Brand";
import "animate.css"; // Importación de animate.css

const App = () => {
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
        {/* <section id="empresas">
          <Empresas />
        </section> */}
        <section id="servicios">
          <Servicios />
        </section>
        {/* <section id="contacto">
          <Contacto />
        </section> */}
        {/* <section id="contacto2">
          <Contacto2 />
        </section> */}
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
