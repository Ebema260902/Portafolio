import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaMapMarkerAlt, FaHome, FaProjectDiagram, FaAddressCard } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  
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
            }`}>Mi Portafolio</h3>
            <p className={`text-sm leading-relaxed ${
                theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
            }`}>
              Desarrollador web full-stack, diseñador UX/UI y profesional en experiencia de usuario. 
              Comparto proyectos y experiencias en desarrollo web, diseño multimedia y tecnología.
            </p>
          </div>

          {/* Enlaces */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-white"
            }`}>Navegación</h3>
            <ul className="space-y-2">
              {[
                { label: "Inicio", path: "/", icon: FaHome, ariaLabel: "Ir a la página de inicio" },
                { label: "Proyectos", path: "/projects", icon: FaProjectDiagram, ariaLabel: "Ir a la página de proyectos" },
                { label: "Contacto", path: "/contact", icon: FaAddressCard, ariaLabel: "Ir a la página de contacto" },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-2 text-sm transition-colors ${
                          theme === "light"
                              ? "text-gray-600 hover:text-[#3b82f6]"
                              : "text-[#9ca3af] hover:text-[#60a5fa]"
                      }`}
                      aria-label={link.ariaLabel}
                    >
                      <Icon className="text-xs" aria-hidden="true" />
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
            }`}>Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className={`text-sm mt-0.5 ${
                    theme === "light" ? "text-gray-400" : "text-[#6b7280]"
                }`} aria-hidden="true" />
                <span className={`text-sm ${
                    theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                }`}>Palmares, Alajuela, Costa Rica</span>
              </li>
              <li>
                <a
                  href="mailto:emanuel260902@gmail.com"
                  className={`flex items-center gap-3 text-sm transition-colors ${
                      theme === "light"
                          ? "text-gray-600 hover:text-[#3b82f6]"
                          : "text-[#9ca3af] hover:text-[#60a5fa]"
                  }`}
                  aria-label="Enviar correo electrónico a emanuel260902@gmail.com"
                >
                  <FaEnvelope className="text-sm" aria-hidden="true" />
                  <span>emanuel260902@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/50662076022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-sm transition-colors ${
                      theme === "light"
                          ? "text-gray-600 hover:text-[#3b82f6]"
                          : "text-[#9ca3af] hover:text-[#60a5fa]"
                  }`}
                  aria-label="Contactar por WhatsApp al número +506 62076022 (se abre en nueva ventana)"
                >
                  <FaWhatsapp className="text-sm" aria-hidden="true" />
                  <span>+506 62076022</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-white"
            }`}>Redes Sociales</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/Ebema260902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-sm transition-colors ${
                      theme === "light"
                          ? "text-gray-600 hover:text-[#3b82f6]"
                          : "text-[#9ca3af] hover:text-[#60a5fa]"
                  }`}
                  aria-label="Visitar perfil de GitHub Ebema260902 (se abre en nueva ventana)"
                >
                  <FaGithub className="text-sm" aria-hidden="true" />
                  <span>/Ebema260902</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/emanuel-ag%C3%BCero-moya-21b6b81a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-sm transition-colors ${
                      theme === "light"
                          ? "text-gray-600 hover:text-[#3b82f6]"
                          : "text-[#9ca3af] hover:text-[#60a5fa]"
                  }`}
                  aria-label="Visitar perfil de LinkedIn de Emanuel Agüero Moya (se abre en nueva ventana)"
                >
                  <FaLinkedin className="text-sm" aria-hidden="true" />
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
              © 2024 Emanuel Agüero. Todos los derechos reservados.
            </p>
            <p className={`text-xs ${
                theme === "light" ? "text-gray-500" : "text-[#9ca3af]"
            }`}>
              Desarrollado con React y TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
