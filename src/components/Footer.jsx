import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { translations } from "../translations/translations.js";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaMapMarkerAlt, FaHome, FaProjectDiagram, FaAddressCard } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <footer className={`border-t transition-colors ${
        theme === "light"
            ? "bg-gray-50 border-gray-200"
            : "bg-black border-[#1a1a1a]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Descripción */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-white"
            }`}>{language === "es" ? "Mi Portafolio" : "My Portfolio"}</h3>
            <p className={`text-base leading-relaxed ${
                theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
            }`}>
              {language === "es" 
                ? "Diseñador UX/UI, desarrollador web y profesional en experiencia de usuario. Comparto proyectos y experiencias en diseño de interfaces, desarrollo web y tecnología."
                : "UX/UI designer, web developer and user experience professional. I share projects and experiences in interface design, web development and technology."}
            </p>
          </div>

          {/* Enlaces */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-white"
            }`}>{language === "es" ? "Navegación" : "Navigation"}</h3>
            <ul className="space-y-2">
              {[
                { label: t.nav.home, path: "/", icon: FaHome, ariaLabel: language === "es" ? "Ir a la página de inicio" : "Go to home page" },
                { label: t.nav.projects, path: "/projects", icon: FaProjectDiagram, ariaLabel: language === "es" ? "Ir a la página de proyectos" : "Go to projects page" },
                { label: t.nav.contact, path: "/contact", icon: FaAddressCard, ariaLabel: language === "es" ? "Ir a la página de contacto" : "Go to contact page" },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`inline-flex items-center gap-2 min-h-[44px] min-w-[44px] text-base transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-2 py-1 ${
                          theme === "light"
                              ? "text-gray-600 hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
                              : "text-[#9ca3af] hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
                      }`}
                      aria-label={link.ariaLabel}
                    >
                      <Icon className="text-sm" aria-hidden="true" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-white"
            }`}>{t.contact.title}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className={`text-sm mt-0.5 ${
                    theme === "light" ? "text-gray-400" : "text-[#6b7280]"
                }`} aria-hidden="true" />
                <span className={`text-base ${
                    theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                }`}>Palmares, Alajuela, Costa Rica</span>
              </li>
              <li>
                <a
                  href="mailto:emanuel260902@gmail.com"
                  className={`inline-flex items-center gap-3 min-h-[44px] min-w-[44px] text-base transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-2 py-1 ${
                      theme === "light"
                          ? "text-gray-600 hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
                          : "text-[#9ca3af] hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
                  }`}
                  aria-label="Enviar correo electrónico a emanuel260902@gmail.com"
                >
                  <FaEnvelope className="text-base" aria-hidden="true" />
                  <span>emanuel260902@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/50662076022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 min-h-[44px] min-w-[44px] text-base transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-2 py-1 ${
                      theme === "light"
                          ? "text-gray-600 hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
                          : "text-[#9ca3af] hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
                  }`}
                  aria-label="Contactar por WhatsApp al número +506 62076022 (se abre en nueva ventana)"
                >
                  <FaWhatsapp className="text-base" aria-hidden="true" />
                  <span>+506 62076022</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-white"
            }`}>{language === "es" ? "Redes Sociales" : "Social Networks"}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/Ebema260902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 min-h-[44px] min-w-[44px] text-base transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-2 py-1 ${
                      theme === "light"
                          ? "text-gray-600 hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
                          : "text-[#9ca3af] hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
                  }`}
                  aria-label="Visitar perfil de GitHub Ebema260902 (se abre en nueva ventana)"
                >
                  <FaGithub className="text-base" aria-hidden="true" />
                  <span>/Ebema260902</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/emanuel-ag%C3%BCero-moya-21b6b81a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 min-h-[44px] min-w-[44px] text-base transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-2 py-1 ${
                      theme === "light"
                          ? "text-gray-600 hover:text-[#3b82f6] hover:bg-gray-50 focus:ring-offset-white"
                          : "text-[#9ca3af] hover:text-[#60a5fa] hover:bg-gray-800/50 focus:ring-offset-black"
                  }`}
                  aria-label="Visitar perfil de LinkedIn de Emanuel Agüero Moya (se abre en nueva ventana)"
                >
                  <FaLinkedin className="text-base" aria-hidden="true" />
                  <span>Emanuel Agüero Moya</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t pt-6 mt-8 ${
            theme === "light" ? "border-gray-200" : "border-[#1a1a1a]"
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-xs ${
                theme === "light" ? "text-gray-500" : "text-[#9ca3af]"
            }`}>
              © 2024 Emanuel Agüero. {t.footer.rights}.
            </p>
            <p className={`text-xs ${
                theme === "light" ? "text-gray-500" : "text-[#9ca3af]"
            }`}>
              {language === "es" ? "Desarrollado con React y TailwindCSS" : "Developed with React and TailwindCSS"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
