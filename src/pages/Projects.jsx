import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useTheme } from "../contexts/ThemeContext.jsx";

const Projects = () => {
    const { theme } = useTheme();
    const repositories = [
        {
            name: "ticolancer",
            description: "Plataforma de freelancers diseñada para conectar trabajadores con oportunidades de trabajo en diversos sectores. Incluye gestión de perfiles, publicación de proyectos y sistema de contratos.",
            language: "PHP",
            languageColor: "#e34c26",
            link: "/ticolancer",
            isPrivate: false,
            image: "assets/images/ticolancer/ticolancer-home.png",
            technologies: ["Laravel", "React", "MySQL", "TailwindCSS"],
            type: "Plataforma Web",
            features: ["Autenticación", "Sistema de contratos", "Búsqueda avanzada"]
        },
        {
            name: "jint",
            description: "Sistema de gestión de tareas diseñado para optimizar la productividad. Permite organizar proyectos, establecer prioridades y mejorar la colaboración en equipo.",
            language: "React",
            languageColor: "#61dafb",
            link: "/jint",
            isPrivate: false,
            image: "assets/images/jint/jint5.png",
            technologies: ["React", "Laravel", "Swiper.js", "TailwindCSS"],
            type: "Aplicación Web",
            features: ["Gestión de tareas", "Prioridades", "Colaboración"]
        },
        {
            name: "kimchis",
            description: "Plataforma digital creada para mejorar la experiencia gastronómica del restaurante de comida coreana. Incluye menú digital, sistema de reservas y promociones.",
            language: "PHP",
            languageColor: "#e34c26",
            link: "/kimchis",
            isPrivate: false,
            image: "assets/images/kimchis/kimchis1.png",
            technologies: ["Laravel", "JavaScript", "MySQL", "Bootstrap"],
            type: "Sitio Web Restaurante",
            features: ["Menú digital", "Reservas online", "Sistema de promociones"]
        },
        {
            name: "aguero-artesanal",
            description: "Tienda en línea dedicada a la creación y venta de productos artesanales en madera hechos a mano. Catálogo dinámico con integración de WhatsApp para pedidos.",
            language: "WordPress",
            languageColor: "#0073aa",
            link: "/agueroartesanal",
            isPrivate: false,
            image: "assets/images/agueroartesanal/agueroartesanal.png",
            technologies: ["WordPress", "Elementor", "WooCommerce"],
            type: "E-commerce",
            features: ["Catálogo dinámico", "Integración WhatsApp", "Responsive"]
        }
    ];

    return (
        <main id="main-content" className={`min-h-screen pt-20 transition-colors ${
            theme === "light" ? "bg-gray-50" : "bg-black"
        }`} role="main" aria-label="Página de proyectos">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className={`text-4xl font-bold mb-2 ${
                        theme === "light" ? "text-gray-900" : "text-white"
                    }`}>Proyectos</h1>
                    <p className={`text-sm ${
                        theme === "light" ? "text-gray-600" : "text-[#9ca3af]"
                    }`}>Proyectos desarrollados</p>
                </div>

                {/* Projects list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {repositories.map((repo, index) => (
                        <Link
                            key={index}
                            to={repo.link}
                            className={`group rounded-xl overflow-hidden hover:border-[#3b82f6]/50 focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl hover:shadow-[#3b82f6]/30 ${
                                theme === "light"
                                    ? "bg-white border border-gray-200 focus:ring-offset-white"
                                    : "bg-[#0a0a0a] border border-[#1a1a1a] focus:ring-offset-black"
                            }`}
                        >
                            {/* Imagen del proyecto */}
                            <div className="w-full h-48 overflow-hidden">
                                <img
                                    src={repo.image}
                                    alt={repo.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            
                            {/* Contenido del proyecto */}
                            <div className="p-6">
                                <div className="mb-3">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[#3b82f6] font-bold text-xl group-hover:text-[#60a5fa] transition-colors">{repo.name}</span>
                                        {repo.type && (
                                            <span className={`text-xs px-2 py-0.5 rounded ${
                                                theme === "light" 
                                                    ? "bg-blue-50 text-blue-700" 
                                                    : "bg-blue-900/30 text-blue-400"
                                            }`}>
                                                {repo.type}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className={`text-sm mb-4 leading-relaxed ${
                                    theme === "light" ? "text-gray-700" : "text-[#d1d5db]"
                                }`}>{repo.description}</p>
                                
                                {/* Tecnologías */}
                                {repo.technologies && repo.technologies.length > 0 && (
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {repo.technologies.slice(0, 4).map((tech, idx) => (
                                                <span key={idx} className={`px-2 py-0.5 rounded text-xs font-mono ${
                                                    theme === "light"
                                                        ? "bg-gray-100 text-gray-700"
                                                        : "bg-[#111111] text-[#9ca3af]"
                                                }`}>
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
                                                }`}>
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
