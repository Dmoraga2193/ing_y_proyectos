import Carousel from "./components/Carousel";
import Contacto from "./components/Contacto";
import Caracteristicas from "./components/Caracteristicas";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";

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
        <section id="servicios">
          <Caracteristicas />
        </section>
        <section id="clientes">
          <Servicios />
        </section>
        <section id="contacto">
          <Contacto />
        </section>
      </div>
    </>
  );
};

export default App;
