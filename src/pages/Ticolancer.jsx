import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { translations } from "../translations/translations.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Ticolancer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

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

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && modalOpen) {
        setModalOpen(false);
        setModalImage(null);
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  return (
    <main id="main-content" className={`w-full transition-colors pt-20 ${
        theme === "light" ? "bg-white" : "bg-black"
    }`} role="main" aria-label="Detalles del proyecto Ticolancer">
      {/* Título del proyecto */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className={`text-4xl font-bold mb-2 ${
            theme === "light" ? "text-gray-900" : "text-white"
        }`}>
          Ticolancer
        </h1>
        <p className={`text-lg ${
            theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
        }`}>
          {t.projects.individual.ticolancer.description}
        </p>
      </div>

      {/* Contenido principal estilo GitHub README */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contenido principal (README) */}
          <div className="lg:col-span-8">
            {/* Galería de imágenes */}
            <div className={`rounded-lg border mb-6 overflow-hidden ${
                theme === "light" ? "border-gray-200 bg-white" : "border-[#30363d] bg-black"
            }`}>
              <div className={`p-4 border-b ${
                  theme === "light" ? "border-gray-200" : "border-[#30363d]"
              }`}>
                <h2 className={`text-lg font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-[#c9d1d9]"
                }`}>
                  📸 {t.projects.individual.screenshots}
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
                theme === "light" ? "border-gray-200 bg-white" : "border-[#30363d] bg-black"
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
                  {t.projects.individual.ticolancer.description}
                </p>

                <h2 className={`text-2xl font-semibold mt-8 mb-4 pb-2 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>✨ {t.projects.individual.features}</h2>
                <ul className={`list-disc pl-6 mb-6 space-y-2 ${
                    theme === "light" ? "text-gray-700" : "text-[#c9d1d9]"
                }`}>
                  {t.projects.individual.ticolancer.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h2 className={`text-2xl font-semibold mt-8 mb-4 pb-2 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>🛠️ {t.projects.individual.technologies}</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  {technologies.map((tech, index) => (
                    <span key={index} className={`px-3 py-1 rounded-md text-sm border ${
                        theme === "light"
                            ? "bg-gray-50 border-gray-300 text-gray-700"
                            : "bg-[#0a0a0a] border-[#30363d] text-[#c9d1d9]"
                    }`}>
                      {tech.name}
                    </span>
                  ))}
                </div>

                <h2 className={`text-2xl font-semibold mt-8 mb-4 pb-2 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>📋 {t.projects.individual.methodology}</h2>
                <p className={`mb-4 ${
                    theme === "light" ? "text-gray-700" : "text-[#c9d1d9]"
                }`}>
                  {t.projects.individual.ticolancer.methodology.title}
                </p>
                <ul className={`list-disc pl-6 mb-6 space-y-2 ${
                    theme === "light" ? "text-gray-700" : "text-[#c9d1d9]"
                }`}>
                  {t.projects.individual.ticolancer.methodology.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h2 className={`text-2xl font-semibold mt-8 mb-4 pb-2 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>👤 {t.projects.individual.myRole}</h2>
                <p className={`mb-4 ${
                    theme === "light" ? "text-gray-700" : "text-[#c9d1d9]"
                }`}>
                  {t.projects.individual.ticolancer.role}
                </p>

                <h2 className={`text-2xl font-semibold mt-8 mb-4 pb-2 border-b ${
                    theme === "light" ? "border-gray-200" : "border-[#30363d]"
                }`}>📊 {t.projects.individual.results}</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: t.projects.individual.labels.functionalities, value: "100%" },
                    { label: t.projects.individual.labels.time, value: language === "es" ? "3 meses" : "3 months" },
                    { label: t.projects.individual.technologies, value: "8+" },
                    { label: t.projects.individual.labels.modules, value: "5" },
                  ].map((result, i) => (
                    <div key={i} className={`p-4 rounded-md border ${
                        theme === "light"
                            ? "bg-gray-50 border-gray-200"
                            : "bg-[#0a0a0a] border-[#30363d]"
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
                theme === "light" ? "border-gray-200 bg-white" : "border-[#30363d] bg-[#0a0a0a]"
            }`}>
              <div className={`p-4 border-b ${
                  theme === "light" ? "border-gray-200" : "border-[#30363d]"
              }`}>
                <h3 className={`text-sm font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-[#c9d1d9]"
                }`}>{t.projects.individual.about}</h3>
              </div>
              <div className="p-4">
                <p className={`text-sm mb-4 leading-relaxed ${
                    theme === "light" ? "text-gray-600" : "text-[#8b949e]"
                }`}>
                  {t.projects.individual.ticolancer.about}
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
                      aria-label={language === "es" ? "Ver repositorio de Ticolancer en GitHub (se abre en nueva ventana)" : "View Ticolancer repository on GitHub (opens in new window)"}
                    >
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {t.projects.individual.viewRepository}
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
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={language === "es" ? "Vista ampliada de imagen" : "Expanded image view"}
        >
          <img
            src={modalImage}
            alt={language === "es" ? "Imagen ampliada del proyecto" : "Expanded project image"}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 min-h-[44px] min-w-[44px] flex items-center justify-center text-white bg-black bg-opacity-70 hover:bg-opacity-90 active:bg-opacity-100 rounded-full p-2 text-3xl font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label={language === "es" ? "Cerrar vista ampliada (presiona Escape)" : "Close expanded view (press Escape)"}
            type="button"
          >
            &times;
          </button>
        </div>
      )}
    </main>
  );
};

export default Ticolancer;
