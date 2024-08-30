import React from "react";
import codelco from "../assets/LogosEmpresas/codelco.svg";
import containerland from "../assets/LogosEmpresas/containerland.svg";
import imperial from "../assets/LogosEmpresas/imperial.png";
import sika from "../assets/LogosEmpresas/sika.svg";
import sodimac from "../assets/LogosEmpresas/sodimac.png";

const Empresas = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-neutral-900">
      <div className="text-center my-8">
        <span className="bg-neutral-950 text-sky-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Empresas con las cuales trabajamos
        </span>
        <div className="my-8 flex flex-wrap justify-center items-center gap-40 p-8">
          <img
            src={codelco}
            alt="Codelco"
            className="w-20 h-20 object-contain"
          />
          <img
            src={containerland}
            alt="Containerland"
            className="w-20 h-20 object-contain"
          />
          <img
            src={imperial}
            alt="Imperial"
            className="w-20 h-20 object-contain"
          />
          <img src={sika} alt="Sika" className="w-20 h-20 object-contain" />
          <img
            src={sodimac}
            alt="Sodimac"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Empresas;
