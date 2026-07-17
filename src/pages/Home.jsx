import React, { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

const Home = () => {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const t = translations[language];
    const [isLoading, setIsLoading] = useState(true);
    const isLight = theme === "light";

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const tl = translations[language] ? translations[language] : translations["es"];

    const projects = [
        {
            name: "Agencia de Carros",
            description: tl.projects.list.agenciaDeCarros?.description || "",
            link: "https://agencia-de-carros.vercel.app/",
            isExternal: true,
            image: "assets/images/agencia/image.png",
            technologies: ["Next.js", "React", "TailwindCSS"],
        },
        {
            name: "Perfumería",
            description: tl.projects.list.perfumeria?.description || "",
            link: "https://perfume-store-9757.myshopify.com/",
            isExternal: true,
            image: "assets/images/perfumeria/image.png",
            technologies: ["Shopify", "Liquid"],
        },
        {
            name: "Cafetería",
            description: language === "es"
                ? "Sitio web para una cafetería con menú interactivo y diseño moderno."
                : "Coffee shop website with interactive menu and modern design.",
            link: "https://cafeteria-red-eta.vercel.app/",
            isExternal: true,
            image: "assets/images/cafeteria/cafeteria.webp",
            technologies: ["Next.js", "TailwindCSS"],
        },
        {
            name: "Ticolancer",
            description: tl.projects.list.ticolancer?.description || "",
            link: "/ticolancer",
            isExternal: false,
            image: "assets/images/ticolancer/ticolancer-home.png",
            technologies: ["Laravel", "React", "MySQL"],
        },
        {
            name: "Jint",
            description: tl.projects.list.jint?.description || "",
            link: "/jint",
            isExternal: false,
            image: "assets/images/jint/jint5.png",
            technologies: ["React", "Laravel", "Swiper.js"],
        },
    ];

    const renderProjectCard = (repo, key, heightClass) => {
        const inner = (
            <div className={`group relative overflow-hidden rounded-xl ${heightClass} w-full`}>
                <img
                    src={repo.image}
                    alt={repo.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => { e.target.style.opacity = "0.1"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/92 group-hover:via-black/45" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white/75 text-[11px] leading-relaxed mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 line-clamp-2">
                        {repo.description.length > 85 ? repo.description.slice(0, 85) + "…" : repo.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        {repo.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/85 border border-white/20">{tech}</span>
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-sm">{repo.name}</span>
                        <span className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-sm">
                            {repo.isExternal ? "↗" : "→"}
                        </span>
                    </div>
                </div>
            </div>
        );
        const cls = "block rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2";
        return repo.isExternal ? (
            <a key={key} href={repo.link} target="_blank" rel="noopener noreferrer" className={cls}
               aria-label={`${repo.name} — ${language === "es" ? "abre en nueva ventana" : "opens in new tab"}`}>
                {inner}
            </a>
        ) : (
            <Link key={key} to={repo.link} className={cls}
                  aria-label={`${language === "es" ? "Ver proyecto" : "View project"} ${repo.name}`}>
                {inner}
            </Link>
        );
    };

    return (
        <main
            id="main-content"
            className={`min-h-screen pt-20 transition-colors ${isLight ? "bg-gray-50" : "bg-black"}`}
            role="main"
            aria-label="Contenido principal"
        >
            {isLoading && (
                <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${isLight ? "bg-gray-50" : "bg-black"}`}
                     aria-label="Cargando contenido">
                    <div className="relative">
                        <div className="relative w-20 h-20">
                            <div className={`absolute inset-0 rounded-full border-4 border-transparent border-t-[#3b82f6] border-r-[#3b82f6] animate-spin-loader`} />
                            <div className={`absolute inset-2 rounded-full border-4 border-transparent border-b-[#2563eb] border-l-[#2563eb] animate-spin-loader-reverse`} />
                        </div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse-delay-1" />
                            <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse-delay-2" />
                            <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse-delay-3" />
                        </div>
                    </div>
                </div>
            )}

            <div className={`transition-all duration-700 ${isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                <div className="max-w-7xl mx-auto px-4 py-8">

                    {/* ── Hero ── */}
                    <section className="mb-12 text-center">
                        <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
                            Emanuel Agüero
                        </h1>
                        <p className={`text-2xl md:text-3xl font-semibold mb-3 ${isLight ? "text-gray-700" : "text-[#e5e7eb]"}`}>
                            {t.home.subtitle}
                        </p>
                        <p className={`text-lg mb-6 max-w-2xl mx-auto ${isLight ? "text-gray-600" : "text-[#d1d5db]"}`}>
                            {t.home.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/"
                                className={`min-h-[48px] px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] active:from-[#1d4ed8] active:to-[#1e40af] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#3b82f6]/50 active:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${isLight ? "focus:ring-offset-white" : "focus:ring-offset-black"}`}
                                aria-label={language === "es" ? "Ver todos mis proyectos" : "View all my projects"}
                            >
                                {t.home.buttons.viewProjects}
                            </Link>
                            <a
                                href="/Developer Emanuel-Agüero-Resume.pdf"
                                download="CV_Emanuel_Aguero.pdf"
                                className={`min-h-[48px] px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] active:from-[#1d4ed8] active:to-[#1e40af] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#3b82f6]/50 active:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${isLight ? "focus:ring-offset-white" : "focus:ring-offset-black"}`}
                                aria-label={language === "es" ? "Descargar CV de Emanuel Agüero en formato PDF" : "Download Emanuel Agüero's CV in PDF format"}
                            >
                                {t.home.buttons.downloadCV}
                            </a>
                            <a
                                href="/contact"
                                className={`min-h-[48px] px-6 py-3 border-2 font-semibold rounded-lg transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
                                    isLight
                                        ? "border-[#3b82f6] text-[#3b82f6] hover:bg-blue-50 active:bg-blue-100 focus:ring-offset-white"
                                        : "border-[#60a5fa] text-[#60a5fa] hover:bg-blue-500/10 active:bg-blue-500/20 focus:ring-offset-black"
                                }`}
                                aria-label={language === "es" ? "Ir a la página de contacto" : "Go to contact page"}
                            >
                                {t.home.buttons.contactMe}
                            </a>
                        </div>
                    </section>

                    {/* ── About me + Tech Stack ── */}
                    <section aria-labelledby="profile-heading" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* About me */}
                        <article className={`rounded-xl p-6 transition-all duration-300 hover:shadow-2xl ${
                            isLight
                                ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50"
                                : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                        }`}>
                            <div className="mb-5">
                                <h2 id="profile-heading" className={`text-xl font-bold mb-2 ${isLight ? "text-gray-900" : "text-white"}`}>
                                    {t.home.about.title}
                                </h2>
                                <p className="text-[#3b82f6] text-sm font-mono mb-4" aria-label="Usuario de GitHub">@Ebema260902</p>
                            </div>
                            <p className={`text-base mb-5 leading-relaxed ${isLight ? "text-gray-700" : "text-[#e5e7eb]"}`}>
                                {t.home.about.description}
                            </p>
                            <address className="space-y-3 mb-5 not-italic">
                                <div className={`flex items-center gap-2 text-sm ${isLight ? "text-gray-600" : "text-[#d1d5db]"}`}>
                                    <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Palmares, Costa Rica</span>
                                </div>
                                <div className={`flex items-center gap-2 text-sm ${isLight ? "text-gray-600" : "text-[#d1d5db]"}`}>
                                    <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <a
                                        href="mailto:emanuel260902@gmail.com"
                                        className={`inline-block min-h-[44px] min-w-[44px] flex items-center hover:text-[#3b82f6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded-lg px-2 py-1 text-base ${isLight ? "focus:ring-offset-white" : "focus:ring-offset-[#0a0a0a]"}`}
                                    >
                                        <span>emanuel260902@gmail.com</span>
                                    </a>
                                </div>
                            </address>
                            <div className={`border-t pt-4 ${isLight ? "border-gray-200" : "border-[#1a1a1a]"}`}>
                                <a
                                    href="https://github.com/Ebema260902"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visitar perfil de GitHub Ebema260902 (se abre en nueva ventana)"
                                    className={`block w-full min-h-[44px] flex items-center justify-center bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] active:from-[#1d4ed8] active:to-[#1e40af] text-white text-center py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#3b82f6]/50 font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${isLight ? "focus:ring-offset-white" : "focus:ring-offset-[#0a0a0a]"}`}
                                >
                                    <span>{t.home.about.viewGitHub}</span>
                                    <span className="ml-2" aria-hidden="true">→</span>
                                </a>
                            </div>
                        </article>

                        {/* Tech Stack */}
                        <aside className={`rounded-xl p-6 transition-all duration-300 hover:shadow-2xl ${
                            isLight
                                ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50"
                                : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                        }`} aria-labelledby="tech-stack-heading">
                            <h2 id="tech-stack-heading" className={`text-sm font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
                                {t.home.techStack.title}
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className={`text-xs font-semibold mb-2 ${isLight ? "text-gray-700" : "text-[#d1d5db]"}`}>
                                        {t.home.techStack.programming}
                                    </h3>
                                    <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías de programación">
                                        {["JavaScript", "PHP", "C#", "React", "TailwindCSS", "Bootstrap", "ASP.NET", "WordPress", "Git", "GitHub", "EC2", "Vercel", "Pantheon", "SQL Server", "MySQL", "VS Code", "VS 2022", "Selenium"].map((tech) => (
                                            <span key={tech} className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${isLight ? "bg-gray-100 border border-gray-300 text-gray-800" : "bg-[#111111] border border-[#1a1a1a] text-[#e5e7eb]"}`} role="listitem">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className={`text-xs font-semibold mb-2 ${isLight ? "text-gray-700" : "text-[#d1d5db]"}`}>
                                        {t.home.techStack.design}
                                    </h3>
                                    <div className="flex flex-wrap gap-2" role="list" aria-label="Herramientas de diseño">
                                        {["UX/UI", "Figma", "Photoshop", "Illustrator"].map((tech) => (
                                            <span key={tech} className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${isLight ? "bg-gray-100 border border-gray-300 text-gray-800" : "bg-[#111111] border border-[#1a1a1a] text-[#e5e7eb]"}`} role="listitem">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </section>

                    {/* ── Projects (image cards) ── */}
                    <section aria-labelledby="projects-heading" className="mb-6">
                        <div className="flex items-center justify-between mb-5">
                            <h2 id="projects-heading" className={`text-xl font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                                {t.home.projects.title}
                            </h2>
                            <Link
                                to="/"
                                className={`text-sm font-semibold transition-colors ${isLight ? "text-[#3b82f6] hover:text-[#2563eb]" : "text-[#60a5fa] hover:text-[#3b82f6]"}`}
                            >
                                {t.home.projects.viewAll} →
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {projects.slice(0, 3).map((repo, i) => renderProjectCard(repo, i, "h-56 sm:h-64"))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                            {projects.slice(3).map((repo, i) => renderProjectCard(repo, i + 3, "h-52 sm:h-56"))}
                        </div>
                        <Link
                            to="/"
                            className={`block w-full min-h-[44px] flex items-center justify-center bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] active:from-[#1d4ed8] active:to-[#1e40af] text-white text-center py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#3b82f6]/50 font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${isLight ? "focus:ring-offset-white" : "focus:ring-offset-black"}`}
                            aria-label={language === "es" ? "Explorar todos los proyectos del portafolio" : "Explore all portfolio projects"}
                        >
                            <span>{t.home.projects.exploreAll}</span>
                            <span className="ml-2" aria-hidden="true">→</span>
                        </Link>
                    </section>

                    {/* ── What I do ── */}
                    <div className="w-full">
                        <section aria-labelledby="personal-info-heading" className={`rounded-xl p-6 mb-6 transition-all duration-300 hover:shadow-2xl ${
                            isLight
                                ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50"
                                : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                        }`}>
                            <h2 id="personal-info-heading" className={`text-xl font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
                                {t.home.whatIDo.title}
                            </h2>
                            <div className="space-y-3">
                                <p className={`text-base leading-relaxed ${isLight ? "text-gray-700" : "text-[#d1d5db]"}`}>
                                    {t.home.whatIDo.description}
                                </p>
                                <ul className={`space-y-2 list-disc list-inside ${isLight ? "text-gray-700" : "text-[#d1d5db]"}`}>
                                    <li><strong className="text-[#3b82f6]">{t.home.whatIDo.frontend}</strong> React, JavaScript, TailwindCSS</li>
                                    <li><strong className="text-[#3b82f6]">{t.home.whatIDo.backend}</strong> Laravel, PHP, C#, ASP.NET</li>
                                    <li><strong className="text-[#3b82f6]">{t.home.whatIDo.uxui}</strong> Figma, Adobe, diseño centrado en el usuario</li>
                                    <li><strong className="text-[#3b82f6]">{t.home.whatIDo.deployment}</strong> AWS EC2, Vercel, Pantheon</li>
                                </ul>
                            </div>
                        </section>

                        {/* ── Soft Skills ── */}
                        <section aria-labelledby="soft-skills-heading" className={`rounded-xl p-6 mb-6 transition-all duration-300 hover:shadow-2xl ${
                            isLight
                                ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50"
                                : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                        }`}>
                            <h2 id="soft-skills-heading" className={`text-lg font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
                                {t.home.softSkills.title}
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                                {t.home.softSkills.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" aria-hidden="true" />
                                        <span className={`text-base ${isLight ? "text-gray-700" : "text-[#e5e7eb]"}`}>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* ── Interests ── */}
                        <div className={`rounded-xl p-6 mb-6 transition-all duration-300 hover:shadow-2xl ${
                            isLight
                                ? "bg-white border border-gray-200 shadow-xl hover:shadow-blue-200/50"
                                : "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-[#1a1a1a] shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30"
                        }`}>
                            <h2 className={`text-xl font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
                                {t.home.interests.title}
                            </h2>
                            <ul className={`space-y-2 list-disc list-inside ${isLight ? "text-gray-700" : "text-[#d1d5db]"}`}>
                                <li><strong className="text-[#3b82f6]">{t.home.interests.technology}</strong> {t.home.interests.technologyDesc}</li>
                                <li><strong className="text-[#3b82f6]">{t.home.interests.design}</strong> {t.home.interests.designDesc}</li>
                                <li><strong className="text-[#3b82f6]">{t.home.interests.learning}</strong> {t.home.interests.learningDesc}</li>
                                <li><strong className="text-[#3b82f6]">{t.home.interests.collaboration}</strong> {t.home.interests.collaborationDesc}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Home;
