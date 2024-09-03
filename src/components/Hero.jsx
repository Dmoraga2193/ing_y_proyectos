import React from "react";
import videoInicio from "../assets/video_inicio.mp4";

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
          <source src={videoInicio} type="video/mp4" />
        </video>
        <div
          className="flex flex-col items-center mt-6 lg:mt-20 relative"
          data-aos="fade-up"
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
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            recusandae illo deleniti, quisquam similique officiis soluta
            inventore magni eius veniam hic autem, ipsum laboriosam, molestias
            laborum nulla nam. Odit, ut?
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
