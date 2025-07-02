import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar desktop */}
      <nav className="fixed top-8 left-0 right-0 flex justify-center max-w-7xl mx-auto w-full bg-black/10 backdrop-blur-lg lg:rounded-xl  px-6 py-2 z-20">
        <ul className="flex gap-16 text-sm font-semibold text-gray-700">
          <li><a href="/" className="hover:text-black">Inicio</a></li>
          <li><a href="/projects" className="hover:text-black">Proyectos</a></li>
          <li><a href="/contact" className="hover:text-black">Contacto</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
