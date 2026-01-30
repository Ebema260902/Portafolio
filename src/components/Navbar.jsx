import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

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

  // Manejar navegación por teclado (Tab, Shift+Tab, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (!menuRef.current) return;

      const links = Array.from(menuRef.current.querySelectorAll("a"));
      const currentIndex = links.findIndex((link) => link === document.activeElement);

      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift+Tab: ir al anterior
          if (currentIndex === 0) {
            e.preventDefault();
            buttonRef.current?.focus();
          }
        } else {
          // Tab: ir al siguiente
          if (currentIndex === links.length - 1) {
            e.preventDefault();
            // Permitir que el foco salga del menú
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Skip to main content link (accesibilidad) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#3b82f6] focus:text-white focus:rounded-lg focus:font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-black"
      >
        {t.nav.skipToContent}
      </a>

      {/* Barra de navegación móvil (solo logo de casa y menú hamburguesa) */}
      <nav
        className={`sm:hidden fixed top-0 left-0 right-0 w-full px-4 py-3 z-20 flex justify-between items-center
          backdrop-blur-xl transition-all duration-300 ${
            theme === "light"
              ? "bg-white/90 border-b border-gray-200"
              : "bg-black/40 border-b border-[#1a1a1a]"
          }`}
        aria-label="Navegación principal móvil"
        role="navigation"
      >
        {/* Logo de casa a la izquierda */}
        <a
          href="/"
          className={`min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
            theme === "light"
              ? "hover:bg-gray-100 focus:ring-offset-white text-gray-700"
              : "hover:bg-gray-800 focus:ring-offset-black text-gray-300"
          }`}
          aria-label={t.nav.home}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>

        {/* Controles a la derecha (idioma, tema, menú hamburguesa) */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className={`min-h-[44px] min-w-[44px] flex items-center justify-center px-3 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 font-medium text-sm ${
              theme === "light"
                ? "hover:bg-gray-200 focus:ring-offset-white text-gray-700"
                : "hover:bg-gray-800 focus:ring-offset-black text-gray-300"
            }`}
            aria-label={language === "es" ? t.nav.toggleLanguage.toEnglish : t.nav.toggleLanguage.toSpanish}
            type="button"
          >
            <span className="text-base">{language === "es" ? "EN" : "ES"}</span>
          </button>
          <button
            onClick={toggleTheme}
            className={`min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
              theme === "light"
                ? "hover:bg-gray-200 focus:ring-offset-white"
                : "hover:bg-gray-800 focus:ring-offset-black"
            }`}
            aria-label={theme === "light" ? t.nav.toggleTheme.toDark : t.nav.toggleTheme.toLight}
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
            className={`min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-1.5 cursor-pointer p-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg ${
              theme === "light"
                ? "focus:ring-offset-white hover:bg-gray-100"
                : "focus:ring-offset-black hover:bg-gray-800"
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

      {/* Barra de navegación desktop */}
      <nav
        className={`hidden sm:flex fixed top-0 left-0 right-0 w-full px-6 py-3 z-20 justify-between items-center
          backdrop-blur-xl transition-all duration-300 ${
            theme === "light"
              ? "bg-white/90 border-b border-gray-200"
              : "bg-black/40 border-b border-[#1a1a1a]"
          }`}
        aria-label="Navegación principal"
        role="navigation"
      >
        {/* Logo de casa a la izquierda */}
        <a
          href="/"
          className={`min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
            theme === "light"
              ? "hover:bg-gray-100 focus:ring-offset-white text-gray-700"
              : "hover:bg-gray-800 focus:ring-offset-black text-gray-300"
          }`}
          aria-label={t.nav.home}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>

        {/* Links de navegación en el centro */}
        <ul className="flex gap-8 text-sm font-medium items-center" role="menubar">
          <li role="none">
            <a
              href="/"
              className={`inline-block min-h-[44px] min-w-[44px] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-3 py-2 ${
                location.pathname === "/"
                  ? theme === "light"
                    ? "bg-blue-50 text-[#3b82f6] font-semibold border border-blue-200"
                    : "bg-blue-500/20 text-[#60a5fa] font-semibold border border-blue-500/30"
                  : theme === "light"
                  ? "text-gray-700 hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
                  : "text-gray-300 hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              <span className="text-base">{t.nav.home}</span>
              {location.pathname === "/" && (
                <span className="ml-2 text-xs" aria-hidden="true">●</span>
              )}
            </a>
          </li>
          <li role="none">
            <a
              href="/projects"
              className={`inline-block min-h-[44px] min-w-[44px] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-3 py-2 ${
                location.pathname === "/projects"
                  ? theme === "light"
                    ? "bg-blue-50 text-[#3b82f6] font-semibold border border-blue-200"
                    : "bg-blue-500/20 text-[#60a5fa] font-semibold border border-blue-500/30"
                  : theme === "light"
                  ? "text-gray-700 hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
                  : "text-gray-300 hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/projects" ? "page" : undefined}
            >
              <span className="text-base">{t.nav.projects}</span>
              {location.pathname === "/projects" && (
                <span className="ml-2 text-xs" aria-hidden="true">●</span>
              )}
            </a>
          </li>
          <li role="none">
            <a
              href="/contact"
              className={`inline-block min-h-[44px] min-w-[44px] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-3 py-2 ${
                location.pathname === "/contact"
                  ? theme === "light"
                    ? "bg-blue-50 text-[#3b82f6] font-semibold border border-blue-200"
                    : "bg-blue-500/20 text-[#60a5fa] font-semibold border border-blue-500/30"
                  : theme === "light"
                  ? "text-gray-700 hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
                  : "text-gray-300 hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/contact" ? "page" : undefined}
            >
              <span className="text-base">{t.nav.contact}</span>
              {location.pathname === "/contact" && (
                <span className="ml-2 text-xs" aria-hidden="true">●</span>
              )}
            </a>
          </li>
        </ul>

        {/* Controles a la derecha (idioma y tema) */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className={`min-h-[44px] min-w-[44px] flex items-center justify-center px-3 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 font-medium text-sm ${
              theme === "light"
                ? "hover:bg-gray-200 focus:ring-offset-white text-gray-700"
                : "hover:bg-gray-800 focus:ring-offset-black text-gray-300"
            }`}
            aria-label={language === "es" ? t.nav.toggleLanguage.toEnglish : t.nav.toggleLanguage.toSpanish}
            type="button"
          >
            <span className="text-base">{language === "es" ? "EN" : "ES"}</span>
          </button>
          <button
            onClick={toggleTheme}
            className={`min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
              theme === "light"
                ? "hover:bg-gray-200 focus:ring-offset-white"
                : "hover:bg-gray-800 focus:ring-offset-black"
            }`}
            aria-label={theme === "light" ? t.nav.toggleTheme.toDark : t.nav.toggleTheme.toLight}
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
        </div>
      </nav>

      {/* Menú desplegable móvil */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`sm:hidden fixed top-[60px] left-0 right-0 backdrop-blur-lg border-b flex flex-col items-center gap-8 py-6 font-medium transition-all duration-300 overflow-hidden ${
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
          className={`inline-block min-h-[44px] min-w-[44px] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-4 py-2 text-base ${
            location.pathname === "/"
              ? theme === "light"
                ? "bg-blue-50 text-[#3b82f6] font-semibold border border-blue-200"
                : "bg-blue-500/20 text-[#60a5fa] font-semibold border border-blue-500/30"
              : theme === "light"
              ? "hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
              : "hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
          }`}
          role="menuitem"
          aria-current={location.pathname === "/" ? "page" : undefined}
        >
          <span>{t.nav.home}</span>
          {location.pathname === "/" && (
            <span className="ml-2 text-xs" aria-hidden="true">●</span>
          )}
        </a>
        <a
          href="/projects"
          onClick={() => setIsOpen(false)}
          className={`inline-block min-h-[44px] min-w-[44px] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-4 py-2 text-base ${
            location.pathname === "/projects"
              ? theme === "light"
                ? "bg-blue-50 text-[#3b82f6] font-semibold border border-blue-200"
                : "bg-blue-500/20 text-[#60a5fa] font-semibold border border-blue-500/30"
              : theme === "light"
              ? "hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
              : "hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
          }`}
          role="menuitem"
          aria-current={location.pathname === "/projects" ? "page" : undefined}
        >
          <span>{t.nav.projects}</span>
          {location.pathname === "/projects" && (
            <span className="ml-2 text-xs" aria-hidden="true">●</span>
          )}
        </a>
        <a
          href="/contact"
          onClick={() => setIsOpen(false)}
          className={`inline-block min-h-[44px] min-w-[44px] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-4 py-2 text-base ${
            location.pathname === "/contact"
              ? theme === "light"
                ? "bg-blue-50 text-[#3b82f6] font-semibold border border-blue-200"
                : "bg-blue-500/20 text-[#60a5fa] font-semibold border border-blue-500/30"
              : theme === "light"
              ? "hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
              : "hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
          }`}
          role="menuitem"
          aria-current={location.pathname === "/contact" ? "page" : undefined}
        >
          <span>{t.nav.contact}</span>
          {location.pathname === "/contact" && (
            <span className="ml-2 text-xs" aria-hidden="true">●</span>
          )}
        </a>
      </div>
    </>
  );
};

export default Navbar;
