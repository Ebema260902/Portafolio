import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Descripción */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold">Mi Portafolio</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Este sitio es mi portafolio personal donde comparto proyectos y experiencias en desarrollo web, 
            diseño multimedia y tecnología. Soy un desarrollador full-stack con experiencia en tecnologías modernas como React, TailwindCSS y API REST.
          </p>
        </div>

        {/* Contacto */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold">Contacto</h3>
          <p className="text-gray-400 text-sm">Palmares, Alajuela, Costa Rica</p>
          <p className="text-gray-400 text-sm">+506 62076022</p>
          <p className="text-gray-400 text-sm">emanuel260902@gmail.com</p>
        </div>

        {/* Enlaces */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold">Enlaces</h3>
          <ul className="space-y-2">
            {[
              { label: "Inicio", path: "/" },
              { label: "Contacto", path: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-500 text-xs">© 2024 Emanuel Agüero</p>
      </div>
    </footer>
  );
};

export default Footer;
