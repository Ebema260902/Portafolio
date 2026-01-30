import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

const Projects = () => {
    const { theme } = useTheme();
    const { language } = useLanguage();
    
    // Validar que el idioma existe en las traducciones, si no usar 'es' por defecto
    const currentLanguage = translations[language] ? language : "es";
    const t = translations[currentLanguage];
    
    // Validar que las traducciones existen antes de usarlas
    if (!t || !t.projects || !t.projects.list) {
        console.error("Error: Translations not found for language:", currentLanguage);
        return (
            <main id="main-content" className={`min-h-screen pt-20 transition-colors ${
                theme === "light" ? "bg-gray-50" : "bg-black"
            }`} role="main" aria-label={language === "es" ? "Página de proyectos" : "Projects page"}>
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className={`rounded-xl p-6 border-2 ${
                        theme === "light" 
                            ? "bg-white border-red-200 text-gray-900" 
                            : "bg-[#0a0a0a] border-red-500/30 text-white"
                    }`}>
                        <h2 className={`text-xl font-bold mb-2 ${
                            theme === "light" ? "text-red-600" : "text-red-400"
                        }`}>
                            {language === "es" ? "Error al cargar el contenido" : "Error loading content"}
                        </h2>
                        <p className={`text-base mb-4 ${
                            theme === "light" ? "text-gray-700" : "text-[#d1d5db]"
                        }`}>
                            {language === "es" 
                                ? "No se pudieron cargar las traducciones. Por favor, recarga la página o intenta cambiar el idioma."
                                : "Could not load translations. Please refresh the page or try changing the language."}
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className={`min-h-[44px] px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
                                theme === "light" ? "focus:ring-offset-white" : "focus:ring-offset-black"
                            }`}
                            aria-label={language === "es" ? "Recargar página" : "Reload page"}
                        >
                            {language === "es" ? "Recargar página" : "Reload page"}
                        </button>
                    </div>
                </div>
            </main>
        );
    }
    
    const repositories = [
        {
            name: "ticolancer",
            description: t.projects.list.ticolancer?.description || "",
            language: "PHP",
            languageColor: "#e34c26",
            link: "/ticolancer",
            isPrivate: false,
            image: "assets/images/ticolancer/ticolancer-home.png",
            technologies: ["Laravel", "React", "MySQL", "TailwindCSS"],
            type: t.projects.list.ticolancer?.type || "",
            features: t.projects.list.ticolancer?.features || []
        },
        {
            name: "jint",
            description: t.projects.list.jint?.description || "",
            language: "React",
            languageColor: "#61dafb",
            link: "/jint",
            isPrivate: false,
            image: "assets/images/jint/jint5.png",
            technologies: ["React", "Laravel", "Swiper.js", "TailwindCSS"],
            type: t.projects.list.jint?.type || "",
            features: t.projects.list.jint?.features || []
        },
        {
            name: "kimchis",
            description: t.projects.list.kimchis?.description || "",
            language: "PHP",
            languageColor: "#e34c26",
            link: "/kimchis",
            isPrivate: false,
            image: "assets/images/kimchis/kimchis1.png",
            technologies: ["Laravel", "JavaScript", "MySQL", "Bootstrap"],
            type: t.projects.list.kimchis?.type || "",
            features: t.projects.list.kimchis?.features || []
        },
        {
            name: "aguero-artesanal",
            description: t.projects.list.agueroArtesanal?.description || "",
            language: "WordPress",
            languageColor: "#0073aa",
            link: "/agueroartesanal",
            isPrivate: false,
            image: "assets/images/agueroartesanal/agueroartesanal.png",
            technologies: ["WordPress", "Elementor", "WooCommerce"],
            type: t.projects.list.agueroArtesanal?.type || "",
            features: t.projects.list.agueroArtesanal?.features || []
        }
    ];

    return (
        <main id="main-content" className={`min-h-screen pt-20 transition-colors ${
            theme === "light" ? "bg-gray-50" : "bg-black"
        }`} role="main" aria-label={language === "es" ? "Página de proyectos" : "Projects page"}>
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
                            {t.projects.title}
                        </li>
                    </ol>
                </nav>

                {/* Header - Claridad del propósito */}
                <div className="mb-8">
                    <h1 className={`text-4xl font-bold mb-2 ${
                        theme === "light" ? "text-gray-900" : "text-white"
                    }`}>{t.projects.title}</h1>
                    <p className={`text-lg ${
                        theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                    }`}>
                        {t.projects.description}
                    </p>
                </div>

                {/* Projects list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {repositories.map((repo, index) => (
                        <Link
                            key={index}
                            to={repo.link}
                            className={`group block rounded-xl overflow-hidden hover:border-[#3b82f6] hover:scale-[1.02] active:scale-[0.98] focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#3b82f6]/30 active:shadow-md border-2 no-underline ${
                                theme === "light"
                                    ? "bg-white border-gray-200 focus:ring-offset-white"
                                    : "bg-[#0a0a0a] border-[#1a1a1a] focus:ring-offset-black"
                            }`}
                            aria-label={language === "es" ? `Ver detalles del proyecto ${repo.name}. Presiona Enter o haz clic para abrir` : `View ${repo.name} project details. Press Enter or click to open`}
                        >
                            {/* Imagen del proyecto */}
                            <div className={`w-full h-48 overflow-hidden relative ${
                                theme === "light" ? "bg-gray-100" : "bg-[#111111]"
                            }`}>
                                <img
                                    src={repo.image}
                                    alt={language === "es" ? `Captura de pantalla del proyecto ${repo.name}` : `${repo.name} project screenshot`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        if (e.target.nextSibling) {
                                            e.target.nextSibling.style.display = 'flex';
                                        }
                                    }}
                                />
                                <div className={`hidden w-full h-full items-center justify-center ${
                                    theme === "light" ? "text-gray-400" : "text-[#6b7280]"
                                }`}>
                                    <span className="text-sm">{language === "es" ? "Imagen no disponible" : "Image not available"}</span>
                                </div>
                            </div>
                            
                            {/* Contenido del proyecto */}
                            <div className="p-6" style={{ textDecoration: 'none' }}>
                                <div className="mb-3">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[#3b82f6] font-bold text-xl group-hover:text-[#60a5fa] transition-colors underline" style={{ textDecoration: 'underline' }}>{repo.name}</span>
                                        {repo.type && (
                                            <span className={`text-xs px-2 py-0.5 rounded ${
                                                theme === "light" 
                                                    ? "bg-blue-50 text-blue-700" 
                                                    : "bg-blue-900/30 text-blue-400"
                                            }`} style={{ textDecoration: 'none' }}>
                                                {repo.type}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className={`text-base mb-4 leading-relaxed ${
                                    theme === "light" ? "text-gray-700" : "text-[#d1d5db]"
                                }`} style={{ textDecoration: 'none' }}>{repo.description}</p>
                                
                                {/* Tecnologías */}
                                {repo.technologies && repo.technologies.length > 0 && (
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {repo.technologies.slice(0, 4).map((tech, idx) => (
                                                <span key={idx} className={`px-2 py-0.5 rounded text-xs font-mono ${
                                                    theme === "light"
                                                        ? "bg-gray-100 text-gray-700"
                                                        : "bg-[#111111] text-[#9ca3af]"
                                                }`} style={{ textDecoration: 'none' }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {/* Características destacadas */}
                                {repo.features && repo.features.length > 0 && (
                                    <div className={`pt-3 border-t ${
                                        theme === "light" ? "border-gray-200" : "border-[#1a1a1a]"
                                    }`}>
                                        <div className="flex flex-wrap gap-1.5">
                                            {repo.features.map((feature, idx) => (
                                                <span key={idx} className={`text-xs px-2 py-0.5 rounded ${
                                                    theme === "light"
                                                        ? "bg-blue-50 text-blue-700"
                                                        : "bg-blue-900/20 text-blue-400"
                                                }`} style={{ textDecoration: 'none' }}>
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Projects;
