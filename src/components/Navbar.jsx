import React from "react";
import "../index.css";

const Navbar = () => {
    return (
        <nav
            className="fixed top-8 flex items-center justify-between max-w-7xl w-full bg-black/10 backdrop-blur-lg rounded-xl px-6 py-2 transition-all duration-300 z-20"
        >
            {/* Logo */}
            <a href="/" className="text-black font-bold text-xl flex items-center">
                <span className="text-red-500">
                    {/* Si necesitas un logo, agrégalo aquí */}
                </span>
            </a>

            {/* Menú de navegación */}
            <ul className="flex items-center gap-16 text-sm font-semibold text-gray-700">
                <a href="/" className="hover:text-black">
                    <li>Inicio</li>
                </a>
                <a href="/projects" className="hover:text-black">
                    <li>Proyectos</li>
                </a>
                <a href="/contact" className="hover:text-black">
                    <li>Contacto</li>
                </a>
                {/* <a href="/blog" className="hover:text-black">
                    <li>Blog</li>
                </a> */}
            </ul>

            {/* Idioma y menú */}
            <div className="flex gap-4 items-center">
                {/* <a href="#" className="text-black hover:text-gray-600 cursor-pointer">EN</a>
                <button className="text-black hover:text-gray-600 cursor-pointer text-xl">
                    ☰
                </button> */}
            </div>
        </nav>
    );
};

export default Navbar;