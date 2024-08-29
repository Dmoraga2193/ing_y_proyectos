import React from "react";
import Slider from "react-slick";
import { IoArrowBack, IoArrowForward } from "react-icons/io5"; // Importar íconos para botones

// Importar imágenes locales
import carusel1 from "../assets/carusel1.jpg";
import carusel2 from "../assets/carusel2.jpg";
import carusel3 from "../assets/carusel3.jpg";

// Configuración de las imágenes
const images = [
  { src: carusel1, title: "Titulo 1", description: "Descripción 1" },
  { src: carusel2, title: "Titulo 2", description: "Descripción 2" },
  { src: carusel3, title: "Titulo 3", description: "Descripción 3" },
];

// Componentes de botones personalizados
const PrevArrow = (props: any) => (
  <button
    {...props}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
  >
    <IoArrowBack size={24} />
  </button>
);

const NextArrow = (props: any) => (
  <button
    {...props}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
  >
    <IoArrowForward size={24} />
  </button>
);

const Carousel: React.FC = () => {
  // Configuración del carrusel usando react-slick
  const settings = {
    dots: true, // Muestra los puntos de navegación en la parte inferior
    infinite: true, // Habilita el desplazamiento infinito
    speed: 500, // Velocidad de transición entre diapositivas (en milisegundos)
    slidesToShow: 1, // Número de diapositivas a mostrar al mismo tiempo
    slidesToScroll: 1, // Número de diapositivas a desplazar al hacer clic en los botones
    arrows: true, // Habilita los botones de navegación
    prevArrow: <PrevArrow />, // Configura el botón de desplazamiento hacia atrás
    nextArrow: <NextArrow />, // Configura el botón de desplazamiento hacia adelante
  };

  return (
    <div className="relative w-full">
      {/* Contenedor del carrusel con posición relativa para posicionar los botones */}
      <Slider {...settings}>
        {/* Itera sobre las imágenes y las muestra como diapositivas */}
        {images.map((image, index) => (
          <div key={index} className="relative">
            {/* Contenedor para cada diapositiva con posición relativa */}
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover"
            />
            {/* Imagen de la diapositiva */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
              {/* Contenedor para el título y la descripción de la diapositiva */}
              <h2 className="text-4xl font-semibold mb-2 md:text-8xl md:font-bold ">
                {image.title}
              </h2>
              {/* Título de la diapositiva */}
              <p className="text-lg md:text-2xl">{image.description}</p>
              {/* Descripción de la diapositiva */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
