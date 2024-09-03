import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants"; // Asegúrate de que navItems tenga { href: "", label: "" } para cada enlace

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-2 z-50 py-2 px-4 backdrop-blur-lg border-neutral-700/80 rounded-full shadow-lg mx-10">
      <div className="container mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* Logo empresa en Navbar */}
            <img className="h-10 w-20 mr-5 rounded-lg" src={logo} alt="logo" />
            <span className="text-xl tracking-tight text-white">
              Ing Protec
            </span>
          </div>

          {/* Botón de hamburguesa para pantallas pequeñas */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Menú normal para pantallas grandes */}
          <ul className="hidden lg:flex lg:space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-sky-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Menú desplegable para pantallas pequeñas */}
          {isMenuOpen && (
            <ul
              className={`absolute top-14 left-0 right-0 bg-neutral-900 bg-opacity-80 backdrop-blur-lg rounded-md shadow-lg p-4 text-white lg:hidden`}
            >
              {navItems.map((item, index) => (
                <li key={index} className="py-2 border-b border-neutral-600">
                  <a href={item.href} className="block hover:text-sky-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
