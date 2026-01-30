import React, { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";

const Home = () => {
    const { theme } = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Animación de carga que dura 1.5 segundos
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <main 
            id="main-content" 
            className={`min-h-screen pt-20 transition-colors ${
                theme === "light" ? "bg-gray-50" : "bg-black"
            }`}
            role="main" 
            aria-label="Contenido principal"
        >
            {/* Animación de carga */}
            {isLoading && (
                <div 
                    className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
                        theme === "light" ? "bg-gray-50" : "bg-black"
                    }`}
                    aria-label="Cargando contenido"
                >
                    <div className="relative">
                        {/* Círculo principal animado */}
                        <div className="relative w-20 h-20">
                            <div className={`absolute inset-0 rounded-full border-4 border-transparent ${
                                theme === "light" 
                                    ? "border-t-[#3b82f6] border-r-[#3b82f6]" 
                                    : "border-t-[#3b82f6] border-r-[#3b82f6]"
                            } animate-spin-loader`}></div>
                            <div className={`absolute inset-2 rounded-full border-4 border-transparent ${
                                theme === "light" 
                                    ? "border-b-[#2563eb] border-l-[#2563eb]" 
                                    : "border-b-[#2563eb] border-l-[#2563eb]"
                            } animate-spin-loader-reverse`}></div>
                        </div>
                        {/* Puntos decorativos */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                                theme === "light" ? "bg-[#3b82f6]" : "bg-[#3b82f6]"
                            } animate-pulse-delay-1`}></div>
                            <div className={`w-2 h-2 rounded-full ${
                                theme === "light" ? "bg-[#3b82f6]" : "bg-[#3b82f6]"
                            } animate-pulse-delay-2`}></div>
                            <div className={`w-2 h-2 rounded-full ${
                                theme === "light" ? "bg-[#3b82f6]" : "bg-[#3b82f6]"
                            } animate-pulse-delay-3`}></div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Contenido principal con animación de entrada */}
            <div className={`transition-all duration-700 ${
                isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Perfil y Tech Stack en dos columnas arriba */}
                <section aria-labelledby="profile-heading" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Perfil */}
                    <article className={`rounded-xl p-6 transition-all duration-300 hover:shadow-2xl ${
                        theme === "light" 
                            ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50" 
                            : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                    }`}>
                        <div className="mb-5">
                            <h1 id="profile-heading" className={`text-2xl font-bold mb-2 ${
                                theme === "light" ? "text-gray-900" : "text-white"
                            }`}>Emanuel Agüero</h1>
                            <p className="text-[#3b82f6] text-sm font-mono mb-4" aria-label="Usuario de GitHub">@Ebema260902</p>
                        </div>
                        <p className={`text-sm mb-5 leading-relaxed ${
                            theme === "light" ? "text-gray-700" : "text-[#e5e7eb]"
                        }`}>
                            Desarrollador web full-stack, diseñador UX/UI y profesional en experiencia de usuario
                        </p>
                        <address className="space-y-3 mb-5 not-italic">
                            <div className={`flex items-center gap-2 text-sm ${
                                theme === "light" ? "text-gray-600" : "text-[#d1d5db]"
                            }`}>
                                <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>Palmares, Costa Rica</span>
                            </div>
                            <div className={`flex items-center gap-2 text-sm ${
                                theme === "light" ? "text-gray-600" : "text-[#d1d5db]"
                            }`}>
                                <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a href="mailto:emanuel260902@gmail.com" className="hover:text-[#3b82f6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded px-1">
                                    emanuel260902@gmail.com
                                </a>
                            </div>
                        </address>
                        <div className={`border-t pt-4 ${
                            theme === "light" ? "border-gray-200" : "border-[#1a1a1a]"
                        }`}>
                            <a 
                                href="https://github.com/Ebema260902" 
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar perfil de GitHub Ebema260902 (se abre en nueva ventana)"
                                className={`block w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] active:from-[#1d4ed8] active:to-[#1e40af] text-white text-center py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#3b82f6]/50 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
                                    theme === "light" ? "focus:ring-offset-white" : "focus:ring-offset-[#0a0a0a]"
                                }`}
                            >
                                Ver perfil de GitHub →
                            </a>
                        </div>
                    </article>
                    
                    {/* Tech Stack */}
                    <aside className={`rounded-xl p-6 transition-all duration-300 hover:shadow-2xl ${
                        theme === "light" 
                            ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50" 
                            : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                    }`} aria-labelledby="tech-stack-heading">
                        <h2 id="tech-stack-heading" className={`text-sm font-bold mb-4 ${
                            theme === "light" ? "text-gray-900" : "text-white"
                        }`}>
                            Tech Stack
                        </h2>
                        <div className="space-y-4">
                            {/* Stack de Programación */}
                            <div>
                                <h3 className={`text-xs font-semibold mb-2 ${
                                    theme === "light" ? "text-gray-700" : "text-[#d1d5db]"
                                }`}>
                                    Programación
                                </h3>
                                <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías de programación">
                                    {[
                                        "JavaScript", "PHP", "C#",
                                        "React", "TailwindCSS", "Bootstrap", "ASP.NET",
                                        "WordPress",
                                        "Git", "GitHub",
                                        "EC2", "Vercel", "Pantheon",
                                        "SQL Server", "MySQL",
                                        "VS Code", "VS 2022",
                                        "Selenium"
                                    ].map((tech) => (
                                        <span key={tech} className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                                            theme === "light"
                                                ? "bg-gray-100 border border-gray-300 text-gray-800"
                                                : "bg-[#111111] border border-[#1a1a1a] text-[#e5e7eb]"
                                        }`} role="listitem">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Stack de Diseño */}
                            <div>
                                <h3 className={`text-xs font-semibold mb-2 ${
                                    theme === "light" ? "text-gray-700" : "text-[#d1d5db]"
                                }`}>
                                    Diseño
                                </h3>
                                <div className="flex flex-wrap gap-2" role="list" aria-label="Herramientas de diseño">
                                    {[
                                        "UX/UI", "Figma", "Photoshop", "Illustrator"
                                    ].map((tech) => (
                                        <span key={tech} className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                                            theme === "light"
                                                ? "bg-gray-100 border border-gray-300 text-gray-800"
                                                : "bg-[#111111] border border-[#1a1a1a] text-[#e5e7eb]"
                                        }`} role="listitem">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>

                {/* Contenido principal - Todo el ancho */}
                <div className="w-full">
                        {/* Información Personal / Historia */}
                        <section aria-labelledby="personal-info-heading" className={`rounded-xl p-6 mb-6 transition-all duration-300 hover:shadow-2xl ${
                            theme === "light"
                                ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50"
                                : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                        }`}>
                            <h2 id="personal-info-heading" className={`text-lg font-bold mb-4 ${
                                theme === "light" ? "text-gray-900" : "text-white"
                            }`}>
                                Información Personal
                            </h2>
                            <p className={`text-sm leading-relaxed ${
                                theme === "light" ? "text-gray-700" : "text-[#d1d5db]"
                            }`}>
                                Desarrollador full-stack y profesional en experiencia de usuario apasionado por crear soluciones web funcionales y atractivas. 
                                Me enfoco en <span className="text-[#3b82f6] font-medium">frontend moderno, backend robusto, experiencia de usuario y despliegue en la nube</span>. 
                                Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades.
                            </p>
                        </section>

                        {/* Habilidades Blandas */}
                        <section aria-labelledby="soft-skills-heading" className={`rounded-xl p-6 mb-6 transition-all duration-300 hover:shadow-2xl ${
                            theme === "light"
                                ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50"
                                : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                        }`}>
                            <h2 id="soft-skills-heading" className={`text-lg font-bold mb-4 ${
                                theme === "light" ? "text-gray-900" : "text-white"
                            }`}>
                                Habilidades Blandas
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                                {[
                                    "Trabajo en equipo",
                                    "Comunicación efectiva",
                                    "Resolución de problemas",
                                    "Adaptabilidad",
                                    "Pensamiento crítico",
                                    "Gestión del tiempo",
                                    "Aprendizaje continuo",
                                    "Atención al detalle"
                                ].map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" aria-hidden="true"></span>
                                        <span className={`text-sm ${
                                            theme === "light" ? "text-gray-700" : "text-[#e5e7eb]"
                                        }`}>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Resumen de Proyectos */}
                        <div className={`rounded-xl p-6 mb-6 transition-all duration-300 hover:shadow-2xl ${
                            theme === "light"
                                ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50"
                                : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                        }`}>
                            <h2 className={`text-lg font-bold mb-4 ${
                                theme === "light" ? "text-gray-900" : "text-white"
                            }`}>
                                Resumen de Proyectos
                            </h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-[#3b82f6] font-semibold text-sm mb-2">ticolancer</h3>
                                        <p className={`text-xs mb-2 ${
                                            theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                                        }`}>
                                            Plataforma de freelancers con gestión de perfiles y contratos.
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {["Laravel", "React", "MySQL"].map((tech) => (
                                                <span key={tech} className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                                                    theme === "light"
                                                        ? "bg-gray-100 border border-gray-300 text-gray-700"
                                                        : "bg-[#111111] border border-[#1a1a1a] text-[#9ca3af]"
                                                }`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--primary)" }}>jint</h3>
                                        <p className="text-xs mb-2" style={{ color: "var(--text-tertiary)" }}>
                                            Sistema de gestión de tareas para optimizar productividad.
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {["React", "Laravel", "Swiper.js"].map((tech) => (
                                                <span key={tech} className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                                                    theme === "light"
                                                        ? "bg-gray-100 border border-gray-300 text-gray-700"
                                                        : "bg-[#111111] border border-[#1a1a1a] text-[#9ca3af]"
                                                }`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--primary)" }}>kimchis</h3>
                                        <p className="text-xs mb-2" style={{ color: "var(--text-tertiary)" }}>
                                            Plataforma digital para restaurante con menú y reservas.
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {["Laravel", "JavaScript", "MySQL"].map((tech) => (
                                                <span key={tech} className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                                                    theme === "light"
                                                        ? "bg-gray-100 border border-gray-300 text-gray-700"
                                                        : "bg-[#111111] border border-[#1a1a1a] text-[#9ca3af]"
                                                }`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--primary)" }}>aguero-artesanal</h3>
                                        <p className="text-xs mb-2" style={{ color: "var(--text-tertiary)" }}>
                                            Tienda en línea de productos artesanales con WhatsApp.
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {["WordPress", "Elementor"].map((tech) => (
                                                <span key={tech} className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                                                    theme === "light"
                                                        ? "bg-gray-100 border border-gray-300 text-gray-700"
                                                        : "bg-[#111111] border border-[#1a1a1a] text-[#9ca3af]"
                                                }`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`border-t pt-4 mt-4 ${
                                theme === "light" ? "border-gray-200" : "border-[#1a1a1a]"
                            }`}>
                                <Link 
                                    to="/projects"
                                    className={`block w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] active:from-[#1d4ed8] active:to-[#1e40af] text-white text-center py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#3b82f6]/50 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
                                        theme === "light" ? "focus:ring-offset-white" : "focus:ring-offset-[#0a0a0a]"
                                    }`}
                                    aria-label="Explorar todos los proyectos del portafolio"
                                >
                                    Explorar todos los proyectos →
                                </Link>
                            </div>
                        </div>

                        {/* Intereses y Gustos */}
                        <div className={`rounded-xl p-6 mb-6 transition-all duration-300 hover:shadow-2xl ${
                            theme === "light"
                                ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50"
                                : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                        }`}>
                            <h2 className={`text-lg font-bold mb-4 ${
                                theme === "light" ? "text-gray-900" : "text-white"
                            }`}>
                                Intereses y Gustos
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-[#3b82f6] font-semibold text-sm mb-1">Tecnología</h3>
                                    <p className={`text-xs ${
                                        theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                                    }`}>
                                        Exploración de nuevas tecnologías y frameworks.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#3b82f6] font-semibold text-sm mb-1">Diseño UX/UI</h3>
                                    <p className={`text-xs ${
                                        theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                                    }`}>
                                        Creación de interfaces intuitivas con Figma y Adobe.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#3b82f6] font-semibold text-sm mb-1">Aprendizaje Continuo</h3>
                                    <p className={`text-xs ${
                                        theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                                    }`}>
                                        Cursos online y proyectos personales.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#3b82f6] font-semibold text-sm mb-1">Colaboración</h3>
                                    <p className={`text-xs ${
                                        theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                                    }`}>
                                        Trabajo en equipo y proyectos open source.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </main>
    );
};

export default Home;
