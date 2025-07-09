import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-8 left-1/2 transform -translate-x-1/2 max-w-7xl w-full rounded-lg px-6 py-4 z-20 flex justify-center items-center
          bg-transparent sm:bg-black/10 sm:backdrop-blur-lg"
        aria-label="Main navigation"
      >
        <ul className="hidden sm:flex gap-16 text-sm font-semibold text-gray-700">
          <li>
            <a href="/" className="hover:text-black">
              Inicio
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-black">
              Proyectos
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-black">
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa  */}
        <button
          className="sm:hidden absolute right-6 top-2 flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menú desplegable */}
      <div
        className={`sm:hidden fixed top-[64px] left-0 right-0 bg-black/10 backdrop-blur-lg flex flex-col items-center gap-8 py-6 text-gray-700 font-semibold transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100 z-30" : "max-h-0 opacity-0"
        }`}
      >
        <a
          href="/"
          onClick={() => setIsOpen(false)}
          className="hover:text-black"
        >
          Inicio
        </a>
        <a
          href="/projects"
          onClick={() => setIsOpen(false)}
          className="hover:text-black"
        >
          Proyectos
        </a>
        <a
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="hover:text-black"
        >
          Contacto
        </a>
      </div>
    </>
  );
};

export default Navbar;
