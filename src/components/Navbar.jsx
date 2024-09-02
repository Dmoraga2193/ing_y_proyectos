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
    <nav className="sticky top-2 z-50 py-2 px-4 backdrop-blur-lg border-neutral-700/80 rounded-full shadow-lg mx-10">
      <div className="container mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* Logo empresa en Navbar */}
            <img className="h-10 w-20 mr-5 rounded-lg" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Ferreteria Manquehue</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-sky-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Botón despliegue menú */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed top-0 right-0 z-20 bg-neutral-900 w-full h-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-5">
                  <a href={item.href} className="text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
