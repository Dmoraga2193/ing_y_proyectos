import Carousel from "./components/Carousel";
// import Contacto from "./components/Contacto";
import Caracteristicas from "./components/Caracteristicas";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import Contacto2 from "./components/Contacto2";
import Contacto3 from "./components/Contacto3";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="carusel">
        <Carousel />
      </section>

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <section id="inicio">
          <Inicio />
        </section>
        <section id="caracteristicas">
          <Caracteristicas />
        </section>
        <section id="servicios">
          <Servicios />
        </section>
        {/* <section id="contacto">
          <Contacto />
        </section> */}
        <section id="contacto2">
          <Contacto2 />
        </section>
        <section id="contacto3">
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
