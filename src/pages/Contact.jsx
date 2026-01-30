import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext.jsx";

const Contact = () => {
  const { theme } = useTheme();
  
  return (
    <main id="main-content" className={`min-h-screen pt-20 transition-colors ${
        theme === "light" ? "bg-gray-50" : "bg-black"
    }`} role="main" aria-label="Página de contacto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className={`text-4xl font-bold mb-2 ${
              theme === "light" ? "text-gray-900" : "text-white"
          }`}>Contacto</h1>
          <p className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-[#d1d5db]"
          }`}>Puedes contactarme a través de cualquiera de estos canales</p>
        </header>

        <section aria-labelledby="contact-methods-heading">
          <h2 id="contact-methods-heading" className="sr-only">Métodos de contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:emanuel260902@gmail.com"
              className={`group flex flex-col items-start gap-4 hover:border-[#3b82f6]/50 focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 px-6 py-6 rounded-xl transition-all hover:shadow-2xl ${
                  theme === "light"
                      ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50 focus:ring-offset-white"
                      : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30 focus:ring-offset-black"
              }`}
              role="listitem"
              aria-label="Enviar correo electrónico a emanuel260902@gmail.com"
            >
              <div className="flex items-center gap-4 w-full">
                <div className={`p-3 rounded-lg ${
                    theme === "light" ? "bg-blue-50" : "bg-[#1a1a1a]"
                }`}>
                  <FaEnvelope className="text-2xl text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-white"
                  }`}>Email</h3>
                  <p className={`text-sm ${
                      theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                  }`}>emanuel260902@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/emanuel-ag%C3%BCero-moya-21b6b81a4/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-start gap-4 hover:border-[#3b82f6]/50 focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 px-6 py-6 rounded-xl transition-all hover:shadow-2xl ${
                  theme === "light"
                      ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50 focus:ring-offset-white"
                      : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30 focus:ring-offset-black"
              }`}
              role="listitem"
              aria-label="Visitar perfil de LinkedIn de Emanuel Agüero Moya (se abre en nueva ventana)"
            >
              <div className="flex items-center gap-4 w-full">
                <div className={`p-3 rounded-lg ${
                    theme === "light" ? "bg-blue-50" : "bg-[#1a1a1a]"
                }`}>
                  <FaLinkedin className="text-2xl text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-white"
                  }`}>LinkedIn</h3>
                  <p className={`text-sm ${
                      theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                  }`}>Emanuel Agüero Moya</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Ebema260902"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-start gap-4 hover:border-[#3b82f6]/50 focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 px-6 py-6 rounded-xl transition-all hover:shadow-2xl ${
                  theme === "light"
                      ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50 focus:ring-offset-white"
                      : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30 focus:ring-offset-black"
              }`}
              role="listitem"
              aria-label="Visitar perfil de GitHub Ebema260902 (se abre en nueva ventana)"
            >
              <div className="flex items-center gap-4 w-full">
                <div className={`p-3 rounded-lg ${
                    theme === "light" ? "bg-blue-50" : "bg-[#1a1a1a]"
                }`}>
                  <FaGithub className="text-2xl text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-white"
                  }`}>GitHub</h3>
                  <p className={`text-sm ${
                      theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                  }`}>/Ebema260902</p>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/50662076022"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-start gap-4 hover:border-[#3b82f6]/50 focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 px-6 py-6 rounded-xl transition-all hover:shadow-2xl ${
                  theme === "light"
                      ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50 focus:ring-offset-white"
                      : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30 focus:ring-offset-black"
              }`}
              role="listitem"
              aria-label="Contactar por WhatsApp al número +506 62076022 (se abre en nueva ventana)"
            >
              <div className="flex items-center gap-4 w-full">
                <div className={`p-3 rounded-lg ${
                    theme === "light" ? "bg-blue-50" : "bg-[#1a1a1a]"
                }`}>
                  <FaWhatsapp className="text-2xl text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-white"
                  }`}>WhatsApp</h3>
                  <p className={`text-sm ${
                      theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                  }`}>+506 62076022</p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
