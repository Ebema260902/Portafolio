import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useTheme } from "../contexts/ThemeContext.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Ticolancer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const { theme } = useTheme();

  const technologies = [
    { src: "assets/images/icons/php.png", name: "PHP" },
    { src: "assets/images/icons/heidisql.png", name: "HeidiSQL" },
    { src: "assets/images/icons/laravel.png", name: "Laravel" },
    { src: "assets/images/icons/react.png", name: "React" },
    { src: "assets/images/icons/tailwind.png", name: "Tailwind CSS" },
    { src: "assets/images/icons/js.webp", name: "JavaScript" },
    { src: "assets/images/icons/html.png", name: "HTML5" },
    { src: "assets/images/icons/css.png", name: "CSS3" },
    { src: "assets/images/icons/github-logo.png", name: "GitHub" },
  ];

  const sliderImages = [
    "ticolancer-home",
    "ticolancer1",
    "ticolancer2",
    "ticolancer3",
    "ticolancer4",
    "ticolancer5",
    "ticolancer6",
    "ticolancer7",
  ];

  const openModal = (src) => {
    setModalImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <main id="main-content" className={`w-full transition-colors pt-24 ${
        theme === "light" ? "bg-white" : "bg-[#0d1117]"
    }`} role="main" aria-label="Detalles del proyecto Ticolancer">
      {/* Header estilo GitHub */}
      <div className={`border-b ${
          theme === "light" ? "border-gray-200 bg-white" : "border-[#30363d] bg-[#161b22]"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <svg className={`w-5 h-5 ${theme === "light" ? "text-gray-500" : "text-[#8b949e]"}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <a 
                href="https://github.com/Ebema260902" 
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm hover:underline ${
                    theme === "light" ? "text-gray-600 hover:text-blue-600" : "text-[#58a6ff] hover:text-[#79c0ff]"
                }`}
                aria-label="Visitar perfil de GitHub Ebema260902 (se abre en nueva ventana)"
              >
                Ebema260902
              </a>
              <span className={`${theme === "light" ? "text-gray-400" : "text-[#6e7681]"}`}>/</span>
              <h1 className={`text-xl font-semibold ${
                  theme === "light" ? "text-gray-900" : "text-[#c9d1d9]"
              }`}>Ticolancer</h1>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Ebema260902/Ticolancer"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-1.5 text-sm font-medium rounded-md border transition-colors ${
                    theme === "light"
                        ? "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                        : "bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d]"
                }`}
                aria-label="Ver repositorio de Ticolancer en GitHub (se abre en nueva ventana)"
              >
                <svg className="w-4 h-4 inline mr-1.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Ver repositorio de Ticolancer en GitHub
              </a>
            </div>
          </div>
          <p className={`text-sm mb-4 ${
              theme === "light" ? "text-gray-600" : "text-[#8b949e]"
          }`}>
            Plataforma de freelancers diseñada para conectar profesionales con oportunidades de trabajo
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className={`flex items-center gap-1.5 ${theme === "light" ? "text-gray-600" : "text-[#8b949e]"}`}>
              <span className={`inline-block w-3 h-3 rounded-full ${theme === "light" ? "bg-green-500" : "bg-[#238636]"}`} aria-hidden="true"></span>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>Public</span>
            </span>
            <a 
              href="https://github.com/Ebema260902/Ticolancer" 
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:underline ${
                  theme === "light" ? "text-gray-600 hover:text-blue-600" : "text-[#58a6ff] hover:text-[#79c0ff]"
              }`}
              aria-label="Ver repositorio de Ticolancer en GitHub (se abre en nueva ventana)"
            >
              <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Laravel
            </a>
            <span className={`${theme === "light" ? "text-gray-600" : "text-[#8b949e]"}`}>
              <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Updated 3 months ago
            </span>
          </div>
        </div>
      </div>

      {/* Contenido principal estilo GitHub README */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contenido principal (README) */}
          <div className="lg:col-span-8">
            {/* Galería de imágenes */}
            <div className={`rounded-lg border mb-6 overflow-hidden ${
                theme === "light" ? "border-gray-200 bg-white" : "border-[#30363d] bg-[#0d1117]"
            }`}>
              <div className={`p-4 border-b ${
                  theme === "light" ? "border-gray-200" : "border-[#30363d]"
              }`}>
                <h2 className={`text-lg font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-[#c9d1d9]"
                }`}>
                  📸 Screenshots
                </h2>
              </div>
              <div className="p-4">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{ delay: 3500 }}
                  navigation
                  pagination={{ clickable: true }}
                  className="rounded-lg"
                >
                  {sliderImages.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={`assets/images/ticolancer/${img}.png`}
                        alt={`Ticolancer ${img}`}
                        className={`w-full h-auto rounded-lg cursor-pointer border ${
                            theme === "light" ? "border-gray-200" : "border-[#30363d]"
                        }`}
                        onClick={() =>
                          openModal(`assets/images/ticolancer/${img}.png`)
                        }
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Contenido del proyecto */}
            <article className={`rounded-lg border ${
                theme === "light" ? "border-gray-200 bg-white" : "border-[#30363d] bg-[#0d1117]"
            }`}>
              <div className={`px-6 py-4 markdown-body ${
                  theme === "light" ? "text-gray-800" : "text-[#c9d1d9]"
              }`}>
                <h1 className={`text-3xl font-bold mb-4 pb-4 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>
                  <a 
                    href="https://github.com/Ebema260902/Ticolancer" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline ${
                        theme === "light" ? "text-gray-900" : "text-[#58a6ff]"
                    }`}
                    aria-label="Ver repositorio de Ticolancer en GitHub (se abre en nueva ventana)"
                  >Ticolancer</a>
                </h1>
                <p className={`text-lg mb-6 ${
                    theme === "light" ? "text-gray-600" : "text-[#8b949e]"
                }`}>
                  Plataforma de freelancers diseñada para conectar profesionales con oportunidades de trabajo en diversos sectores.
                </p>

                <h2 className={`text-2xl font-semibold mt-8 mb-4 pb-2 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>✨ Características</h2>
                <ul className={`list-disc pl-6 mb-6 space-y-2 ${
                    theme === "light" ? "text-gray-700" : "text-[#c9d1d9]"
                }`}>
                  <li>Interfaz moderna y accesible</li>
                  <li>Gestión de perfiles y portafolios</li>
                  <li>Publicación y búsqueda de trabajos</li>
                  <li>Seguridad en pagos y contratos</li>
                </ul>

                <h2 className={`text-2xl font-semibold mt-8 mb-4 pb-2 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>🛠️ Tecnologías</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  {technologies.map((tech, index) => (
                    <span key={index} className={`px-3 py-1 rounded-md text-sm border ${
                        theme === "light"
                            ? "bg-gray-50 border-gray-300 text-gray-700"
                            : "bg-[#161b22] border-[#30363d] text-[#c9d1d9]"
                    }`}>
                      {tech.name}
                    </span>
                  ))}
                </div>

                <h2 className={`text-2xl font-semibold mt-8 mb-4 pb-2 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>📋 Metodología</h2>
                <p className={`mb-4 ${
                    theme === "light" ? "text-gray-700" : "text-[#c9d1d9]"
                }`}>
                  El proyecto se desarrolló siguiendo una metodología ágil con enfoque en desarrollo iterativo. 
                  Se utilizaron técnicas de diseño centrado en el usuario (UCD) para garantizar una experiencia intuitiva.
                </p>
                <ul className={`list-disc pl-6 mb-6 space-y-2 ${
                    theme === "light" ? "text-gray-700" : "text-[#c9d1d9]"
                }`}>
                  <li>Desarrollo ágil con sprints semanales</li>
                  <li>Prototipado rápido con Figma</li>
                  <li>Arquitectura MVC con Laravel</li>
                  <li>API RESTful</li>
                </ul>

                <h2 className={`text-2xl font-semibold mt-8 mb-4 pb-2 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>👤 Mi Rol</h2>
                <p className={`mb-4 ${
                    theme === "light" ? "text-gray-700" : "text-[#c9d1d9]"
                }`}>
                  Como desarrollador full-stack, fui responsable de la arquitectura completa del proyecto, 
                  desde el diseño de la base de datos hasta la implementación del frontend y backend.
                </p>

                <h2 className={`text-2xl font-semibold mt-8 mb-4 pb-2 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>📊 Resultados</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Funcionalidades", value: "100%" },
                    { label: "Tiempo", value: "3 meses" },
                    { label: "Tecnologías", value: "8+" },
                    { label: "Módulos", value: "5" },
                  ].map((result, i) => (
                    <div key={i} className={`p-4 rounded-md border ${
                        theme === "light"
                            ? "bg-gray-50 border-gray-200"
                            : "bg-[#161b22] border-[#30363d]"
                    }`}>
                      <div className={`text-sm ${
                          theme === "light" ? "text-gray-600" : "text-[#8b949e]"
                      }`}>{result.label}</div>
                      <div className={`text-2xl font-bold ${
                          theme === "light" ? "text-gray-900" : "text-[#c9d1d9]"
                      }`}>{result.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar estilo GitHub */}
          <div className="lg:col-span-4">
            <div className={`rounded-lg border mb-4 ${
                theme === "light" ? "border-gray-200 bg-white" : "border-[#30363d] bg-[#161b22]"
            }`}>
              <div className={`p-4 border-b ${
                  theme === "light" ? "border-gray-200" : "border-[#30363d]"
              }`}>
                <h3 className={`text-sm font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-[#c9d1d9]"
                }`}>About</h3>
              </div>
              <div className="p-4">
                <p className={`text-sm mb-4 leading-relaxed ${
                    theme === "light" ? "text-gray-600" : "text-[#8b949e]"
                }`}>
                  Ticolancer es una plataforma web completa diseñada para conectar profesionales freelancers con empresas y clientes que buscan servicios especializados. La plataforma ofrece un ecosistema robusto que incluye gestión de perfiles profesionales, publicación y búsqueda de proyectos, sistema de contratos seguros, y herramientas de comunicación integradas. Desarrollada con Laravel en el backend y React en el frontend, Ticolancer proporciona una experiencia de usuario fluida e intuitiva, permitiendo a los freelancers mostrar sus portafolios, habilidades y experiencia, mientras que los clientes pueden publicar proyectos detallados y encontrar el talento adecuado para sus necesidades. La plataforma incluye funcionalidades avanzadas como sistema de calificaciones, gestión de pagos, y seguimiento de proyectos en tiempo real.
                </p>
                <div className="space-y-3">
                  <div>
                    <a 
                      href="https://github.com/Ebema260902/Ticolancer" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm hover:underline ${
                          theme === "light" ? "text-blue-600" : "text-[#58a6ff]"
                      }`}
                      aria-label="Ver repositorio de Ticolancer en GitHub (se abre en nueva ventana)"
                    >
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Ver repositorio de Ticolancer en GitHub
                    </a>
                  </div>
                  <div>
                    <span className={`text-sm ${
                        theme === "light" ? "text-gray-600" : "text-[#8b949e]"
                    }`}>
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Laravel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Imagen ampliada"
            className="max-w-full max-h-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white bg-black bg-opacity-70 rounded-full p-2 text-3xl font-bold hover:bg-opacity-90"
            aria-label="Cerrar modal"
          >
            &times;
          </button>
        </div>
      )}
    </main>
  );
};

export default Ticolancer;
