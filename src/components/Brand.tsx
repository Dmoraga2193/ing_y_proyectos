import React from "react";
import codelco from "../assets/LogosEmpresas/codelco.svg";
import containerland from "../assets/LogosEmpresas/containerland.svg";
import imperial from "../assets/LogosEmpresas/imperial.png";
import sika from "../assets/LogosEmpresas/sika.svg";
import sodimac from "../assets/LogosEmpresas/sodimac.png";
import "animate.css"; // Importación de animate.css
import "aos/dist/aos.css"; // Importación de los estilos de AOS

const Brand = () => {
  return (
    <>
      <section>
        <div className="container mx-auto flex justify-between items-center gap-6 flex-wrap py-4 px-8 mt-2">
          <img
            data-aos="flip-left"
            src={codelco}
            alt="Codelco"
            className=" max-w-[100px] max-h-[100px]"
          />
          <img
            data-aos="flip-right"
            src={containerland}
            alt="Containerland"
            className=" max-w-[100px] max-h-[100px]"
          />
          <img
            data-aos="flip-left"
            src={imperial}
            alt="Imperial"
            className=" max-w-[100px] max-h-[100px]"
          />
          <img
            data-aos="flip-right"
            src={sika}
            alt="Sika"
            className=" max-w-[100px] max-h-[80px]"
          />
          <img
            data-aos="flip-left"
            src={sodimac}
            alt="Sodimac"
            className="  max-w-[100px] max-h-[100px]"
          />
        </div>
      </section>
    </>
  );
};

export default Brand;
