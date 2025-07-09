import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 max-w-7xl mx-auto w-full rounded-md bg-black/10 backdrop-blur-lg px-6 py-4 z-20 flex justify-center items-center relative">

        {/* Menú desktop centrado */}
        <ul className="hidden sm:flex gap-16 text-sm font-semibold text-gray-700">
          <li><a href="/" className="hover:text-black">Inicio</a></li>
          <li><a href="/projects" className="hover:text-black">Proyectos</a></li>
          <li><a href="/contact" className="hover:text-black">Contacto</a></li>
        </ul>

        {/* Botón hamburguesa móvil - posición absoluta a la derecha */}
        <button
          className="sm:hidden absolute right-6 top-2 flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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

      {/* Menu móvil */}
      <div
  className={`sm:hidden fixed top-[64px] left-0 right-0 bg-black/10 backdrop-blur-lg flex flex-col items-center gap-8 py-6 text-gray-700 font-semibold transition-all duration-300 ${
    isOpen ? "max-h-60 opacity-100 z-30" : "max-h-0 opacity-0 overflow-hidden"
  }`}
>

        <a href="/" onClick={() => setIsOpen(false)} className="hover:text-black">Inicio</a>
        <a href="/projects" onClick={() => setIsOpen(false)} className="hover:text-black">Proyectos</a>
        <a href="/contact" onClick={() => setIsOpen(false)} className="hover:text-black">Contacto</a>
      </div>
    </>
  );
};

export default Navbar;
