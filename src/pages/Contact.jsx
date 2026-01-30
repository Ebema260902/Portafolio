import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

const Contact = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <main id="main-content" className={`min-h-screen pt-20 transition-colors ${
        theme === "light" ? "bg-gray-50" : "bg-black"
    }`} role="main" aria-label={language === "es" ? "Página de contacto" : "Contact page"}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb - Indicador de ubicación */}
        <nav aria-label={language === "es" ? "Navegación" : "Breadcrumb"} className="mb-4">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <a 
                href="/" 
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded px-2 py-1 ${
                  theme === "light" 
                    ? "text-gray-600 hover:text-[#3b82f6] focus:ring-offset-white" 
                    : "text-[#9ca3af] hover:text-[#60a5fa] focus:ring-offset-black"
                }`}
                aria-label={language === "es" ? "Ir a inicio" : "Go to home"}
              >
                {language === "es" ? "Inicio" : "Home"}
              </a>
            </li>
            <li aria-hidden="true" className={`${theme === "light" ? "text-gray-400" : "text-[#6b7280]"}`}>/</li>
            <li className={`font-medium ${theme === "light" ? "text-gray-900" : "text-white"}`} aria-current="page">
              {t.contact.title}
            </li>
          </ol>
        </nav>

        <header className="mb-8 text-center">
          <h1 className={`text-4xl font-bold mb-3 ${
              theme === "light" ? "text-gray-900" : "text-white"
          }`}>{t.contact.title}</h1>
          <p className={`text-lg max-w-2xl mx-auto ${
              theme === "light" ? "text-gray-600" : "text-[#d1d5db]"
          }`}>
            {t.contact.description}
          </p>
        </header>

        <section aria-labelledby="contact-methods-heading">
          <h2 id="contact-methods-heading" className="sr-only">{language === "es" ? "Métodos de contacto" : "Contact methods"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:emanuel260902@gmail.com"
              className={`group block min-h-[120px] flex flex-col items-start gap-4 hover:border-[#3b82f6] hover:scale-[1.02] active:scale-[0.98] focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 px-6 py-6 rounded-xl transition-all duration-300 hover:shadow-2xl active:shadow-lg border-2 ${
                  theme === "light"
                      ? "bg-white border-gray-200 shadow-xl hover:shadow-blue-200/50 focus:ring-offset-white"
                      : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30 focus:ring-offset-black"
              }`}
              role="listitem"
              aria-label={language === "es" ? "Enviar correo electrónico a emanuel260902@gmail.com. Se abrirá tu cliente de correo" : "Send email to emanuel260902@gmail.com. Will open your email client"}
            >
              <div className="flex items-center gap-4 w-full">
                <div className={`p-3 rounded-lg ${
                    theme === "light" ? "bg-blue-50" : "bg-[#1a1a1a]"
                }`}>
                  <FaEnvelope className="text-2xl text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-white"
                  }`}>{t.contact.methods.email}</h3>
                  <p className={`text-base ${
                      theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                  }`}>emanuel260902@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/emanuel-ag%C3%BCero-moya-21b6b81a4/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group block min-h-[120px] flex flex-col items-start gap-4 hover:border-[#3b82f6] hover:scale-[1.02] active:scale-[0.98] focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 px-6 py-6 rounded-xl transition-all duration-300 hover:shadow-2xl active:shadow-lg border-2 ${
                  theme === "light"
                      ? "bg-white border-gray-200 shadow-xl hover:shadow-blue-200/50 focus:ring-offset-white"
                      : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30 focus:ring-offset-black"
              }`}
              role="listitem"
              aria-label={language === "es" ? "Visitar perfil de LinkedIn de Emanuel Agüero Moya (se abre en nueva ventana)" : "Visit Emanuel Agüero Moya's LinkedIn profile (opens in new window)"}
            >
              <div className="flex items-center gap-4 w-full">
                <div className={`p-3 rounded-lg ${
                    theme === "light" ? "bg-blue-50" : "bg-[#1a1a1a]"
                }`}>
                  <FaLinkedin className="text-2xl text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-white"
                  }`}>{t.contact.methods.linkedin}</h3>
                  <p className={`text-base ${
                      theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                  }`}>Emanuel Agüero Moya</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Ebema260902"
              target="_blank"
              rel="noopener noreferrer"
              className={`group block min-h-[120px] flex flex-col items-start gap-4 hover:border-[#3b82f6] hover:scale-[1.02] active:scale-[0.98] focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 px-6 py-6 rounded-xl transition-all duration-300 hover:shadow-2xl active:shadow-lg border-2 ${
                  theme === "light"
                      ? "bg-white border-gray-200 shadow-xl hover:shadow-blue-200/50 focus:ring-offset-white"
                      : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30 focus:ring-offset-black"
              }`}
              role="listitem"
              aria-label={language === "es" ? "Visitar perfil de GitHub Ebema260902 (se abre en nueva ventana)" : "Visit GitHub profile Ebema260902 (opens in new window)"}
            >
              <div className="flex items-center gap-4 w-full">
                <div className={`p-3 rounded-lg ${
                    theme === "light" ? "bg-blue-50" : "bg-[#1a1a1a]"
                }`}>
                  <FaGithub className="text-2xl text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-white"
                  }`}>{t.contact.methods.github}</h3>
                  <p className={`text-base ${
                      theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                  }`}>/Ebema260902</p>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/50662076022"
              target="_blank"
              rel="noopener noreferrer"
              className={`group block min-h-[120px] flex flex-col items-start gap-4 hover:border-[#3b82f6] hover:scale-[1.02] active:scale-[0.98] focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 px-6 py-6 rounded-xl transition-all duration-300 hover:shadow-2xl active:shadow-lg border-2 ${
                  theme === "light"
                      ? "bg-white border-gray-200 shadow-xl hover:shadow-blue-200/50 focus:ring-offset-white"
                      : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30 focus:ring-offset-black"
              }`}
              role="listitem"
              aria-label={language === "es" ? "Contactar por WhatsApp al número +506 62076022 (se abre en nueva ventana o aplicación)" : "Contact via WhatsApp at number +506 62076022 (opens in new window or app)"}
            >
              <div className="flex items-center gap-4 w-full">
                <div className={`p-3 rounded-lg ${
                    theme === "light" ? "bg-blue-50" : "bg-[#1a1a1a]"
                }`}>
                  <FaWhatsapp className="text-2xl text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-white"
                  }`}>{t.contact.methods.whatsapp}</h3>
                  <p className={`text-base ${
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
