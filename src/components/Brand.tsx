import React from "react";
import codelco from "../assets/LogosEmpresas/codelco.svg";
import containerland from "../assets/LogosEmpresas/containerland.svg";
import imperial from "../assets/LogosEmpresas/imperial.png";
import sika from "../assets/LogosEmpresas/sika.svg";
import sodimac from "../assets/LogosEmpresas/sodimac.png";
import "animate.css"; // Importación de animate.css

const Brand = () => {
  return (
    <>
      <section>
        <div className="container mx-auto flex justify-between items-center gap-6 flex-wrap py-4 mt-2">
          <img
            src={codelco}
            alt="Codelco"
            className="animate__animated animate__pulse animate__infinite max-w-[100px] max-h-[100px]"
          />
          <img
            src={containerland}
            alt="Containerland"
            className="animate__animated animate__pulse animate__infinite max-w-[100px] max-h-[100px]"
          />
          <img
            src={imperial}
            alt="Imperial"
            className="animate__animated animate__pulse animate__infinite max-w-[100px] max-h-[100px]"
          />
          <img
            src={sika}
            alt="Sika"
            className="animate__animated animate__pulse animate__infinite max-w-[100px] max-h-[80px]"
          />
          <img
            src={sodimac}
            alt="Sodimac"
            className=" animate__animated animate__pulse animate__infinite max-w-[100px] max-h-[100px]"
          />
        </div>
      </section>
    </>
  );
};

export default Brand;
