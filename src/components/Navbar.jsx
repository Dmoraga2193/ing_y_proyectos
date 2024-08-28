import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* Logo empresa en Navbar */}
            <img className="h-10 w-20 mr-5 rounded-lg " src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Ferreteria Manquehue</span>
            {/* Logo empresa en Navbar */}
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* Boton de Ingreso */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="" className="py-2 px-3 border rounded-md">
              Ingresar
            </a>
            {/* Boton de Ingreso */}
            {/* Boton de crear cuenta */}
            <a
              href=""
              className="bg-gradient-to-r from-sky-400 to-blue-700 py-2 px-3 rounded-md shadow-custom-blue"
            >
              Crear cuenta
            </a>
            {/* Boton de crear cuenta */}
          </div>
          {/* Boton despliegue menu */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-5">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              {/* Boton de Ingreso */}
              <a href="" className="py-2 px-3 border rounded-md">
                Ingresar
              </a>
              {/* Boton de Ingreso */}
              {/* Boton de crear cuenta */}
              <a
                href=""
                className="py-2 px-3 rounded-md bg-gradient-to-r from-sky-400 to-blue-700 shadow-custom-blue"
              >
                Crear cuenta
              </a>
              {/* Boton de crear cuenta */}
            </div>
          </div>
        )}
        {/* Boton despliegue menu */}
      </div>
    </nav>
  );
};

export default Navbar;
