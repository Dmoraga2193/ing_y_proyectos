import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <section id="quienessomos">
          <HeroSection />
        </section>
        <section id="servicios">
          <FeatureSection />
        </section>
        <section id="clientes">
          <Servicios />
        </section>
      </div>
    </>
  );
};

export default App;
