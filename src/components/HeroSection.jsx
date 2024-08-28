import ferreteria1 from "../assets/ferreteria1.jpg";
import ferreteria2 from "../assets/ferreteria2.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Titulo */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Ingenieria y Proyectos
        <span className="bg-gradient-to-r from-green-200 via-sky-500 to-blue-600 text-transparent bg-clip-text">
          {" "}
          Tecnológicos Industriales
        </span>
      </h1>
      {/* Titulo */}
      {/* Descripcion */}
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        recusandae illo deleniti, quisquam similique officiis soluta inventore
        magni eius veniam hic autem, ipsum laboriosam, molestias laborum nulla
        nam. Odit, ut?
      </p>
      {/* Descripcion */}
      {/* Boton Contacto */}
      <div className="flex justify-center my-10">
        <a
          href=""
          className="bg-gradient-to-r from-green-400 to-blue-700 py-3 px-4 mx-3 rounded-md"
        >
          Contactanos
        </a>
      </div>
      {/* Boton Contacto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <img
            src={ferreteria1}
            className="w-full object-cover mx-4 my-2 border border-sky-400 shadow-blue-700 rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={ferreteria2}
            className="w-full object-cover mx-4 my-2 border border-sky-400 shadow-blue-700 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
