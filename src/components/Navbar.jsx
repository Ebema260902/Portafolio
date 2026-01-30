import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Cerrar menú con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Manejar navegación por teclado en el menú móvil
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a");
      firstLink?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Skip to main content link (accesibilidad) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#3b82f6] focus:text-white focus:rounded-lg focus:font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-black"
      >
        Saltar al contenido principal
      </a>

      <nav
        className={`fixed top-8 left-1/2 transform -translate-x-1/2 max-w-7xl w-full rounded-full px-6 py-3 z-20 flex justify-center items-center
          bg-transparent sm:backdrop-blur-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
            theme === "light"
              ? "sm:bg-white/90 border border-gray-200 hover:shadow-blue-200/30"
              : "sm:bg-black/40 border border-[#1a1a1a] hover:shadow-blue-500/20"
          }`}
        aria-label="Navegación principal"
        role="navigation"
      >
        <ul className="hidden sm:flex gap-12 text-sm font-medium items-center" role="menubar">
          <li role="none">
            <a
              href="/"
              className={`transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded px-2 py-1 ${
                theme === "light"
                  ? "text-gray-700 hover:text-gray-900 focus:ring-offset-white"
                  : "text-gray-300 hover:text-white focus:ring-offset-black"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Inicio
            </a>
          </li>
          <li role="none">
            <a
              href="/projects"
              className={`transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded px-2 py-1 ${
                theme === "light"
                  ? "text-gray-700 hover:text-gray-900 focus:ring-offset-white"
                  : "text-gray-300 hover:text-white focus:ring-offset-black"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/projects" ? "page" : undefined}
            >
              Proyectos
            </a>
          </li>
          <li role="none">
            <a
              href="/contact"
              className={`transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded px-2 py-1 ${
                theme === "light"
                  ? "text-gray-700 hover:text-gray-900 focus:ring-offset-white"
                  : "text-gray-300 hover:text-white focus:ring-offset-black"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/contact" ? "page" : undefined}
            >
              Contacto
            </a>
          </li>
          <li role="none" className="ml-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
                theme === "light"
                  ? "hover:bg-gray-200 focus:ring-offset-white"
                  : "hover:bg-gray-800 focus:ring-offset-black"
              }`}
              aria-label={theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
              type="button"
            >
              {theme === "light" ? (
                // Icono de luna (modo claro -> cambiar a oscuro)
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                // Icono de sol (modo oscuro -> cambiar a claro)
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </li>
        </ul>

        {/* Botón hamburguesa y toggle de tema móvil */}
        <div className="sm:hidden absolute right-6 top-2 flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
              theme === "light"
                ? "hover:bg-gray-200 focus:ring-offset-white"
                : "hover:bg-gray-800 focus:ring-offset-black"
            }`}
            aria-label={theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
            type="button"
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
          <button
            ref={buttonRef}
            className={`flex flex-col gap-1.5 cursor-pointer p-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded ${
              theme === "light"
                ? "focus:ring-offset-white"
                : "focus:ring-offset-black"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
          >
          <span
            className={`block w-6 h-0.5 transition-transform duration-300 ${
              theme === "light" ? "bg-gray-700" : "bg-gray-300"
            } ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 transition-opacity duration-300 ${
              theme === "light" ? "bg-gray-700" : "bg-gray-300"
            } ${isOpen ? "opacity-0" : "opacity-100"}`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 transition-transform duration-300 ${
              theme === "light" ? "bg-gray-700" : "bg-gray-300"
            } ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            aria-hidden="true"
          />
        </button>
        </div>
      </nav>

      {/* Menú desplegable móvil */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`sm:hidden fixed top-[64px] left-0 right-0 backdrop-blur-lg border-b flex flex-col items-center gap-8 py-6 font-medium transition-all duration-300 overflow-hidden ${
          theme === "light"
            ? "bg-white/95 border-gray-200 text-gray-700"
            : "bg-black/95 border-[#1a1a1a] text-gray-300"
        } ${isOpen ? "max-h-60 opacity-100 z-30" : "max-h-0 opacity-0 pointer-events-none"}`}
        role="menu"
        aria-hidden={!isOpen}
      >
        <a
          href="/"
          onClick={() => setIsOpen(false)}
          className={`transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded px-4 py-2 ${
            theme === "light"
              ? "hover:text-gray-900 focus:ring-offset-white"
              : "hover:text-white focus:ring-offset-black"
          }`}
          role="menuitem"
        >
          Inicio
        </a>
        <a
          href="/projects"
          onClick={() => setIsOpen(false)}
          className={`transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded px-4 py-2 ${
            theme === "light"
              ? "hover:text-gray-900 focus:ring-offset-white"
              : "hover:text-white focus:ring-offset-black"
          }`}
          role="menuitem"
        >
          Proyectos
        </a>
        <a
          href="/contact"
          onClick={() => setIsOpen(false)}
          className={`transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded px-4 py-2 ${
            theme === "light"
              ? "hover:text-gray-900 focus:ring-offset-white"
              : "hover:text-white focus:ring-offset-black"
          }`}
          role="menuitem"
        >
          Contacto
        </a>
      </div>
    </>
  );
};

export default Navbar;
