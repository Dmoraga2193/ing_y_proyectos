import React from "react";
import codelco from "../assets/LogosEmpresas/codelco.svg";
import containerland from "../assets/LogosEmpresas/containerland.svg";
import imperial from "../assets/LogosEmpresas/imperial.png";
import sika from "../assets/LogosEmpresas/sika.svg";
import sodimac from "../assets/LogosEmpresas/sodimac.png";
import "aos/dist/aos.css"; // Importación de los estilos de AOS

const Brand = () => {
  return (
    <>
      <section className="py-5 backdrop-blur-[2px]">
        <div className="container mx-auto text-center">
          <h2
            data-aos="zoom-in-down"
            className=" text-sky-500  h-2 text-sm font-medium uppercase "
          >
            Nuestros proveedores
          </h2>{" "}
          {/* Título agregado */}
          <div className="flex justify-between items-center gap-6 flex-wrap py-4 px-8 mt-2">
            <img
              data-aos="flip-left"
              src={codelco}
              alt="Codelco"
              className="max-w-[100px] max-h-[100px]"
            />
            <img
              data-aos="flip-right"
              src={containerland}
              alt="Containerland"
              className="max-w-[100px] max-h-[100px]"
            />
            <img
              data-aos="flip-left"
              src={imperial}
              alt="Imperial"
              className="max-w-[100px] max-h-[100px]"
            />
            <img
              data-aos="flip-right"
              src={sika}
              alt="Sika"
              className="max-w-[100px] max-h-[80px]"
            />
            <img
              data-aos="flip-left"
              src={sodimac}
              alt="Sodimac"
              className="max-w-[100px] max-h-[100px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
