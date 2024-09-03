import React from "react";
import videoInicio from "../assets/video_inicio_nuevo.webm";
import "aos/dist/aos.css"; // Importación de los estilos de AOS

const Hero = () => {
  return (
    <>
      <div className=" min-h-[750px] overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-[900px] object-cover"
        >
          <source src={videoInicio} type="video/webm" />
        </video>
        <div
          data-aos="fade-up"
          className="flex flex-col items-center mt-6 lg:mt-20 relative"
        >
          {/* Titulo */}

          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Ingenieria y Proyectos
            <span className="bg-gradient-to-r from-green-200 via-sky-500 to-blue-600 text-transparent bg-clip-text">
              {" "}
              Tecnológicos Industriales
            </span>
          </h1>

          {/* Descripcion */}
          <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl py-10">
            es una empresa líder en ingeniería y proyectos tecnológicos
            industriales. Nos especializamos en el diseño, desarrollo y
            ejecución de soluciones innovadoras para optimizar procesos
            industriales y mejorar la eficiencia operativa. Nuestro equipo de
            expertos combina experiencia técnica y creatividad para ofrecer
            resultados de alta calidad que cumplen con los más altos estándares
            de la industria.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
